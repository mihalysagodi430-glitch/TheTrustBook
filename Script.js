document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, i) => {
    card.style.animation = `fadeIn 0.5s ease ${(i + 1) * 0.3}s forwards`;
  });
});