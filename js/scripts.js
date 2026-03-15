/* =========================
NAVBAR SCROLL EFFECT
========================= */

const nav = document.getElementById("mainNav");

if(nav){

window.addEventListener("scroll", () => {

if(window.scrollY > 60){
nav.classList.add("scrolled");
}else{
nav.classList.remove("scrolled");
}

});

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

window.addEventListener("scroll", revealSections);

revealSections();


/* =========================
HERO FADE ON SCROLL
========================= */

const heroOverlay = document.querySelector(".hero-overlay");

if(heroOverlay){

window.addEventListener("scroll", () => {

let scroll = window.scrollY;

let opacity = 1 - scroll / 500;

if(opacity < 0) opacity = 0;

heroOverlay.style.opacity = opacity;

});

}


/* =========================
HERO PARALLAX
========================= */

const hero = document.querySelector(".hero");

if(hero){

window.addEventListener("scroll", () => {

let scroll = window.scrollY;

hero.style.backgroundPositionY = scroll * 0.4 + "px";

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

window.addEventListener("scroll", highlightNav);
highlightNav();

/* =========================
GALLERY LIGHTBOX
========================= */

const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".lightbox-close");

if(galleryImages.length && lightbox && lightboxImg){

galleryImages.forEach(img => {

img.addEventListener("click", () => {

lightbox.classList.add("active");
lightboxImg.src = img.src;

});

});

}

if(closeBtn){

closeBtn.addEventListener("click", () => {
lightbox.classList.remove("active");
});

}

if(lightbox){

lightbox.addEventListener("click", (e) => {

if(e.target !== lightboxImg){
lightbox.classList.remove("active");
}

});

}

document.addEventListener("keydown", (e) => {

if(e.key === "Escape" && lightbox){
lightbox.classList.remove("active");
}

});
