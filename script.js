document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("ebook-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const topic = document.getElementById("topic").value;
      const length = document.getElementById("length").value;

      const result = document.getElementById("result");
      result.innerHTML = `
        <h3>Your Ebook is ready!</h3>
        <p><strong>Topic:</strong> ${topic}</p>
        <p><strong>Length:</strong> ${length} pages</p>
        <p>(AI generation placeholder – connect to OpenAI API here)</p>
      `;
    });
  }
});