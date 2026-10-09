document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("mainNav");
  const year = document.getElementById("year");

  // Dynamic copyright year
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Add a compact shadow to the navigation after scrolling
  const updateNavbar = () => {
    if (navbar) {
      navbar.classList.toggle("scrolled", window.scrollY > 30);
    }
  };

  updateNavbar();
  window.addEventListener("scroll", updateNavbar, { passive: true });

  // Close mobile Bootstrap menu after clicking an internal link
  document.querySelectorAll(".navbar .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      const navMenu = document.getElementById("navMenu");
      if (navMenu && navMenu.classList.contains("show") && window.bootstrap) {
        const collapse = bootstrap.Collapse.getOrCreateInstance(navMenu);
        collapse.hide();
      }
    });
  });

  // Contact form: opens the visitor's email app with the message filled in
  // >>> CHANGE THIS to your own email address <<<
  const CONTACT_EMAIL = "your-email@example.com";

  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (contactForm && formMessage) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const subject = encodeURIComponent("Hello Chaco, from " + name);
      const body = encodeURIComponent(message + "\n\n- " + name + " (" + email + ")");
      formMessage.textContent = "Opening your email app... \ud83d\udc3e";
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    });
  }

  // Placeholder pictures: shown only until you upload your own photo with the same file name
  const placeholderSVG = (label) => "data:image/svg+xml;charset=utf-8," + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="900" viewBox="0 0 900 900">
      <rect width="900" height="900" fill="#fde8da"/>
      <text x="450" y="440" font-size="240" text-anchor="middle" dominant-baseline="middle">\ud83d\udc36</text>
      <text x="450" y="690" font-size="48" font-family="Arial, sans-serif" font-weight="700" fill="#96533f" text-anchor="middle">${label}</text>
    </svg>`);
  document.querySelectorAll("img[data-placeholder]").forEach(img => {
    const fallback = () => { img.onerror = null; img.src = placeholderSVG(img.dataset.placeholder); };
    img.onerror = fallback;
    if (img.complete && img.naturalWidth === 0) fallback();
  });

  // YouTube: paste any normal YouTube link and get an embedded player
  const youtubeEmbed = (url) => {
    const m = (url || "").match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([A-Za-z0-9_-]{11})/);
    return m ? "https://www.youtube.com/embed/" + m[1] : null;
  };

  // Blog: "Read story" opens the full story (text + image + optional video)
  const modalEl = document.getElementById("storyModal");
  if (modalEl && window.bootstrap) {
    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
    const videoBox = document.getElementById("storyVideo");

    document.querySelectorAll(".read-more").forEach(link => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const article = link.closest("article");
        const img = article.querySelector(".post-image img");
        const full = article.querySelector(".post-full");

        document.getElementById("storyTitle").textContent = link.dataset.post || "";
        const storyImg = document.getElementById("storyImg");
        storyImg.src = img.src;
        storyImg.alt = img.alt;
        document.getElementById("storyText").innerHTML = full ? full.innerHTML : "";

        videoBox.innerHTML = "";
        const embed = youtubeEmbed(link.dataset.video);
        videoBox.hidden = !embed;
        if (embed) {
          videoBox.innerHTML = `<iframe src="${embed}" title="${link.dataset.post}" loading="lazy" allowfullscreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>`;
        }
        modal.show();
      });
    });

    // Stop the video when the pop-up closes
    modalEl.addEventListener("hidden.bs.modal", () => { videoBox.innerHTML = ""; });
  }
});
