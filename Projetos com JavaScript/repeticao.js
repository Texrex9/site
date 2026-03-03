// Cria um array com nomes de carros para serem exibidos
const carros = ['Gol', 'Uno', 'Polo', 'Celta'];

// Seleciona o elemento HTML com id 'conteudo' para inserir o conteúdo nele
const conteudo = document.getElementById('conteudo');

// Inicializa uma string vazia que irá armazenar os parágrafos com os nomes dos carros
let dados = "";
// Inicializa o contador para controlar o loop while
let i = 0;
// Inicia um loop while que vai repetir enquanto i for menor que 4 (quantidade de carros)
while (i < 4){
    // Adiciona um parágrafo (tag <p>) com o nome do carro atual à string dados
    dados += "<p>"+carros[i]+"</p>";
    // Incrementa o contador para passar para o próximo carro
    i++;
}

// Cria um novo elemento div que será o container para o conteúdo
const secao = document.createElement("div");
// Define o conteúdo HTML do div com um título <h2> e os parágrafos dos carros
secao.innerHTML = "<h2>Loop while</h2>" + dados;
// Adiciona o elemento div criado como filho do elemento com id 'conteudo'
conteudo.appendChild(secao);