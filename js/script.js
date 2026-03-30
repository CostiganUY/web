/* =========================
NAVBAR SCROLL EFFECT
========================= */

const nav = document.getElementById("mainNav");

if(nav){

window.addEventListener("scroll", () => {
revealSections();
highlightNav();
}, { passive:true });

}


/* =========================
SCROLL REVEAL SECTIONS
========================= */

const sections = document.querySelectorAll("section");

function revealSections(){

const trigger = window.scrollY + window.innerHeight - 120;

sections.forEach(section => {

if(trigger > section.offsetTop){

section.classList.add("visible");

}

});

}

revealSections();


/* =========================
HERO PARALLAX
========================= */

const hero = document.querySelector(".hero-bg");

if(hero){

window.addEventListener("scroll", () => {
const offset = window.scrollY * 0.3;
hero.style.transform = `translateY(${offset}px)`;
});
  
}


/* =========================
SMOOTH SCROLL NAV
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

const target = document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({
behavior:"smooth"
});

}

});

});

/* =========================
ACTIVE NAV SECTION GLOW
========================= */

const navLinks = document.querySelectorAll(".nav-left a, .nav-right a");
const pageSections = document.querySelectorAll("section");

function highlightNav(){

let scrollPos = window.scrollY + window.innerHeight/3;

pageSections.forEach(section => {

if(scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight){

navLinks.forEach(link => {

link.classList.remove("nav-active");

if(link.getAttribute("href") === "#" + section.id){

link.classList.add("nav-active");

}

});

}

});

}

window.addEventListener("scroll", revealSections, { passive:true });
highlightNav();

/* =========================
GALLERY LIGHTBOX
========================= */

const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".lightbox-close");

galleryImages.forEach(img => {

img.addEventListener("click", () => {

lightbox.classList.add("active");
lightboxImg.src = img.src;

});

});

closeBtn.addEventListener("click", () => {
lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (e) => {

if(e.target !== lightboxImg){
lightbox.classList.remove("active");
}

});

document.addEventListener("keydown", (e) => {

if(e.key === "Escape"){
lightbox.classList.remove("active");
}

});

const bioImage = document.querySelector(".bio-photo img");

if(bioImage){

bioImage.addEventListener("click", () => {

lightbox.classList.add("active");
lightboxImg.src = bioImage.src;

});

}

/* =========================
NAVBAR DINAMICO
========================= */

let lastScroll = 0;
const navbar = document.querySelector("#mainNav");

window.addEventListener("scroll", () => {

let currentScroll = window.pageYOffset;

if(currentScroll <= 0){
navbar.style.transform = "translateY(0)";
return;
}

if(currentScroll > lastScroll){
navbar.style.transform = "translateY(-100%)";
}else{
navbar.style.transform = "translateY(0)";
}

lastScroll = currentScroll;

});

/* =========================
VIDEOS FIX
========================= */

document.querySelectorAll(".video-item").forEach(video => {

  video.addEventListener("click", () => {

    const link = video.getAttribute("data-link");

    if(link){
      window.open(link, "_blank");
    }

  });

});

/* =========================
SECCIONES FIX
========================= */

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add("visible");
}

});

}, {
threshold:0.2
});

sections.forEach(section => {
observer.observe(section);
});
