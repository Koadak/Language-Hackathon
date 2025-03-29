let subtitleChunks = [];
let currentIndex = 0;
const MAX_VISIBLE_LINES = 3;

function getVideoId() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("v");
}

async function fetchKoreanSubtitles(videoId) {
  const url = `https://www.youtube.com/api/timedtext?lang=ko&v=${videoId}`;

  try {
    const res = await fetch(url);
    const xml = await res.text();

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, "text/xml");
    const texts = xmlDoc.getElementsByTagName("text");

    const subtitles = [];
    for (let i = 0; i < texts.length; i++) {
      const text = texts[i].textContent;
      if (text.trim()) subtitles.push(text.replace(/\n/g, " "));
    }

    return subtitles;
  } catch (err) {
    console.error("Failed to fetch subtitles:", err);
    return [];
  }
}

function createFloatingUI() {
  const container = document.createElement("div");
  container.id = "floating-subtitle-ui";
  container.innerHTML = `
    <div id="subtitle-box">Fetching Korean subtitles...</div>
    <div id="subtitle-controls">
      <button id="prev-btn">⏪ Prev</button>
      <button id="next-btn">Next ⏩</button>
    </div>
  `;
  document.body.appendChild(container);

  document.getElementById("prev-btn").addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex -= 1;
      renderSubtitles();
    }
  });

  document.getElementById("next-btn").addEventListener("click", () => {
    if (currentIndex < subtitleChunks.length - MAX_VISIBLE_LINES) {
      currentIndex += 1;
      renderSubtitles();
    }
  });
}

function renderSubtitles() {
  const box = document.getElementById("subtitle-box");
  const visible = subtitleChunks.slice(currentIndex, currentIndex + MAX_VISIBLE_LINES);
  box.innerHTML = visible.join("<br>");
}

async function init() {
  createFloatingUI();
  const videoId = getVideoId();
  subtitleChunks = await fetchKoreanSubtitles(videoId);

  if (subtitleChunks.length === 0) {
    subtitleChunks = ["⚠️ Korean subtitles not available for this video."];
  }

  currentIndex = 0;
  renderSubtitles();
}

// Run it
init();
