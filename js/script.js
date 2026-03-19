
// Section "vantagens"
fetch("https://pontesdevtech.github.io/DevTech.Portfolio.SENAI.Futuro-Digital/page.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("conteudo").innerHTML = data;
  })
  .catch(error => console.error("Erro ao carregar a página:", error));