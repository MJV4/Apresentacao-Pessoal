// Apresentacao-Pessoal/script.js

// Animação de scroll das seções
const section = document.querySelectorAll("section");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}, {});

section.forEach((x) => {
  observer.observe(x);
});

// Texto responsivo na seção "Sobre mim"
function updateMyText() {
  const p = document.getElementById("sobre-texto");
  const full = p.getAttribute("data-full");
  const short = p.getAttribute("data-short");

  if (window.innerWidth < 600) {
    p.textContent = short;
  } else {
    p.textContent = full;
  }
}

window.addEventListener("resize", updateMyText);
window.addEventListener("load", updateMyText);
