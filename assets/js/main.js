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
          document.querySelector("h4").focus()
          document.execCommand('selectAll', false, null)
          document.execCommand('copy')
          document.querySelector("button").innerText = 'Copiado!'
  })
