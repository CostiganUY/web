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
GALLERY LIGHTBOX
========================= */

const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.getElementById("lightbox-close");

if(galleryImages && lightbox){

galleryImages.forEach(img => {

img.addEventListener("click", () => {

lightbox.classList.add("active");
lightboxImg.src = img.src;

});

});

if(lightboxClose){

lightboxClose.addEventListener("click", () => {

lightbox.classList.remove("active");

});

}

lightbox.addEventListener("click", e => {

if(e.target !== lightboxImg){

lightbox.classList.remove("active");

}

});

}


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
LIGHTBOX GALLERY
========================= */

#lightbox{

position:fixed;

inset:0;

background:rgba(0,0,0,0.95);

display:flex;

align-items:center;

justify-content:center;

opacity:0;

pointer-events:none;

transition:opacity 0.4s ease;

z-index:2000;

}

#lightbox.active{

opacity:1;

pointer-events:auto;

}

/* imagen */

.lightbox-img{

max-width:90%;

max-height:85%;

border-radius:8px;

box-shadow:

0 30px 80px rgba(0,0,0,0.9),
0 0 40px rgba(175,82,73,0.2);

animation:lightboxZoom 0.4s ease;

}

@keyframes lightboxZoom{

from{
transform:scale(0.9);
opacity:0;
}

to{
transform:scale(1);
opacity:1;
}

}

/* botón cerrar */

.lightbox-close{

position:absolute;

top:30px;
right:40px;

font-size:28px;

cursor:pointer;

color:white;

opacity:0.7;

transition:all 0.3s ease;

}

.lightbox-close:hover{

opacity:1;

color:#ff7a70;

text-shadow:

0 0 10px rgba(175,82,73,0.5);

}
