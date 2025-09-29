document.addEventListener("DOMContentLoaded", () => {
  const ebookForm = document.getElementById("ebookForm");
  const preview = document.getElementById("preview");
  const generatedText = document.getElementById("generatedText");

  if (ebookForm) {
    ebookForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const topic = document.getElementById("topic").value.trim();
      if (!topic) return;

      generatedText.textContent =
        `✨ Title: The Wonders of ${topic}\n\n` +
        `Chapter 1: Introduction to ${topic}\n` +
        `In this ebook, we explore the amazing world of ${topic}. ` +
        `From its origins to its future, you'll discover unique insights and inspiration.\n\n` +
        `Chapter 2: Why ${topic} Matters\n` +
        `The impact of ${topic} on our lives is profound. This chapter covers its importance and applications.`;

      preview.classList.remove("hidden");
    });
  }
});

function downloadEbook() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const text = document.getElementById("generatedText").innerText;

  doc.setFont("times", "normal");
  doc.setFontSize(12);
  doc.text(text, 20, 20);
  doc.save("ebook.pdf");
}