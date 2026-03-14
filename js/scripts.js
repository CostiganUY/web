/* =========================
NAVBAR SCROLL EFFECT
========================= */

window.addEventListener("scroll", () => {

const nav = document.getElementById("mainNav");

if(!nav) return;

if(window.scrollY > 60){
nav.classList.add("scrolled");
}else{
nav.classList.remove("scrolled");
}

});


/* =========================
SCROLL REVEAL SECTIONS
========================= */

const sections = document.querySelectorAll("section");

function revealSections(){

const trigger = window.scrollY + window.innerHeight -120;

sections.forEach(section => {

if(trigger > section.offsetTop){
section.classList.add("visible");
}

});

}

window.addEventListener("scroll", revealSections);
revealSections();


/* =========================
GALLERY LIGHTBOX
========================= */

const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.getElementById("lightbox-close");

galleryImages.forEach(img => {

img.addEventListener("click", () => {

lightbox.classList.add("active");
lightboxImg.src = img.src;

});

});

lightboxClose.addEventListener("click", () => {

lightbox.classList.remove("active");

});

lightbox.addEventListener("click", e => {

if(e.target !== lightboxImg){
lightbox.classList.remove("active");
}

});


/* =========================
HERO FADE ON SCROLL
========================= */

const heroOverlay = document.querySelector(".hero-overlay");

window.addEventListener("scroll", () => {

if(!heroOverlay) return;

let scroll = window.scrollY;
let opacity = 1 - scroll / 500;

if(opacity < 0) opacity = 0;

heroOverlay.style.opacity = opacity;

});


/* =========================
HERO PARALLAX
========================= */

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

if(!hero) return;

let scroll = window.scrollY;

hero.style.backgroundPositionY = scroll * 0.4 + "px";

});


/* =========================
SMOOTH SCROLL NAV
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({
behavior:"smooth"
});

}

});

});


/* =========================
NAVBAR MOBILE
========================= */

window.addEventListener("DOMContentLoaded", () => {

const toggle = document.querySelector(".nav-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if(!toggle || !mobileMenu) return;

toggle.addEventListener("click", () => {

mobileMenu.classList.toggle("active");

});

document.querySelectorAll(".mobile-menu a").forEach(link => {

link.addEventListener("click", () => {

mobileMenu.classList.remove("active");

});

});

});
