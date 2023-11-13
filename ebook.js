function convertText() {
  const inputText = document.getElementById("inputText").value;
  const paragraphs = inputText.split('\n');
  let formattedText = '';

  for (const paragraph of paragraphs) {
    formattedText += `<p>${paragraph.trim()}</p>\n`;
  }

  document.getElementById("output").textContent = formattedText;
}
