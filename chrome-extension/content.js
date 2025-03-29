let subtitlePairs = []; // { start: number, line1: string, line2: string }
let currentIndex = 0;
const MAX_VISIBLE_LINES = 3;
let lastVideoId = null;
let liveMode = false;
let liveInterval = null;

function getVideoId() {
  const url = window.location.href;
  const match = url.match(/[?&]v=([^&]+)/);
  if (match && match[1]) return match[1];

  const shortMatch = url.match(/youtu\.be\/([^?&]+)/);
  if (shortMatch && shortMatch[1]) return shortMatch[1];

  return null;
}

async function fetchVideoPage(videoId) {
  const res = await fetch(`https://www.youtube.com/watch?v=${videoId}`);
  return await res.text();
}

function extractCaptionTracks(html) {
  const split = html.split('"captions":');
  if (split.length < 2) return null;

  const jsonPart = split[1].split(',"videoDetails')[0];
  try {
    const raw = JSON.parse(jsonPart);
    return raw.playerCaptionsTracklistRenderer.captionTracks || [];
  } catch (err) {
    console.error("❌ Failed to parse caption JSON", err);
    return null;
  }
}

async function fetchSubtitlesFromBaseUrl(baseUrl) {
  const res = await fetch(baseUrl);
  const xml = await res.text();

  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xml, "text/xml");
  const texts = xmlDoc.getElementsByTagName("text");

  const subtitles = [];
  for (let i = 0; i < texts.length; i++) {
    const el = texts[i];
    const start = parseFloat(el.getAttribute("start") || "0");
    const text = decodeURIComponent(el.textContent || "").replace(/\n/g, " ");
    subtitles.push({ start, text });
  }

  return subtitles;
}

function matchByTimestamps(track1Subs, track2Subs) {
  const pairs = [];

  let t2Index = 0;
  let lastT2 = "";

  for (let i = 0; i < track1Subs.length; i++) {
    const t1 = track1Subs[i];
    let bestT2 = "";

    while (
      t2Index < track2Subs.length - 1 &&
      track2Subs[t2Index + 1].start <= t1.start
    ) {
      t2Index++;
    }

    if (
      t2Index < track2Subs.length &&
      Math.abs(track2Subs[t2Index].start - t1.start) < 1.5
    ) {
      bestT2 = track2Subs[t2Index].text;
      lastT2 = bestT2;
    } else {
      bestT2 = lastT2;
    }

    pairs.push({
      start: t1.start,
      line1: t1.text,
      line2: bestT2
    });
  }

  return pairs;
}

function makeDraggable(elem) {
  let isDragging = false;
  let offsetX, offsetY;

  elem.addEventListener("mousedown", e => {
    isDragging = true;
    offsetX = e.clientX - elem.offsetLeft;
    offsetY = e.clientY - elem.offsetTop;
    elem.style.cursor = "grabbing";
  });

  document.addEventListener("mousemove", e => {
    if (isDragging) {
      elem.style.left = `${e.clientX - offsetX}px`;
      elem.style.top = `${e.clientY - offsetY}px`;
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    elem.style.cursor = "grab";
  });
}

function toggleCollapse(container) {
  const toggleBtn = document.createElement("button");
  toggleBtn.id = "collapse-btn";
  toggleBtn.textContent = "−";
  toggleBtn.style.position = "absolute";
  toggleBtn.style.top = "5px";
  toggleBtn.style.right = "5px";
  container.appendChild(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    const body = container.querySelector("#subtitle-box");
    const controls = container.querySelector("#subtitle-controls");
    const isCollapsed = body.style.display === "none";
    if (isCollapsed) {
      container.style.top = container.dataset.prevTop || container.style.top;
      container.style.left = container.dataset.prevLeft || container.style.left;
    } else {
      container.dataset.prevTop = container.style.top;
      container.dataset.prevLeft = container.style.left;
    }
    body.style.display = isCollapsed ? "block" : "none";
    if (controls) controls.style.display = isCollapsed ? "flex" : "none";
    toggleBtn.textContent = isCollapsed ? "−" : "+";
});
}

function createTrackSelectionUI(tracks, savedPosition = null) {
  const existing = document.getElementById("floating-subtitle-ui");
  if (existing) existing.remove();

  const container = document.createElement("div");
  container.id = "floating-subtitle-ui";
  container.style.position = "fixed";
  container.style.top = savedPosition?.top || "20px";
  container.style.left = savedPosition?.left || "unset";
  container.style.right = savedPosition?.right || "20px";
  container.style.background = "rgba(0, 0, 0, 0.85)";
  container.style.color = "white";
  container.style.padding = "12px";
  container.style.borderRadius = "12px";
  container.style.zIndex = 9999;
  container.style.cursor = "grab";
  container.style.maxWidth = "360px";

  container.innerHTML = `
    <div id="subtitle-selectors">
      <label>Track 1:
        <select id="track1-select"></select>
      </label>
      <label>Track 2:
        <select id="track2-select"></select>
      </label>
      <button id="apply-tracks">Apply</button>
    </div>
  `;
  document.body.appendChild(container);
  makeDraggable(container);
  toggleCollapse(container);

  const track1Select = container.querySelector("#track1-select");
  const track2Select = container.querySelector("#track2-select");

  const noneOption = document.createElement("option");
  noneOption.value = "none";
  noneOption.textContent = "None";
  track2Select.appendChild(noneOption);

  tracks.forEach(track => {
    const label = `[${track.languageCode}] ${track.name?.simpleText || "Unnamed"}${track.kind ? " (auto)" : ""}`;
    const opt1 = document.createElement("option");
    const opt2 = document.createElement("option");

    opt1.value = track.baseUrl;
    opt1.textContent = label;
    opt2.value = track.baseUrl;
    opt2.textContent = label;

    if (track.languageCode === "en" && !track1Select.value) opt1.selected = true;
    if (track.name?.simpleText?.toLowerCase().includes("korean") && !track2Select.value) opt2.selected = true;

    track1Select.appendChild(opt1);
    track2Select.appendChild(opt2);
  });

  document.getElementById("apply-tracks").addEventListener("click", async () => {
    const track1Url = track1Select.value;
    const track2Url = track2Select.value;
    if (!track1Url || !track2Url) return;

    const subs1 = await fetchSubtitlesFromBaseUrl(track1Url);
    let subs2 = [];
    if (track2Url !== "none") {
      subs2 = await fetchSubtitlesFromBaseUrl(track2Url);
    }

    subtitlePairs = track2Url === "none"
      ? subs1.map(s => ({ start: s.start, line1: s.text, line2: "" }))
      : matchByTimestamps(subs1, subs2);
    currentIndex = 0;
    createTranslationUI();
    renderSubtitles();
  });
}

function highlightWords(line) {
  return line.split(/(\s+)/).map(word => {
    if (word.trim() === '') return word;
    return `<span class="hover-highlight">${word}</span>`;
  }).join('');
}


function createTranslationUI() {
  const existing = document.getElementById("floating-subtitle-ui");
  if (existing) existing.remove();

  const container = document.createElement("div");
  container.id = "floating-subtitle-ui";
  container.style.position = "fixed";
  container.style.top = "20px";
  container.style.left = "unset";
  container.style.right = "20px";
  container.style.background = "rgba(0, 0, 0, 0.85)";
  container.style.color = "white";
  container.style.padding = "12px";
  container.style.borderRadius = "12px";
  container.style.zIndex = 9999;
  container.style.cursor = "grab";
  container.style.maxWidth = "360px";

  container.innerHTML = `
    <div id="subtitle-box">Loading subtitles...</div>
    <div id="subtitle-controls">
      <button id="back-btn">⬅️ Back</button>
      <button id="prev-btn">⏪ Prev</button>
      <button id="live-btn">Live 🔴</button>
      <button id="next-btn">Next ⏩</button>
    </div>
  `;
  document.body.appendChild(container);
  makeDraggable(container);
  toggleCollapse(container);

  document.getElementById("back-btn").addEventListener("click", () => {
    const container = document.getElementById("floating-subtitle-ui");
    const top = container.style.top;
    const left = container.style.left;
    lastVideoId = null;
    fetchVideoPage(getVideoId()).then(html => {
      const tracks = extractCaptionTracks(html);
      if (!tracks || tracks.length === 0) {
        subtitlePairs = [{ line1: '', line2: '⚠️ No subtitle tracks available.' }];
        renderSubtitles();
        return;
      }
      createTrackSelectionUI(tracks, { top, left });
    }).catch(err => {
      console.error('❌ Error loading subtitles:', err);
      subtitlePairs = [{ line1: '', line2: '⚠️ An error occurred.' }];
      renderSubtitles();
    });
});

  document.getElementById("prev-btn").addEventListener("click", () => {
    liveMode = false;
    if (currentIndex > 0) {
      currentIndex--;
      renderSubtitles();
    }
  });

  document.getElementById("next-btn").addEventListener("click", () => {
    liveMode = false;
    if (currentIndex < subtitlePairs.length - MAX_VISIBLE_LINES) {
      currentIndex++;
      renderSubtitles();
    }
  });

  document.getElementById("live-btn").addEventListener("click", () => {
    liveMode = true;
    scrollToLive();
  });
}

function renderSubtitles() {
  const box = document.getElementById("subtitle-box");
  const visiblePairs = subtitlePairs.slice(currentIndex, currentIndex + MAX_VISIBLE_LINES);

  const html = visiblePairs
    .map(pair => `<div><strong>${highlightWords(pair.line1)}</strong><br><span>${highlightWords(pair.line2)}</span></div>`)
    .join("<br>");

  box.innerHTML = html;
}


function scrollToLive() {
  const video = document.querySelector("video");
  if (!video) return;

  const currentTime = video.currentTime;
  const liveIndex = subtitlePairs.findIndex((pair, i) => {
    const next = subtitlePairs[i + 1];
    return !next || (pair.start <= currentTime && currentTime < next.start);
  });

  if (liveIndex !== -1) {
    currentIndex = Math.max(0, liveIndex - Math.floor(MAX_VISIBLE_LINES / 2));
    renderSubtitles();
  }
}

function startLiveSync() {
  if (liveInterval) clearInterval(liveInterval);
  liveInterval = setInterval(() => {
    if (liveMode) {
      scrollToLive();
    }
  }, 1000);
}

async function loadSubtitles(showSelector = false) {
  const videoId = getVideoId();
  if (!videoId || videoId === lastVideoId) return;
  lastVideoId = videoId;
  liveMode = false;

  try {
    const html = await fetchVideoPage(videoId);
    const tracks = extractCaptionTracks(html);
    if (!tracks || tracks.length === 0) {
      subtitlePairs = [{ line1: "", line2: "⚠️ No subtitle tracks available." }];
      renderSubtitles();
      return;
    }

    let savedPosition = { top: "100px", left: "20px" };
const container = document.getElementById("floating-subtitle-ui");
if (container) {
  savedPosition.top = container.style.top;
  savedPosition.left = container.style.left;
}
createTrackSelectionUI(tracks, savedPosition);
  } catch (err) {
    console.error("❌ Error loading subtitles:", err);
    subtitlePairs = [{ line1: "", line2: "⚠️ An error occurred." }];
    renderSubtitles();
  }

  currentIndex = 0;
  startLiveSync();
}

let previousUrl = location.href;
setInterval(() => {
  if (location.href !== previousUrl) {
    previousUrl = location.href;
    loadSubtitles(true);
  }
}, 1000);

loadSubtitles(true);
