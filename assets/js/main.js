const temaToggle = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  );
  
  const temaAtual = localStorage.getItem("tema");

  if (temaAtual) {
    
    document.documentElement.setAttribute("data-tema", temaAtual);

    if (temaAtual === "dark") {
      temaToggle.checked = true;
    }
  }
  
 
  function switchTema(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-tema", "dark");
      localStorage.setItem("tema", "dark");
    } else {
      document.documentElement.setAttribute("data-tema", "light");
      localStorage.setItem("tema", "light");
    }
  }
  
  temaToggle.addEventListener("change", switchTema, false);
  

  document.querySelector("button").addEventListener("click",
  function (event) {
    var textRange = document.createRange()
    textRange.selectNode(document.getElementById("chave"))
    window.getSelection().removeAllRanges()
    window.getSelection().addRange(textRange)
    document.execCommand("copy")
    window.getSelection().removeAllRanges()
    document.querySelector("button").innerText = 'Copiado!'
  })
