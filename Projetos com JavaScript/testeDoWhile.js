/**
 * ARQUIVO: testeDoWhile.js
 * DESCRIÇÃO: Aplicação que demonstra o uso do loop do-while em JavaScript
 * FUNCIONALIDADE: Permite ao usuário percorrer uma lista de carros iterativamente,
 * escolhendo se deseja ver o próximo veículo através de um confirm (caixa de diálogo)
 * 
 * ESTRUTURA:
 * - Constante com lista de carros
 * - Função que implementa o loop do-while
 * - Manipulação DOM para exibir resultados
 * - Evento de carregamento da página
 */

// ============================================
// CONSTANTES E DADOS
// ============================================

/**
 * Array contendo uma lista de carros predefinida
 * Será percorrido pela função percorrerCarros() usando do-while
 * @type {Array<string>}
 */
// Lista de carros predefinida
const carros = [
    "Fiat Uno",
    "Ford Ka",
    "Chevrolet Onix",
    "Volkswagen Gol",
    "Honda Civic"
];


// ============================================
// FUNÇÕES PRINCIPAIS
// ============================================

/**
 * FUNÇÃO: percorrerCarros()
 * OBJETIVO: Percorrer a lista de carros usando um loop do-while e interagir com o usuário
 * 
 * FLUXO:
 * 1. Obtém a referência do elemento HTML onde os resultados serão exibidos
 * 2. Inicializa um índice para percorrer o array
 * 3. Entra no loop do-while (executa pelo menos uma vez)
 * 4. Verifica se já ultrapassou o final da lista
 * 5. Se sim, exibe mensagem de fim e interrompe o loop
 * 6. Se não, exibe um confirm perguntando se deseja ver o próximo carro
 * 7. Registra a escolha do usuário na página
 * 8. Avança para o próximo índice
 * 9. Se usuário escolher "Cancelar" no confirm, interrompe o loop
 * 10. Caso contrário, repete a partir do passo 4
 * 
 * RETORNO: void (a função não retorna valor, apenas modifica o DOM)
 */
// Função responsável por percorrer a lista usando do-while
function percorrerCarros() {
    // Obtém o elemento HTML com ID 'saida' onde os resultados serão exibidos
    const container = document.getElementById('saida');
    
    // Variável que controla qual carro está sendo exibido (começa da primeira posição)
    let index = 0;
    
    // Variável que armazena se o usuário deseja continuar vendo carros
    let continuar;

    // LOOP DO-WHILE:
    // Executa o bloco de código PELO MENOS UMA VEZ
    // A condição while (true) faz o loop continuar indefinidamente
    // SOMENTE pode ser interrompido usando break ou return
    do {
        // VALIDAÇÃO 1: Verifica se o índice ultrapassou o tamanho da lista
        if (index >= carros.length) {
            // Se sim, cria um parágrafo com mensagem de fim
            const endMsg = document.createElement('p');
            endMsg.textContent = 'Não há mais carros para mostrar.';
            // Adiciona o parágrafo ao container da página
            container.appendChild(endMsg);
            // Interrompe o loop
            break;
        }

        // Obtém o carro na posição atual do array
        const carroAtual = carros[index];
        
        // Exibe uma caixa de diálogo (confirm) e armazena a resposta do usuário
        // Clique em OK retorna true, clique em Cancelar retorna false
        continuar = confirm(`Carro: ${carroAtual}\nDeseja ver o próximo?`);

        // ESCREVE NA PÁGINA: Cria um parágrafo com o nome do carro e a decisão do usuário
        // Usa a combinação ternária para exibir Continuar ou Parar
        const linha = document.createElement('p');
        linha.textContent = `${carroAtual} - ${continuar ? 'Continuar' : 'Parar'}`;
        // Adiciona o parágrafo ao container da página
        container.appendChild(linha);

        // Avança para o próximo carro
        index++;

        // VALIDAÇÃO 2: Verifica se o usuário escolheu Cancelar (não continuar)
        if (!continuar) {
            // Se sim, cria um parágrafo informando que o loop foi interrompido
            const stopMsg = document.createElement('p');
            stopMsg.textContent = 'Loop interrompido pelo usuário.';
            // Adiciona o parágrafo ao container da página
            container.appendChild(stopMsg);
            // Interrompe o loop
            break;
        }
        // Se chegou aqui, continuar == true, portanto o loop prosseguirá na próxima iteração
    } while (true);
    // Fim do loop do-while
}

// ============================================
// INICIALIZAÇÃO E EVENTOS
// ============================================

/**
 * EVENTO: DOMContentLoaded
 * DESCRIÇÃO: Aguarda até que o DOM (Document Object Model) esteja completamente carregado
 * OBJETIVO: Garante que todos os elementos HTML estejam disponíveis antes de execute a função
 * EXECUÇÃO: Chama a função percorrerCarros() quando a página terminar de carregar
 * 
 * IMPORTANTE: Sem este evento, a função tentaria executar antes dos elementos HTML
 * existirem, causando erros
 */
// Executa a função assim que o script carregar
window.addEventListener('DOMContentLoaded', percorrerCarros);