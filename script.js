// Smooth scroll nav
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.getAttribute('href').startsWith("#")) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Ebook maker form
document.getElementById("ebookForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const topic = document.getElementById("topic").value;

  const generatedText = `
    Kedves ${name}, itt a(z) "${topic}" témájú Ebookod első fejezete! 
    Ez csak demo szöveg – az AI funkciót később API kulccsal aktiváljuk.
  `;

  document.getElementById("output").innerHTML = `
    <h3>Generált Ebook</h3>
    <p>${generatedText}</p>
  `;
});