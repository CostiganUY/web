/* =========================================================
   NAVBAR + SCROLL
========================================================= */

const navbar = document.getElementById("mainNav");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-left a, .nav-right a");

function revealSections() {
  const trigger = window.scrollY + window.innerHeight - 120;

  sections.forEach(section => {
    if (trigger > section.offsetTop) {
      section.classList.add("visible");
    }
  });
}

function highlightNav() {
  const scrollPos = window.scrollY + window.innerHeight / 3;

  sections.forEach(section => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navLinks.forEach(link => {
        link.classList.remove("nav-active");

        if (link.getAttribute("href") === `#${section.id}`) {
          link.classList.add("nav-active");
        }
      });
    }
  });
}

let lastScroll = 0;

function handleScroll() {
  revealSections();
  highlightNav();

  if (!navbar) return;

  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    navbar.style.transform = "translateY(0)";
    lastScroll = currentScroll;
    return;
  }

  if (currentScroll > lastScroll) {
    navbar.style.transform = "translateY(-100%)";
  } else {
    navbar.style.transform = "translateY(0)";
  }

  lastScroll = currentScroll;
}

window.addEventListener("scroll", handleScroll, { passive: true });

revealSections();
highlightNav();


/* =========================================================
   SCROLL REVEAL
========================================================= */

const sectionObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.2
  }
);

sections.forEach(section => {
  sectionObserver.observe(section);
});


/* =========================================================
   HERO PARALLAX
========================================================= */

const heroBackground = document.querySelector(".hero-bg");

if (heroBackground) {
  window.addEventListener(
    "scroll",
    () => {
      const offset = window.scrollY * 0.3;
      heroBackground.style.transform = `translateY(${offset}px)`;
    },
    { passive: true }
  );
}


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (event) {
    const targetSelector = this.getAttribute("href");

    if (!targetSelector || targetSelector === "#") return;

    const target = document.querySelector(targetSelector);

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});


/* =========================================================
   GALERÍAS — DATOS
========================================================= */

const galleries = {
  balzo: {
    title: "BALZO",
    images: [
      "assets/img/gallery/balzo/Balzo1.webp",
      "assets/img/gallery/balzo/Balzo2.webp",
      "assets/img/gallery/balzo/Balzo3.webp",
      "assets/img/gallery/balzo/Balzo4.webp",
      "assets/img/gallery/balzo/Balzo5.webp",
      "assets/img/gallery/balzo/Balzo6.webp",
      "assets/img/gallery/balzo/Balzo7.webp",
      "assets/img/gallery/balzo/Balzo8.webp",
      "assets/img/gallery/balzo/Balzo9.webp",
      "assets/img/gallery/balzo/Balzo10.webp",
      "assets/img/gallery/balzo/Balzo11.webp",
      "assets/img/gallery/balzo/Balzo12.webp",
      "assets/img/gallery/balzo/Balzo13.webp",
      "assets/img/gallery/balzo/Balzo14.webp", 
      "assets/img/gallery/balzo/Balzo15.webp"
    ]
  },

  film: {
    title: "FILM",
    images: [
      "assets/img/gallery/film/Film1.webp",
      "assets/img/gallery/film/Film2.webp",
      "assets/img/gallery/film/Film3.webp",
      "assets/img/gallery/film/Film4.webp",
      "assets/img/gallery/film/Film5.webp",
      "assets/img/gallery/film/Film6.webp",
      "assets/img/gallery/film/Film7.webp",
      "assets/img/gallery/film/Film8.webp",
      "assets/img/gallery/film/Film9.webp",
      "assets/img/gallery/film/Film10.webp",
      "assets/img/gallery/film/Film11.webp",
      "assets/img/gallery/film/Film12.webp",
      "assets/img/gallery/film/Film13.webp",
      "assets/img/gallery/film/Film14.webp",
      "assets/img/gallery/film/Film15.webp",
      "assets/img/gallery/film/Film16.webp",
      "assets/img/gallery/film/Film17.webp",
      "assets/img/gallery/film/Film18.webp",
      "assets/img/gallery/film/Film19.webp",
      "assets/img/gallery/film/Film20.webp"
    ]
  },

  grabacion: {
    title: "GRABACIÓN",
    images: [
      "assets/img/gallery/grabacion/Grab1.webp",
      "assets/img/gallery/grabacion/Grab2.webp",
      "assets/img/gallery/grabacion/Grab3.webp",
      "assets/img/gallery/grabacion/Grab4.webp",
      "assets/img/gallery/grabacion/Grab5.webp",
      "assets/img/gallery/grabacion/Grab6.webp",
      "assets/img/gallery/grabacion/Grab7.webp",
      "assets/img/gallery/grabacion/Grab8.webp"
    ]
  },

  lunas: {
    title: "LUNAS",
    images: [
      "assets/img/gallery/lunas/Lunas1.webp",
      "assets/img/gallery/lunas/Lunas2.webp",
      "assets/img/gallery/lunas/Lunas3.webp",
      "assets/img/gallery/lunas/Lunas4.webp",
      "assets/img/gallery/lunas/Lunas5.webp",
      "assets/img/gallery/lunas/Lunas6.webp",
      "assets/img/gallery/lunas/Lunas7.webp",
      "assets/img/gallery/lunas/Lunas8.webp",
      "assets/img/gallery/lunas/Lunas9.webp",
      "assets/img/gallery/lunas/Lunas10.webp",
      "assets/img/gallery/lunas/Lunas11.webp"
    ]
  },

  savia: {
    title: "SAVIA",
    images: [
      "assets/img/gallery/savia/Savia1.webp",
      "assets/img/gallery/savia/Savia2.webp",
      "assets/img/gallery/savia/Savia3.webp",
      "assets/img/gallery/savia/Savia4.webp",
      "assets/img/gallery/savia/Savia5.webp",
      "assets/img/gallery/savia/Savia6.webp",
      "assets/img/gallery/savia/Savia7.webp",
      "assets/img/gallery/savia/Savia8.webp",
      "assets/img/gallery/savia/Savia9.webp",
      "assets/img/gallery/savia/Savia10.webp"
    ]
  },

  barreiro: {
    title: "BARREIRO",
    images: [
      "assets/img/gallery/barreiro/Barreiro1.webp",
      "assets/img/gallery/barreiro/Barreiro2.webp",
      "assets/img/gallery/barreiro/Barreiro3.webp",
      "assets/img/gallery/barreiro/Barreiro4.webp",
      "assets/img/gallery/barreiro/Barreiro5.webp"
    ]
  },

  im: {
    title: "IM",
    images: [
      "assets/img/gallery/im/Im1.webp",
      "assets/img/gallery/im/Im2.webp",
      "assets/img/gallery/im/Im3.webp",
      "assets/img/gallery/im/Im4.webp",
      "assets/img/gallery/im/Im5.webp",
      "assets/img/gallery/im/Im6.webp"
    ]
  },

  inmigrantes: {
    title: "INMIGRANTES",
    images: [
      "assets/img/gallery/inmigrantes/Inmi1.webp",
      "assets/img/gallery/inmigrantes/Inmi2.webp",
      "assets/img/gallery/inmigrantes/Inmi3.webp",
      "assets/img/gallery/inmigrantes/Inmi4.webp",
      "assets/img/gallery/inmigrantes/Inmi5.webp",
      "assets/img/gallery/inmigrantes/Inmi6.webp",
      "assets/img/gallery/inmigrantes/Inmi7.webp"
    ]
  },

  newpalmer: {
    title: "NEW PALMER",
    images: [
      "assets/img/gallery/newpalmer/Newpalmer1.webp",
      "assets/img/gallery/newpalmer/Newpalmer2.webp",
      "assets/img/gallery/newpalmer/Newpalmer3.webp",
      "assets/img/gallery/newpalmer/Newpalmer4.webp",
      "assets/img/gallery/newpalmer/Newpalmer5.webp",
      "assets/img/gallery/newpalmer/Newpalmer6.webp",
      "assets/img/gallery/newpalmer/Newpalmer7.webp"
    ]
  }
};


/* =========================================================
   GALERÍA — MODAL
========================================================= */

const galleryCards = document.querySelectorAll(".gallery-card");
const galleryModal = document.getElementById("galleryModal");
const galleryModalImg = document.getElementById("galleryModalImg");
const galleryModalTitle = document.getElementById("galleryModalTitle");
const galleryModalCounter = document.getElementById("galleryModalCounter");
const galleryModalClose = document.querySelector(".gallery-modal-close");
const galleryPrev = document.querySelector(".gallery-prev");
const galleryNext = document.querySelector(".gallery-next");

let currentGallery = null;
let currentGalleryIndex = 0;

function updateGalleryImage() {
  if (!currentGallery || !galleryModalImg) return;

  galleryModalImg.src =
    currentGallery.images[currentGalleryIndex];

  galleryModalImg.alt = currentGallery.title;

  if (galleryModalTitle) {
    galleryModalTitle.textContent = currentGallery.title;
  }

  if (galleryModalCounter) {
    galleryModalCounter.textContent =
      `${currentGalleryIndex + 1} / ${currentGallery.images.length}`;
  }
}

function openGallery(galleryName) {
  const gallery = galleries[galleryName];

  if (!gallery || !galleryModal) return;

  currentGallery = gallery;
  currentGalleryIndex = 0;

  updateGalleryImage();

  galleryModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeGallery() {
  if (!galleryModal) return;

  galleryModal.classList.remove("active");
  document.body.style.overflow = "";
}

function nextGalleryImage() {
  if (!currentGallery) return;

  currentGalleryIndex =
    (currentGalleryIndex + 1) %
    currentGallery.images.length;

  updateGalleryImage();
}

function previousGalleryImage() {
  if (!currentGallery) return;

  currentGalleryIndex =
    (currentGalleryIndex - 1 + currentGallery.images.length) %
    currentGallery.images.length;

  updateGalleryImage();
}

galleryCards.forEach(card => {
  card.addEventListener("click", () => {
    const galleryName = card.getAttribute("data-gallery");

    if (galleryName) {
      openGallery(galleryName);
    }
  });
});

if (galleryNext) {
  galleryNext.addEventListener("click", nextGalleryImage);
}

if (galleryPrev) {
  galleryPrev.addEventListener("click", previousGalleryImage);
}

if (galleryModalClose) {
  galleryModalClose.addEventListener("click", closeGallery);
}

if (galleryModal) {
  galleryModal.addEventListener("click", event => {
    if (event.target === galleryModal) {
      closeGallery();
    }
  });
}


/* =========================================================
   GALERÍA — TOUCH
========================================================= */

let galleryTouchStartX = 0;
let galleryTouchEndX = 0;

if (galleryModal) {
  galleryModal.addEventListener(
    "touchstart",
    event => {
      if (!galleryModal.classList.contains("active")) return;

      galleryTouchStartX =
        event.changedTouches[0].screenX;
    },
    { passive: true }
  );

  galleryModal.addEventListener(
    "touchend",
    event => {
      if (!galleryModal.classList.contains("active")) return;

      galleryTouchEndX =
        event.changedTouches[0].screenX;

      const swipeDistance =
        galleryTouchEndX - galleryTouchStartX;

      if (Math.abs(swipeDistance) < 50) return;

      if (swipeDistance < 0) {
        nextGalleryImage();
      } else {
        previousGalleryImage();
      }
    },
    { passive: true }
  );
}


/* =========================================================
   BIO — LIGHTBOX
========================================================= */

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const lightboxClose = document.querySelector(".lightbox-close");
const bioImage = document.querySelector(".bio-photo img");

function openLightbox(src, alt = "") {
  if (!lightbox || !lightboxImg) return;

  lightboxImg.src = src;
  lightboxImg.alt = alt;

  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  if (!lightbox) return;

  lightbox.classList.remove("active");
  document.body.style.overflow = "";
}

if (bioImage) {
  bioImage.addEventListener("click", () => {
    openLightbox(
      bioImage.src,
      bioImage.alt || "CÖSTIGAN"
    );
  });
}

if (lightboxClose) {
  lightboxClose.addEventListener("click", closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener("click", event => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
}


/* =========================================================
   MINI PLAYER
========================================================= */

const tracks = [
  "assets/audio/Botánico.mp3",
  "assets/audio/Amanda.mp3",
  "assets/audio/Dolor nuevo.mp3",
  "assets/audio/Perros de caza.mp3",
  "assets/audio/Intrusión.mp3",
  "assets/audio/Balconeras.mp3",
  "assets/audio/Branquias.mp3",
  "assets/audio/Pulitzer.mp3",
  "assets/audio/Puñal.mp3",
  "assets/audio/Nidal.mp3"
];

const trackNames = [
  "ALGAS — Botánico",
  "ALGAS — Amanda",
  "ALGAS — Dolor Nuevo",
  "ALGAS — Perros de Caza",
  "ALGAS — Intrusión",
  "ALGAS — Balconeras",
  "ALGAS — Branquias",
  "ALGAS — Pulitzer",
  "ALGAS — Puñal",
  "ALGAS — Nidal"
];

let currentTrack = 0;

const audio = document.getElementById("mini-audio");
const playButton = document.getElementById("mini-play");
const nextButton = document.getElementById("mini-next");
const miniTitle = document.getElementById("mini-title");

if (audio && playButton && nextButton && miniTitle) {
  function loadTrack(index, autoplay = false) {
    currentTrack = index;

    audio.src = tracks[currentTrack];
    miniTitle.textContent = trackNames[currentTrack];

    if (autoplay) {
      audio
        .play()
        .then(() => {
          playButton.textContent = "⏸";
        })
        .catch(() => {
          playButton.textContent = "▶";
        });
    } else {
      playButton.textContent = "▶";
    }
  }

  audio.addEventListener("play", () => {
    playButton.textContent = "⏸";
  });

  audio.addEventListener("pause", () => {
    playButton.textContent = "▶";
  });

  audio.addEventListener("ended", () => {
    const nextTrack =
      (currentTrack + 1) % tracks.length;

    loadTrack(nextTrack, true);
  });

  playButton.addEventListener("click", () => {
    if (audio.paused) {
      audio
        .play()
        .catch(() => {});
    } else {
      audio.pause();
    }
  });

  nextButton.addEventListener("click", () => {
    const nextTrack =
      (currentTrack + 1) % tracks.length;

    loadTrack(nextTrack, true);
  });

  loadTrack(0);

  audio
    .play()
    .catch(() => {
      console.log("Autoplay bloqueado");
    });
}


/* =========================================================
   SHOW POPUP
========================================================= */

const showModal = document.getElementById("showModal");
const showClose = document.querySelector(".show-close");

if (showModal) {
  window.addEventListener("load", () => {
    showModal.classList.add("active");
  });

  if (showClose) {
    showClose.addEventListener("click", () => {
      showModal.classList.remove("active");
    });
  }

  showModal.addEventListener("click", event => {
    if (event.target === showModal) {
      showModal.classList.remove("active");
    }
  });
}


/* =========================================================
   AFICHES — 3D COVERFLOW
========================================================= */

const posterCarousel =
  document.querySelector(".posters-carousel");

let posterCoverflow = null;

if (posterCarousel) {
  const posterItems =
    posterCarousel.querySelectorAll(".poster");

  const posterPrev =
    posterCarousel.querySelector(".poster-prev");

  const posterNext =
    posterCarousel.querySelector(".poster-next");

  let posterCurrent = 0;
  let posterTouchStartX = 0;
  let posterTouchEndX = 0;

  const posterTotal = posterItems.length;

  function updatePosters() {
    posterItems.forEach((poster, index) => {
      poster.classList.remove(
        "is-center",
        "is-prev",
        "is-next",
        "is-prev-2",
        "is-next-2",
        "is-hidden"
      );

      let difference = index - posterCurrent;

      if (difference > posterTotal / 2) {
        difference -= posterTotal;
      }

      if (difference < -posterTotal / 2) {
        difference += posterTotal;
      }

      if (difference === 0) {
        poster.classList.add("is-center");
      } else if (difference === -1) {
        poster.classList.add("is-prev");
      } else if (difference === 1) {
        poster.classList.add("is-next");
      } else if (difference === -2) {
        poster.classList.add("is-prev-2");
      } else if (difference === 2) {
        poster.classList.add("is-next-2");
      } else {
        poster.classList.add("is-hidden");
      }
    });
  }

  function nextPoster() {
    posterCurrent =
      (posterCurrent + 1) % posterTotal;

    updatePosters();
  }

  function previousPoster() {
    posterCurrent =
      (posterCurrent - 1 + posterTotal) %
      posterTotal;

    updatePosters();
  }

  if (posterNext) {
    posterNext.addEventListener("click", nextPoster);
  }

  if (posterPrev) {
    posterPrev.addEventListener(
      "click",
      previousPoster
    );
  }

  posterItems.forEach((poster, index) => {
    poster.addEventListener("click", () => {
      if (index === posterCurrent) return;

      let difference =
        index - posterCurrent;

      if (difference > posterTotal / 2) {
        difference -= posterTotal;
      }

      if (difference < -posterTotal / 2) {
        difference += posterTotal;
      }

      if (difference === -1) {
        previousPoster();
      } else if (difference === 1) {
        nextPoster();
      }
    });
  });

  posterCarousel.addEventListener(
    "touchstart",
    event => {
      posterTouchStartX =
        event.changedTouches[0].screenX;
    },
    { passive: true }
  );

  posterCarousel.addEventListener(
    "touchend",
    event => {
      posterTouchEndX =
        event.changedTouches[0].screenX;

      const swipeDistance =
        posterTouchEndX - posterTouchStartX;

      if (Math.abs(swipeDistance) < 50) return;

      if (swipeDistance < 0) {
        nextPoster();
      } else {
        previousPoster();
      }
    },
    { passive: true }
  );

  posterCoverflow = {
    element: posterCarousel,
    next: nextPoster,
    previous: previousPoster
  };

  updatePosters();
}


/* =========================================================
   GENERIC 3D COVERFLOW
========================================================= */

function initCoverflowCarousel(selector, options = {}) {
  const carousel =
    document.querySelector(selector);

  if (!carousel) return null;

  const track =
    carousel.querySelector(".cf-track");

  if (!track) return null;

  const items =
    Array.from(track.children);

  if (!items.length) return null;

  const prevButton =
    carousel.querySelector(".cf-prev");

  const nextButton =
    carousel.querySelector(".cf-next");

  let current = 0;
  let touchStartX = 0;
  let touchEndX = 0;
  let swipeDetected = false;

  const total = items.length;

  function update() {
    items.forEach((item, index) => {
      item.classList.remove(
        "cf-item-center",
        "cf-item-prev",
        "cf-item-next",
        "cf-item-prev-2",
        "cf-item-next-2",
        "cf-item-hidden"
      );

      let difference =
        index - current;

      if (difference > total / 2) {
        difference -= total;
      }

      if (difference < -total / 2) {
        difference += total;
      }

      if (difference === 0) {
        item.classList.add("cf-item-center");
      } else if (difference === -1) {
        item.classList.add("cf-item-prev");
      } else if (difference === 1) {
        item.classList.add("cf-item-next");
      } else if (
        total >= 5 &&
        difference === -2
      ) {
        item.classList.add("cf-item-prev-2");
      } else if (
        total >= 5 &&
        difference === 2
      ) {
        item.classList.add("cf-item-next-2");
      } else {
        item.classList.add("cf-item-hidden");
      }
    });
  }

  function next() {
    current =
      (current + 1) % total;

    update();
  }

  function previous() {
    current =
      (current - 1 + total) % total;

    update();
  }

  if (nextButton) {
    nextButton.addEventListener(
      "click",
      next
    );
  }

  if (prevButton) {
    prevButton.addEventListener(
      "click",
      previous
    );
  }

  items.forEach((item, index) => {
    item.addEventListener("click", event => {
      if (swipeDetected) {
        swipeDetected = false;
        return;
      }

      if (event.target.closest("a, button")) {
        return;
      }

      let difference =
        index - current;

      if (difference > total / 2) {
        difference -= total;
      }

      if (difference < -total / 2) {
        difference += total;
      }

      if (difference === -1) {
        previous();
        return;
      }

      if (difference === 1) {
        next();
        return;
      }

      if (
        difference === 0 &&
        typeof options.onCenterClick === "function"
      ) {
        options.onCenterClick(item);
      }
    });
  });

  carousel.addEventListener(
    "touchstart",
    event => {
      touchStartX =
        event.changedTouches[0].screenX;

      swipeDetected = false;
    },
    { passive: true }
  );

  carousel.addEventListener(
    "touchend",
    event => {
      touchEndX =
        event.changedTouches[0].screenX;

      const distance =
        touchEndX - touchStartX;

      if (Math.abs(distance) < 50) {
        return;
      }

      swipeDetected = true;

      if (distance < 0) {
        next();
      } else {
        previous();
      }
    },
    { passive: true }
  );

  update();

  return {
    element: carousel,
    next,
    previous,
    update,
    getCurrent: () => current
  };
}


/* =========================================================
   COVERFLOW — INSTANCIAS
========================================================= */

const videoCoverflow =
  initCoverflowCarousel(".video-carousel", {
    onCenterClick: item => {
      const link =
        item.getAttribute("data-link");

      if (link) {
        window.open(
          link,
          "_blank",
          "noopener,noreferrer"
        );
      }
    }
  });


const galleryCoverflow =
  initCoverflowCarousel(".gallery-carousel", {
    onCenterClick: item => {
      const galleryName =
        item.getAttribute("data-gallery");

      if (galleryName) {
        openGallery(galleryName);
      }
    }
  });


const shirtsCoverflow =
  initCoverflowCarousel(
    ".merch-shirts-carousel"
  );


const totebagsCoverflow =
  initCoverflowCarousel(
    ".merch-totebags-carousel"
  );


const stickersCoverflow =
  initCoverflowCarousel(
    ".merch-stickers-carousel"
  );


const discographyCoverflow =
  initCoverflowCarousel(
    ".discography-carousel"
  );


/* =========================================================
   COVERFLOWS ACTIVOS — TECLADO
========================================================= */

const coverflowCarousels = [
  posterCoverflow,
  videoCoverflow,
  galleryCoverflow,
  shirtsCoverflow,
  totebagsCoverflow,
  stickersCoverflow,
  discographyCoverflow
].filter(Boolean);

let activeCoverflow = null;

coverflowCarousels.forEach(controller => {
  controller.element.addEventListener(
    "mouseenter",
    () => {
      activeCoverflow = controller;
    }
  );

  controller.element.addEventListener(
    "mouseleave",
    () => {
      if (activeCoverflow === controller) {
        activeCoverflow = null;
      }
    }
  );
});


/* =========================================================
   TECLADO GLOBAL
========================================================= */

document.addEventListener("keydown", event => {
  const activeElement =
    document.activeElement;

  if (
    activeElement &&
    (
      activeElement.tagName === "INPUT" ||
      activeElement.tagName === "TEXTAREA" ||
      activeElement.tagName === "SELECT"
    )
  ) {
    return;
  }

  /* Modal de galería */

  if (
    galleryModal &&
    galleryModal.classList.contains("active")
  ) {
    if (event.key === "Escape") {
      closeGallery();
      return;
    }

    if (event.key === "ArrowRight") {
      nextGalleryImage();
      return;
    }

    if (event.key === "ArrowLeft") {
      previousGalleryImage();
      return;
    }

    return;
  }

  /* Lightbox */

  if (
    lightbox &&
    lightbox.classList.contains("active")
  ) {
    if (event.key === "Escape") {
      closeLightbox();
    }

    return;
  }

  /* Coverflows */

  if (!activeCoverflow) return;

  if (event.key === "ArrowRight") {
    activeCoverflow.next();
  }

  if (event.key === "ArrowLeft") {
    activeCoverflow.previous();
  }
});
