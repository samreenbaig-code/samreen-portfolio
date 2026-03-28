/* =========================
   DARK / LIGHT MODE TOGGLE
========================= */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

themeToggle.addEventListener("click", () => {

document.body.classList.toggle("dark");

});

}


/* =========================
   TYPING EFFECT (HERO)
========================= */

const typingElement = document.querySelector(".typing");

const text = "Mobile Web Developer | AI Developer | UI Designer";

let index = 0;

function typingEffect() {

if (!typingElement) return;

typingElement.textContent = text.slice(0, index);

index++;

if (index > text.length) {

index = 0;

}

}

setInterval(typingEffect, 100);



/* =========================
   ANIMATED COUNTERS
========================= */

const counters = document.querySelectorAll(".counter");

const startCounters = () => {

counters.forEach(counter => {

const updateCounter = () => {

const target = +counter.getAttribute("data-target");
const count = +counter.innerText;

const increment = target / 100;

if (count < target) {

counter.innerText = Math.ceil(count + increment);

setTimeout(updateCounter, 20);

} else {

counter.innerText = target;

}

};

updateCounter();

});

};



/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

const windowHeight = window.innerHeight;

revealElements.forEach(element => {

const elementTop = element.getBoundingClientRect().top;

if (elementTop < windowHeight - 100) {

element.classList.add("active");

}

});

}



/* =========================
   START EVENTS
========================= */

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", () => {

revealOnScroll();
startCounters();

});
/* TIMELINE SCROLL ANIMATION */

const timelineItems = document.querySelectorAll(".timeline-item");

function showTimeline(){

const triggerBottom = window.innerHeight * 0.85;

timelineItems.forEach(item =>{

const boxTop = item.getBoundingClientRect().top;

if(boxTop < triggerBottom){

item.classList.add("show");

}

});

}

window.addEventListener("scroll", showTimeline);
showTimeline();