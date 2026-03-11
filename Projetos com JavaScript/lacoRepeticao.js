// Define um array com nomes de carros para utilizar nos exemplos de laços
const carros = ["Gol", "Uno", "Polo", "Celta"];

// Seleciona o elemento HTML com id 'conteudo' para inserir seções dinâmicas
const conteudo = document.getElementById("conteudo");

// Declara variáveis que serão reutilizadas nos diferentes exemplos de repetição
var dados;
var i;

// Função auxiliar que cria e anexa uma seção com título e conteúdo ao elemento principal
function criaSecao(titulo, dadosF) {
  // Cria o elemento div que conterá a seção
  let secao = document.createElement("div");
  // Monta o HTML do título e do conteúdo recebido
  secao.innerHTML = "<h2>" + titulo + "</h2>" + dadosF;
  // Adiciona a nova seção ao container 'conteudo'
  conteudo.appendChild(secao);
}

// --- exemplo: loop while básico ---
// Inicializa a string onde serão concatenados os parágrafos
dados = "";
// Zera o contador
i = 0;
// Executa enquanto i for menor que 4 (número de carros no array)
while (i < 4) {
  // Adiciona parágrafo com o carro atual
  dados += "<p>" + carros[i] + "</p>";
  // Avança para o próximo índice
  i++;
}
// Cria a seção exibindo o resultado desse loop
criaSecao("Loop while", dados);

// --- exemplo: loop while com length ---
let dados2 = ""; // nova string para armazenar resultado
let i2 = 0; // novo contador
// Enquanto houver elementos no array, adiciona-os
while (i2 < carros.length) {
  dados2 += "<p>" + carros[i2] + "</p>";
  i2++;
}
criaSecao("Loop while Melhorado", dados2);

// --- exemplo: loop do...while (condição no final) ---
dados = ""; // reinicia string
i = 0; // reinicia contador

do {
  // Executa pelo menos uma vez
  dados += "<p>" + carros[i] + "</p>";
  i++;
} while (i < carros.length); // verifica condição após o corpo
criaSecao("Loop while invertido", dados);

// --- exemplo: loop for tradicional ---
dados = ""; // reinicia string
for (i = 0; i < carros.length; i++) {
  // Cada iteração adiciona o elemento no índice i
  dados += "<p>" + carros[i] + "</p>";
}
criaSecao("Loop for", dados);

// --- exemplo: loop for...of iterando diretamente sobre valores ---
dados = ""; // reinicia string novamente
for (let carro of carros) {
  if (carro === "Polo") {
    break; // para o loop completamente quando encontrar "Polo"
  }
  dados += "<p>" + carro + "</p>";
}
criaSecao("Loop for of", dados);

// --- criação de objetos e array de objetos ---
// Define dois objetos de carro com propriedades
let carro1 = { marca: "Ford", modelo: "Ka", ano: 2020 };
let carro2 = { marca: "Volkswagen", modelo: "Gol", ano: 2019 };

// Cria um array vazio e adiciona os objetos usando push
let carros2 = [];
carros2.push(carro1);
carros2.push(carro2);
// Mostra o array de objetos no console para verificação
console.log(carros2);

dados = ""; // reinicia string para nova seção
for (let carro of carros2) {
  let propriedades = ""; // reinicia propriedades para cada carro
  for (let prop in carro) {
    // Concatena as propriedades e seus valores em uma string formatada
    propriedades += "<p>" + prop + ": " + carro[prop] + "</p>";
  }
  dados += "<p>" + propriedades + "</p>"; // adiciona as propriedades do carro à string final
}
criaSecao("Loop for in", dados);

dados = ""; // reinicia string para nova seção

carros.forEach((carro) => {
  dados += "<p>" + carro + "</p>"; // para cada carro, adiciona um parágrafo à string
});
criaSecao("Loop forEach", dados); // cria seção com o resultado do forEach
