// select content script and send it to background.js
console.log("content selector running");

window.addEventListener("mouseup", selectWord);

function selectWord() {
  //   console.log("word selected");
  let selectedText = window.getSelection();
  // change Javascript Object to string
  let selectedTextString = selectedText.toString().trim();
  console.log(selectedTextString);
  if (selectedTextString.length > 0) {
    // send text to background.js
    let message = {
      text: selectedTextString,
    };
    chrome.runtime.sendMessage(message);
  }
}
