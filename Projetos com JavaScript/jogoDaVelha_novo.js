// Pega todas as células do tabuleiro para podermos reagir aos cliques.
const celulas = document.querySelectorAll(".celula");

// Guarda de quem é a vez: true significa jogador X.
let vezDoX = true;
// Informa se a partida ainda pode receber jogadas.
let jogoAtivo = true;

// Lista todas as formas possíveis de vencer no jogo da velha.
const combinacoesVencedoras = [
  // Três linhas horizontais.
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Três colunas verticais.
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Duas diagonais.
  [0, 4, 8],
  [2, 4, 6],
];

// Quando clicar no botão de reiniciar, começa uma nova partida.
document
  .getElementById("botaoReiniciar")
  .addEventListener("click", iniciarJogo);

// Esta função limpa o tabuleiro e prepara um jogo novo.
function iniciarJogo() {
  // Faz o X começar novamente.
  vezDoX = true;
  // Reativa o jogo para aceitar cliques.
  jogoAtivo = true;

  // Passa por cada célula para limpar e reativar o clique.
  celulas.forEach((celula) => {
    // Remove X ou O que estava escrito antes.
    celula.textContent = "";
    // Remove evento antigo para evitar eventos duplicados.
    celula.removeEventListener("click", tratarClique);
    // Adiciona o evento de clique de novo, permitindo apenas um clique por célula.
    celula.addEventListener("click", tratarClique, { once: true });
  });
}

// Esta função trata o clique em uma célula do tabuleiro.
function tratarClique(evento) {
  // Se o jogo já terminou, não faz nada.
  if (!jogoAtivo) return;

  // Define o símbolo da jogada atual (X ou O).
  const simbolo = vezDoX ? "X" : "O";
  // Coloca o símbolo na célula clicada.
  evento.target.textContent = simbolo;

  // Verifica se essa jogada completou uma combinação vencedora.
  if (verificarVitoria(simbolo)) {
    // Mostra mensagem informando quem venceu.
    alert("Parabéns! O jogador " + simbolo + " VENCEU!");
    // Encerra o jogo para impedir novas jogadas.
    jogoAtivo = false;
    // Sai da função para não trocar a vez depois da vitória.
    return;
  }

  // Se ninguém venceu ainda, passa a vez para o outro jogador.
  vezDoX = !vezDoX;
}

// Esta função confere se o jogador atual venceu.
function verificarVitoria(simbolo) {
  // Percorre todas as combinações de vitória.
  for (let combinacao of combinacoesVencedoras) {
    // Pega os três índices da combinação analisada.
    const [a, b, c] = combinacao;

    // Se as três posições tiverem o mesmo símbolo, houve vitória.
    if (
      celulas[a].textContent === simbolo &&
      celulas[b].textContent === simbolo &&
      celulas[c].textContent === simbolo
    ) {
      // Retorna verdadeiro para indicar vitória.
      return true;
    }
  }

  // Se terminou o loop sem achar combinação, ainda não venceu.
  return false;
}

// Chama a inicialização assim que o script carrega pela primeira vez.
iniciarJogo();
