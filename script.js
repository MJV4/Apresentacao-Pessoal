document.querySelectorAll("a[href^='#']").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const sections = document.querySelectorAll("section");

function revealOnScroll() {
  sections.forEach((sec) => {
    const react = sec.getBoundingClientRect();
    if (react.top < window.innerHeight - 100) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

sections.forEach((sec) => {
  sec.style.opacity = "0";
  sec.style.transform = "translateY(40px)";
  sec.style.transition = "0.8s";
});

revealOnScroll();
