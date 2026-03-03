// Cria um array com nomes de carros para serem exibidos
const carros = ["Gol", "Uno", "Polo", "Celta"];

// Seleciona o elemento HTML com id 'conteudo' para inserir o conteúdo nele
const conteudo = document.getElementById("conteudo");

// Define uma função que cria uma seção com um título e conteúdo para exibir na página
function criaSecao(titulo, dadosF) {
  // Cria um novo elemento div que será o container para o conteúdo
  let secao = document.createElement("div");
  // Define o conteúdo HTML do div com um título <h2> e os dados passados como parâmetro
  secao.innerHTML = "<h2>" + titulo + "</h2>" + dadosF;
  // Adiciona o elemento div criado como filho do elemento com id 'conteudo'
  conteudo.appendChild(secao);
}

// Inicializa uma string vazia que irá armazenar os parágrafos com os nomes dos carros
let dados = "";

// Inicializa o contador para controlar o primeiro loop while
let i = 0;

// Inicia um loop while que vai repetir enquanto i for menor que 4 (quantidade de carros)
while (i < 4) {
  // Adiciona um parágrafo (tag <p>) com o nome do carro atual à string dados
  dados += "<p>" + carros[i] + "</p>";
  // Incrementa o contador para passar para o próximo carro
  i++;
}

// Chama a função criaSecao para criar a primeira seção com o título "Loop while" e os dados
criaSecao("Loop while", dados);

// Inicializa uma segunda string vazia que irá armazenar os parágrafos com os nomes dos carros
let dados2 = "";
// Inicializa o contador para controlar o segundo loop while
let i2 = 0;

// Inicia um loop while que vai repetir enquanto i2 for menor que o tamanho do array de carros
while (i2 < carros.length) {
  // Adiciona um parágrafo (tag <p>) com o nome do carro atual à string dados2
  dados2 += "<p>" + carros[i2] + "</p>";
  // Incrementa o contador para passar para o próximo carro
  i2++;
}
// Chama a função criaSecao para criar a segunda seção com o título "Loop while Melhorado" e os dados
criaSecao("Loop while Melhorado", dados2);
