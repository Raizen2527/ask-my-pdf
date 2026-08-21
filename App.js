const pdfFile = document.getElementById("pdfFile");
const status = document.getElementById("status");
const askButton = document.getElementById("askButton");
const answer = document.getElementById("answer");

let pdfText = "";

pdfFile.addEventListener("change", async () => {
  const file = pdfFile.files[0];

  if (!file) return;

  status.textContent = "PDF selected: " + file.name;
  pdfText = "";
});

askButton.addEventListener("click", () => {
  if (!pdfFile.files[0]) {
    answer.textContent = "Please select a PDF first.";
    return;
  }

  answer.textContent =
    "PDF selected successfully. Gemini connection will be added next.";
});
