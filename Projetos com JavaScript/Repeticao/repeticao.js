const carros = ["Gol", "Uno", "Polo", "Celta"];

const conteudo = document.getElementById("conteudo");

function criaSecao(titulo, dadosF) {
  let secao = document.createElement("div");
  secao.innerHTML = "<h2>" + titulo + "</h2>" + dadosF;
  conteudo.appendChild(secao);
}

let dados = "";

let i = 0;

while (i < 4) {
  dados += "<p>" + carros[i] + "</p>";
  i++;
}

criaSecao("Loop while", dados);

let dados2 = "";
let i2 = 0;

while (i2 < carros.length) {
  dados2 += "<p>" + carros[i2] + "</p>";
  i2++;
}
criaSecao("Loop while Melhorado", dados2);
