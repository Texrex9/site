const celulas = document.querySelectorAll('.celula');

let vezDoX = true;
let jogoAtivo = true;  // Controla se o jogo esta em andamento

// Todas as combinacoes vencedoras possiveis
const combinacoesVencedoras = [
    // Linhas
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Colunas
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonais
    [0, 4, 8],
    [2, 4, 6]
];

document.getElementById("botaoReiniciar").addEventListener("click", iniciarJogo);

function iniciarJogo() {
    vezDoX = true;  // Reseta para X comecar
    jogoAtivo = true;  // Restaura o jogo como ativo
    
    celulas.forEach(celula => {
        celula.textContent = "";
        celula.removeEventListener('click', tratarClique);
        celula.addEventListener('click', tratarClique, { once: true });
    });
}

function tratarClique(evento) {
    // So processa se o jogo esta ativo
    if (!jogoAtivo) return;
    
    const simbolo = vezDoX ? "X" : "O";
    evento.target.textContent = simbolo;
    
    // Verifica se o jogador atual venceu
    if (verificarVitoria(simbolo)) {
        alert("Parabens! O jogador " + simbolo + " VENCEU!");
        jogoAtivo = false;  // Para o jogo
        return;
    }
    
    // Passa a vez para o outro jogador
    vezDoX = !vezDoX;
}

// Funcao para verificar se ha vencedor
function verificarVitoria(simbolo) {
    for (let combinacao of combinacoesVencedoras) {
        const [a, b, c] = combinacao;
        
        // Se as 3 celulas tem o mesmo simbolo, tem vencedor
        if (celulas[a].textContent === simbolo &&
            celulas[b].textContent === simbolo &&
            celulas[c].textContent === simbolo) {
            return true;
        }
    }
    return false;
}

iniciarJogo();
