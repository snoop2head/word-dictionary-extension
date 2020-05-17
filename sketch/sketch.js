function setup() {
  noCanvas();

  let backgroundPage = chrome.extension.getBackgroundPage();
  let word = backgroundPage.word.trim();

  createP(word);
}
