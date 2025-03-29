let subtitlePairs = []; // { start: number, en: string, ko: string }
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

function selectBestKoreanTrack(tracks) {
  console.log("📋 Available subtitle tracks:");
  tracks.forEach(t => {
    console.log(`• [${t.languageCode}] ${t.name?.simpleText} ${t.kind ? `(kind: ${t.kind})` : ''}`);
  });

  // Pick the first subtitle track whose name includes "Korean"
  const match = tracks.find(t =>
    t.name?.simpleText?.toLowerCase().includes("korean")
  );

  if (match) {
    console.log(`🎯 Selected Korean track: ${match.name?.simpleText}`);
  } else {
    console.warn("❌ No Korean subtitle track found.");
  }

  return match || null;
}


function selectBestEnglishTrack(tracks) {
  const manual = tracks.find(t => t.languageCode === "en" && !t.kind);
  if (manual) return manual;

  const auto = tracks.find(t => t.languageCode === "en" && t.kind === "asr");
  return auto || null;
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

function matchByTimestamps(enSubs, koSubs) {
  const pairs = [];

  let koIndex = 0;
  let lastKo = "";

  for (let i = 0; i < enSubs.length; i++) {
    const en = enSubs[i];
    let bestKo = "";

    // Move forward in Korean subs to find the closest match
    while (
      koIndex < koSubs.length - 1 &&
      koSubs[koIndex + 1].start <= en.start
    ) {
      koIndex++;
    }

    // Accept this Korean subtitle if it's within a 1.5 second window
    if (
      koIndex < koSubs.length &&
      Math.abs(koSubs[koIndex].start - en.start) < 1.5
    ) {
      bestKo = koSubs[koIndex].text;
      lastKo = bestKo;
    } else {
      bestKo = lastKo; // fallback to last known Korean subtitle
    }

    pairs.push({
      start: en.start,
      en: en.text,
      ko: bestKo
    });
  }

  return pairs;
}

function createFloatingUI() {
  const existing = document.getElementById("floating-subtitle-ui");
  if (existing) existing.remove();

  const container = document.createElement("div");
  container.id = "floating-subtitle-ui";
  container.innerHTML = `
    <div id="subtitle-box">Loading subtitles...</div>
    <div id="subtitle-controls">
      <button id="prev-btn">⏪ Prev</button>
      <button id="live-btn">Live 🔴</button>
      <button id="next-btn">Next ⏩</button>
    </div>
  `;
  document.body.appendChild(container);

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
    .map(pair => `<div><strong>${pair.en}</strong><br><span>${pair.ko}</span></div>`)
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

async function loadSubtitles() {
  const videoId = getVideoId();
  if (!videoId || videoId === lastVideoId) return;
  lastVideoId = videoId;
  liveMode = false;

  console.log("🎬 Loading subtitles for:", videoId);
  createFloatingUI();
  subtitlePairs = [];

  try {
    const html = await fetchVideoPage(videoId);
    const tracks = extractCaptionTracks(html);
    if (!tracks || tracks.length === 0) {
      subtitlePairs = [{ en: "", ko: "⚠️ No subtitle tracks available." }];
      renderSubtitles();
      return;
    }

    const koTrack = selectBestKoreanTrack(tracks);
    const enTrack = selectBestEnglishTrack(tracks);

    if (!koTrack || !enTrack) {
      subtitlePairs = [{ en: "", ko: "⚠️ Missing Korean or English subtitles." }];
      renderSubtitles();
      return;
    }

    const [koSubs, enSubs] = await Promise.all([
      fetchSubtitlesFromBaseUrl(koTrack.baseUrl),
      fetchSubtitlesFromBaseUrl(enTrack.baseUrl),
    ]);

    subtitlePairs = matchByTimestamps(enSubs, koSubs);
  } catch (err) {
    console.error("❌ Error loading subtitles:", err);
    subtitlePairs = [{ en: "", ko: "⚠️ An error occurred." }];
  }

  currentIndex = 0;
  renderSubtitles();
  startLiveSync();
}

// SPA navigation support
let previousUrl = location.href;
setInterval(() => {
  if (location.href !== previousUrl) {
    previousUrl = location.href;
    loadSubtitles();
  }
}, 1000);

loadSubtitles();
