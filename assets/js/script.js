document.querySelector("button").addEventListener("click", function () {
  var textRange = document.createRange();
  textRange.selectNode(document.getElementById("chave"));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(textRange);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  document.querySelector("button").innerText = "Copiado!";
});
