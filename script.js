document.addEventListener("DOMContentLoaded", () => {
  // Rolagem suave dos links
  document.querySelectorAll("nav a[href^='#']").forEach((anchor) => {
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

  // Animação de aparecer ao rolar
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  sections.forEach((sec) => {
    sec.classList.add("hidden");
    observer.observe(sec);
  });
});
