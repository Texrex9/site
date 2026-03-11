

const celulas = document.querySelectorAll('.celula');

let vezDoX = true;

let jogoAtivo = true;

const combinacoesVencedoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    
    [0, 4, 8],
    [2, 4, 6]
];

document.getElementById("botaoReiniciar").addEventListener("click", iniciarJogo);

function iniciarJogo() {
    vezDoX = true;
    
    jogoAtivo = true;
    
    celulas.forEach(celula => {
        celula.textContent = "";
        
        celula.removeEventListener('click', tratarClique);
        
        celula.addEventListener('click', tratarClique, { once: true });
    });
}

function tratarClique(evento) {
    if (!jogoAtivo) return;
    
    const simbolo = vezDoX ? "X" : "O";
    
    evento.target.textContent = simbolo;
    
    if (verificarVitoria(simbolo)) {
        alert("Parabéns! O jogador " + simbolo + " VENCEU!");
        
        jogoAtivo = false;
        
        return;
    }
    
    vezDoX = !vezDoX;
}

function verificarVitoria(simbolo) {
    for (let combinacao of combinacoesVencedoras) {
        const [a, b, c] = combinacao;
        
        if (celulas[a].textContent === simbolo &&
            celulas[b].textContent === simbolo &&
            celulas[c].textContent === simbolo) {
            return true;
        }
    }
    
    return false;
}

iniciarJogo();
