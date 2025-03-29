function createFloatingUI() {
  const container = document.createElement("div");
  container.id = "floating-subtitle-ui";
  container.innerHTML = `
    <div id="subtitle-box">Loading subtitles...</div>
  `;
  document.body.appendChild(container);
}

function updateSubtitles() {
  // YouTube captions are in elements with class "caption-window"
  const captionNode = document.querySelector(".caption-window .ytp-caption-segment");
  const box = document.getElementById("subtitle-box");

  if (captionNode && box) {
    box.textContent = captionNode.textContent;
  }
}

// Run it
createFloatingUI();
setInterval(updateSubtitles, 500); // Poll captions

