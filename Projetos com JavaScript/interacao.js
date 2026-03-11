// Esta função muda a cor de fundo da página inteira.
function setBackgroundColor(color) {
  // Aplica a cor recebida no corpo da página (fundo geral).
  document.body.style.backgroundColor = color;
}

// Quando clicar no botão vermelho, o fundo da página fica vermelho.
document.getElementById("redButton").addEventListener("click", function () {
  // Chama a função enviando a cor vermelha.
  setBackgroundColor("red");
});

// Quando clicar no botão verde, o fundo da página fica verde.
document.getElementById("greenButton").addEventListener("click", function () {
  // Chama a função enviando a cor verde.
  setBackgroundColor("green");
});

// Quando clicar no botão azul, o fundo da página fica azul.
document.getElementById("blueButton").addEventListener("click", function () {
  // Chama a função enviando a cor azul.
  setBackgroundColor("blue");
});

// Escuta o teclado no campo de texto.
document
  .getElementById("inputBox")
  .addEventListener("keypress", function (event) {
    // Mostra em um alerta qual tecla foi pressionada.
    alert("A tecla pressionada: " + event.key);
  });
