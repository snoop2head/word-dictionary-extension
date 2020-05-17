// select content script and send it to background.js
console.log("content selector running");

window.addEventListener("mouseup", selectWord);

function selectWord() {
  console.log("word selected");
  let selectedText = window.getSelection();
  console.log(selectedText);
}
