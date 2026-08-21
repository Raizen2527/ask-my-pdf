const pdfFile = document.getElementById("pdfFile");
const status = document.getElementById("status");
const askButton = document.getElementById("askButton");
const answer = document.getElementById("answer");

let pdfText = "";

pdfFile.addEventListener("change", async () => {
  const file = pdfFile.files[0];

  if (!file) return;

  status.textContent = "Reading PDF...";
  answer.textContent = "";

  try {
    pdfText = await extractPDFText(file);

    status.textContent =
      `PDF ready: ${file.name} (${pdfText.length} characters)`;

    answer.textContent =
      "✅ PDF text extracted successfully!\n\nNow we can connect Gemini.";
  } catch (error) {
    console.error(error);
    status.textContent = "Could not read this PDF.";
  }
});

askButton.addEventListener("click", () => {
  if (!pdfText) {
    answer.textContent = "Please select a PDF first.";
    return;
  }

  const question = document.getElementById("question").value.trim();

  if (!question) {
    answer.textContent = "Please type a question.";
    return;
  }

  answer.textContent =
    "PDF is ready. Gemini will be connected in the next step.";
});
