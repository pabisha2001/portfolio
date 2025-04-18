// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Scroll Animation (fade-in effect)
const sections = document.querySelectorAll("section");

const isInView = (el) => {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
};

const animateSection = () => {
  sections.forEach((section) => {
    if (isInView(section)) {
      section.classList.add("in-view");
    } else {
      section.classList.remove("in-view");
    }
  });
};

// Trigger the animation on scroll
window.addEventListener("scroll", animateSection);

// Trigger the animation on load
window.addEventListener("load", animateSection);
