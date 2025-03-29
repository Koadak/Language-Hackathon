let subtitleChunks = [];
let currentIndex = 0;
const MAX_VISIBLE_LINES = 3;

function getVideoId() {
  const url = window.location.href;

  // Try to get v=VIDEO_ID from query string
  const match = url.match(/[?&]v=([^&]+)/);
  if (match && match[1]) {
    return match[1];
  }

  // For short URLs like https://youtu.be/VIDEO_ID
  const shortMatch = url.match(/youtu\.be\/([^?&]+)/);
  if (shortMatch && shortMatch[1]) {
    return shortMatch[1];
  }

  return null;
}


async function fetchKoreanSubtitles(videoId) {
  const subtitleSources = [
    `https://www.youtube.com/api/timedtext?lang=ko&v=${videoId}`,        // manual Korean
    `https://www.youtube.com/api/timedtext?lang=ko&v=${videoId}&asr=1`  // auto Korean
  ];

  for (const url of subtitleSources) {
    try {
      const res = await fetch(url);
      const xml = await res.text();

      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xml, "text/xml");
      const texts = xmlDoc.getElementsByTagName("text");

      if (texts.length === 0) continue;

      const subtitles = [];
      for (let i = 0; i < texts.length; i++) {
        const text = texts[i].textContent;
        if (text.trim()) subtitles.push(text.replace(/\n/g, " "));
      }

      if (subtitles.length > 0) {
        console.log("✅ Subtitles found at:", url);
        return subtitles;
      }
    } catch (err) {
      console.warn("Subtitle fetch failed for", url, err);
    }
  }

  console.warn("❌ No Korean subtitles found via API");
  return [];
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

  if (!videoId) {
    document.getElementById("subtitle-box").innerText = "⚠️ Could not detect video ID.";
    return;
  }

  subtitleChunks = await fetchKoreanSubtitles(videoId);

  if (subtitleChunks.length === 0) {
    subtitleChunks = ["⚠️ Korean subtitles not available for this video."];
  }

  currentIndex = 0;
  renderSubtitles();
}


// Run it
init();
