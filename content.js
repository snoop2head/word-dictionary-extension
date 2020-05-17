// select content script and send it to background.js
console.log("content selector running");

window.addEventListener("mouseup", selectWord);

function selectWord() {
  console.log("word selected");
  let selectedText = window.getSelection();
  // Javascript Object to string
  let selectedTextString = selectedText.toString();
  console.log(selectedTextString);
}
