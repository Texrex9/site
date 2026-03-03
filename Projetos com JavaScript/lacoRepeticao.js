const carros = ["Gol", "Uno", "Polo", "Celta"];

const conteudo = document.getElementById("conteudo");

var dados;
var i;

function criaSecao(titulo, dadosF) {
    let secao = document.createElement("div");
    secao.innerHTML = "<h2>" + titulo + "</h2>" + dadosF;
    conteudo.appendChild(secao);
}

dados = "";
i = 0;
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


dados = "";
i = 0;
do {
 dados += "<p>" + carros[i] + "</p>";
 i++;
}while(i < carros.length);
criaSecao("Loop while invertido", dados);

dados = "";
i = 0;
for(i = 0; i < carros.length; i++) {
    dados += "<p>" + carros[i] + "</p>";
}

criaSecao("Loop for", dados);


dados = "";
for(let carro of carros) {
    dados += "<p>" + carro + "</p>";
}
criaSecao("Loop for of", dados);

let carro1 = {marca: "Ford", modelo: "Ka", ano: 2020};
let carro2 = {marca: "Volkswagen", modelo: "Gol", ano: 2019};

let carros2 = [];
carros2.push(carro1);
carros2.push(carro2);  
console.log(carros2);
