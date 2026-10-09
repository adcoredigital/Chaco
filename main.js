/* ===== EDIT THIS: the email address that receives contact messages ===== */
const CONTACT_EMAIL = "your-email@example.com";

/* 1. Footer year */
document.querySelectorAll("#year").forEach(el => el.textContent = new Date().getFullYear());

/* 2. Placeholder pictures.
   If an image file is missing (you haven't uploaded yours yet), a friendly
   placeholder shows instead. Once you upload a file with the same name,
   your real photo appears automatically. */
function placeholderSVG(label) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
    <rect width="800" height="800" fill="#f7e8dc"/>
    <text x="400" y="400" font-size="220" text-anchor="middle" dominant-baseline="middle">🐶</text>
    <text x="400" y="610" font-size="44" font-family="Arial, sans-serif" font-weight="700" fill="#b17b1f" text-anchor="middle">${label}</text>
  </svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}
document.querySelectorAll("img[data-placeholder]").forEach(img => {
  const useFallback = () => {
    img.onerror = null;
    img.src = placeholderSVG(img.dataset.placeholder);
  };
  img.onerror = useFallback;
  if (img.complete && img.naturalWidth === 0) useFallback();
});

/* 3. YouTube videos.
   Paste any normal YouTube link in data-youtube and this builds the player. */
function youtubeId(url) {
  const m = url.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : null;
}
document.querySelectorAll("[data-youtube]").forEach(box => {
  const id = youtubeId(box.dataset.youtube);
  if (!id) {
    box.textContent = "Check this YouTube link. It could not be read.";
    return;
  }
  const frame = document.createElement("iframe");
  frame.src = "https://www.youtube.com/embed/" + id;
  frame.title = box.dataset.title || "YouTube video";
  frame.loading = "lazy";
  frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  frame.allowFullscreen = true;
  box.appendChild(frame);
});

/* 4. Contact form: opens the visitor's email app with the message filled in.
   (GitHub Pages cannot run server code, so this is the simplest way that works.) */
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();
    const note = document.getElementById("formNote");
    if (!name || !message) {
      note.textContent = "Please add your name and a message.";
      return;
    }
    note.textContent = "Opening your email app...";
    const subject = encodeURIComponent("Hello Chaco, from " + name);
    const body = encodeURIComponent(message + "\n\n- " + name);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  });
}
