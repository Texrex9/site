/**
 * ARQUIVO: jogoDaVelha.js
 * DESCRIÇÃO: Lógica de jogo da velha com detecção de vencedor
 * FUNCIONALIDADE: Sistema completo de jogo com verificação de vitória
 */

// ============================================
// 1. SELEÇÃO DO DOM E VARIÁVEIS GLOBAIS
// ============================================

// Seleciona todos os elementos com classe 'celula' do HTML
// querySelectorAll retorna uma NodeList (similar a um array) com todos os elementos encontrados
// Essas são as 9 células do tabuleiro onde serão colocados X e O
const celulas = document.querySelectorAll('.celula');

// Variável booleana que controla de quem é a vez
// true = vez do X, false = vez do O
let vezDoX = true;

// Variável que controla se o jogo está em andamento
// Quando alguém vence, muda para false e o jogo para
let jogoAtivo = true;

// ============================================
// 2. COMBINAÇÕES VENCEDORAS
// ============================================

/**
 * Array contendo todas as possíveis combinações vencedoras
 * Cada subarray representa Índices das células que causam vitória se preenchidas
 * 
 * Indexação do tabuleiro:
 * [0] [1] [2]
 * [3] [4] [5]
 * [6] [7] [8]
 */
const combinacoesVencedoras = [
    // LINHAS HORIZONTAIS
    [0, 1, 2],  // Primeira linha
    [3, 4, 5],  // Segunda linha
    [6, 7, 8],  // Terceira linha
    
    // COLUNAS VERTICAIS
    [0, 3, 6],  // Primeira coluna
    [1, 4, 7],  // Segunda coluna
    [2, 5, 8],  // Terceira coluna
    
    // DIAGONAIS
    [0, 4, 8],  // Diagonal de cima-esquerda até baixo-direita
    [2, 4, 6]   // Diagonal de cima-direita até baixo-esquerda
];

// ============================================
// 3. EVENT LISTENERS (OUVINTES DE EVENTOS)
// ============================================

// Adiciona um "ouvinte" ao botão reiniciar
// Quando o botão é clicado, a função iniciarJogo() é executada
document.getElementById("botaoReiniciar").addEventListener("click", iniciarJogo);

// ============================================
// 4. FUNÇÃO INICIAR JOGO
// ============================================

/**
 * FUNÇÃO: iniciarJogo()
 * OBJETIVO: Reset completo do jogo para um novo começo
 * 
 * ETAPAS:
 * 1. Reseta a variável de vez para X
 * 2. Marca o jogo como ativo
 * 3. Limpa o conteúdo de cada célula
 * 4. Remove event listeners antigos
 * 5. Adiciona novos event listeners (com { once: true } para apenas 1 clique por célula)
 * 
 * NOTA: { once: true } garante que cada célula só possa ser clicada uma vez
 */
function iniciarJogo() {
    // Reseta para X começar (pois X sempre começa primeiro)
    vezDoX = true;
    
    // Restaura o jogo como ativo (permite que cliques tenham efeito)
    jogoAtivo = true;
    
    // Percorre cada célula do tabuleiro
    celulas.forEach(celula => {
        // Limpa o conteúdo de texto da célula (remove X ou O antigos)
        celula.textContent = "";
        
        // Remove o event listener anterior para evitar múltiplos listeners
        celula.removeEventListener('click', tratarClique);
        
        // Adiciona um novo event listener para cliques
        // { once: true } garante que o evento só funcione uma única vez
        // Após o primeiro clique, o listener é automaticamente removido
        celula.addEventListener('click', tratarClique, { once: true });
    });
}

// ============================================
// 5. FUNÇÃO TRATAR CLIQUE
// ============================================

/**
 * FUNÇÃO: tratarClique(evento)
 * OBJETIVO: Processar o clique do jogador em uma célula
 * 
 * PARÂMETROS:
 * - evento: objeto Event do clique que contém informações sobre o clique
 * 
 * ETAPAS:
 * 1. Verifica se o jogo está ativo, se não, interrompe
 * 2. Determina qual símbolo usar (X ou O)
 * 3. Coloca o símbolo na célula clicada
 * 4. Verifica se o jogador atual venceu
 * 5. Se venceu, exibe alert e para o jogo
 * 6. Se não venceu, passa a vez para o outro jogador
 */
function tratarClique(evento) {
    // Verifica se o jogo está ativo
    // Se não estiver (o jogo já terminou), sai da função sem fazer nada
    if (!jogoAtivo) return;
    
    // Determina qual símbolo usar baseado em vezDoX
    // Se vezDoX for true, usa "X", senão usa "O"
    const simbolo = vezDoX ? "X" : "O";
    
    // Coloca o símbolo na célula clicada
    // evento.target refere-se ao elemento que foi clicado
    // textContent define o conteúdo de texto do elemento
    evento.target.textContent = simbolo;
    
    // Chama a função para verificar se o jogador atual venceu
    // Passa o símbolo (X ou O) como parâmetro
    if (verificarVitoria(simbolo)) {
        // Se houver vencedor, exibe um alert congratulando o vencedor
        // Mostra qual símbolo (X ou O) venceu
        alert("Parabéns! O jogador " + simbolo + " VENCEU!");
        
        // Para o jogo atribuindo false a jogoAtivo
        // Isso impede que mais cliques tenham efeito
        jogoAtivo = false;
        
        // Sai da função (retorna) para não executar o código abaixo
        // Especialmente importante para não mudar de vez
        return;
    }
    
    // Se não houver vencedor, muda de jogador
    // Se era vez do X (true), vira vez do O (false)
    // Se era vez do O (false), vira vez do X (true)
    // O "!" inverte o valor booleano
    vezDoX = !vezDoX;
}

// ============================================
// 6. FUNÇÃO VERIFICAR VITÓRIA
// ============================================

/**
 * FUNÇÃO: verificarVitoria(simbolo)
 * OBJETIVO: Verificar se o jogador com o símbolo passado venceu o jogo
 * 
 * PARÂMETROS:
 * - simbolo: String contendo "X" ou "O" (o símbolo do jogador a verificar)
 * 
 * RETORNO:
 * - true: Se o jogador venceu (tem 3 símbolos em uma linha, coluna ou diagonal)
 * - false: Se o jogador não venceu
 * 
 * LGICA:
 * 1. Percorre cada combinação vencedora
 * 2. Extrai os 3 índices [a, b, c] da combinação
 * 3. Verifica se as 3 células nessas posições contém o simbolo
 * 4. Se encontrar uma combinação completa, retorna true
 * 5. Se nenhuma combinação funcionar, retorna false
 */
function verificarVitoria(simbolo) {
    // Usa for...of para percorrer cada combinação do array combinacoesVencedoras
    for (let combinacao of combinacoesVencedoras) {
        // Desestruturação: extrai os 3 índices da combinação
        // Exemplo: Se combinacao = [0, 1, 2], então a=0, b=1, c=2
        const [a, b, c] = combinacao;
        
        // Verifica se as 3 células nessas posições tém o mesmo símbolo
        // celulas[a].textContent acessa o conteúdo de texto da célula no índice a
        // Se as 3 células contém o símbolo do jogador, ele venceu
        if (celulas[a].textContent === simbolo &&
            celulas[b].textContent === simbolo &&
            celulas[c].textContent === simbolo) {
            // Encontrou uma combinação vencedora, retorna true
            return true;
        }
    }
    
    // Se nenhuma combinação vencedora foi encontrada, o jogador não venceu
    return false;
}

// ============================================
// 7. INICIALIZAÇÃO
// ============================================

// Chama a função iniciarJogo() quando o script carrega
// Isso prepara o tabuleiro e adiciona os event listeners para iniciar o jogo
iniciarJogo();
