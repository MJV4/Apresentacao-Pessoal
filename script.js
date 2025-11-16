// Rolagem suave ao clicar nos links
document.querySelectorAll("a[href^='#']").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute("href"));
    if (destino) {
      destino.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Selecionar todas as sections
const sections = document.querySelectorAll("section");

// Função de revelar ao rolar
function revealOnScroll() {
  sections.forEach((sec) => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
}

// Ativar ao scroll
window.addEventListener("scroll", revealOnScroll);

// Estado inicial
sections.forEach((sec) => sec.classList.add("hidden"));

// Chamar ao carregar a página
revealOnScroll();
