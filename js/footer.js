export function initFooter() {
  const section = document.querySelector(".footer");
  if (!section) return;

// Atualiza o ano no footer automaticamente
const year = new Date().getFullYear();
document.querySelector('.footer-year').textContent = year;

// Validar formulário do newslleter
const form = section.querySelector(".newsletter-form");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Email enviado!");
});

}