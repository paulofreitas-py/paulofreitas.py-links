document.querySelector("button").addEventListener("click", function (event) {
  var text_to_copy = document.getElementById("chave").innerHTML;

  if (!navigator.clipboard) {
  } else {
    navigator.clipboard
      .writeText(text_to_copy)
      .then(function () {
        document.querySelector("button").innerText = "Copiado!";
      })
      .catch(function () {
        document.querySelector("button").innerText = "Ops, ocorreu um erro! :(";
      });
  }
});
