const header = document.querySelector(".header");
const toogleBtn = document.querySelector(".btn-mobile-nav");

// toogleBtn.classList.toggle("nav-open");

toogleBtn.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});
// Create a new ScrollMagic controller
var controller = new ScrollMagic.Controller();

// Define the scrolling effects
var scene1 = new ScrollMagic.Scene({
  triggerElement: '.section-about',
  triggerHook: 0.8, // Trigger the animation when 80% of the element is visible
})
.setClassToggle('.section-about', 'fade-in') // Add the 'fade-in' class to the element
.addTo(controller);

var scene2 = new ScrollMagic.Scene({
  triggerElement: '.section-contact',
  triggerHook: 0.8,
})
.setClassToggle('.section-contact', 'fade-in')
.addTo(controller);
