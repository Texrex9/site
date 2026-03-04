/**
 * ARQUIVO: precoDesconto.js
 * DESCRICAO: Script que implementa a logica de calculo de desconto em precos
 * FUNCIONALIDADE: Processa os dados de preco e porcentagem inseridos pelo usuario,
 * valida as entradas, calcula o desconto e exibe os resultados
 * 
 * FUNCOES:
 * - calcularDesconto(): Funcao principal que realiza todo o calculo
 */

// ============================================
// FUNCOES PRINCIPAIS
// ============================================

/**
 * FUNCAO: calcularDesconto()
 * OBJETIVO: Capturar os valores de preco e porcentagem, validar as entradas,
 * calcular o desconto, e exibir os resultados em alert e na pagina
 * 
 * FLUXO:
 * 1. Obtem o valor do preco do input HTML
 * 2. Obtem o valor da porcentagem de desconto do input HTML
 * 3. Valida se o preco eh um numero valido e maior que zero
 * 4. Se invalido, exibe erro e encerra
 * 5. Valida se a porcentagem esta entre 0 e 100
 * 6. Se invalida, exibe erro e encerra
 * 7. Calcula o valor do desconto
 * 8. Calcula o preco final
 * 9. Exibe os resultados no console para debug
 * 10. Exibe os resultados em um alert para o usuario
 * 11. Atualiza a pagina HTML com o preco final
 * 
 * RETORNO: void (a funcao nao retorna valor, apenas modifica o DOM e exibe mensagens)
 */
// Define a funcao que sera chamada quando o usuario clicar no botao calcular
function calcularDesconto() {
    // Obtem o valor do input com id 'preco', converte para numero decimal
    // parseFloat() converte string para numero com decimais
    var precoInput = parseFloat(document.getElementById("preco").value);
    
    // Obtem o valor do input com id 'porcentagemDesconto', converte para numero decimal
    // parseFloat() converte string para numero com decimais
    var percDesconto = parseFloat(document.getElementById("porcentagemDesconto").value);

    // ========== VALIDACAO 1: Verifica o preco ==========
    // isNaN() verifica se o valor NAO EH um numero
    // precoInput <= 0 garante que o preco seja positivo
    if (isNaN(precoInput) || precoInput <= 0) {
        // Se invalido, exibe uma mensagem de erro para o usuario
        alert("Preco invalido. Por favor, informe um valor maior que zero.");
        // Registra o erro no console para diagnostico (console.error = mensagem de erro em vermelho)
        console.error("Entrada de preco invalida", precoInput);
        // Encerra a execucao da funcao se o preco for invalido
        return;
    }

    // ========== VALIDACAO 2: Verifica a porcentagem de desconto ==========
    // Verifica se a porcentagem eh um numero valido
    // Verifica se esta entre 0 (sem desconto) e 100 (desconto total)
    if (isNaN(percDesconto) || percDesconto < 0 || percDesconto > 100) {
        // Se invalida, exibe uma mensagem de erro para o usuario
        alert("Porcentagem de desconto invalida. Informe um valor entre 0 e 100.");
        // Registra o erro no console para diagnostico
        console.error("Entrada de porcentagem invalida", percDesconto);
        // Encerra a execucao da funcao se a porcentagem for invalida
        return;
    }

    // ========== CALCULOS ==========
    // Calcula o valor do desconto em reais aplicando a formula:
    // desconto = (preco original x porcentagem) / 100
    // Exemplo: preco=100, desconto=10% => (100 * 10) / 100 = 10 reais
    var descontoValor = (precoInput * percDesconto) / 100;
    
    // Calcula o preco final subtraindo o desconto do preco original
    // preco final = preco original - desconto
    // Exemplo: 100 (original) - 10 (desconto) = 90 (final)
    var precoFinal = precoInput - descontoValor;

    // ========== EXIBICAO NO CONSOLE (para debug/diagnostico) ==========
    // Exibe o preco original no console com duas casas decimais
    // toFixed(2) formata o numero para exibir sempre 2 casas decimais
    console.log("Preco original: R$ " + precoInput.toFixed(2));
    
    // Exibe o valor do desconto no console com a porcentagem e duas casas decimais
    console.log("Desconto (" + percDesconto + "%): R$ " + descontoValor.toFixed(2));
    
    // Exibe o preco final no console com duas casas decimais
    console.log("Preco final: R$ " + precoFinal.toFixed(2));

    // ========== EXIBICAO EM ALERT (para o usuario) ==========
    // Exibe uma caixa de alerta com todas as informacoes do calculo
    // \n dentro da string representa uma quebra de linha no alert
    alert(
        // Mostra o preco original formatado com 2 casas decimais
        "Preco original: R$ " + precoInput.toFixed(2) + "\n" +
        // Mostra a porcentagem de desconto e o valor descontado formatado
        "Desconto (" + percDesconto + "%): R$ " + descontoValor.toFixed(2) + "\n" +
        // Mostra o preco final apos o desconto formatado
        "Preco final: R$ " + precoFinal.toFixed(2)
    );

    // ========== ATUALIZACAO DA PAGINA HTML ==========
    // Atualiza o conteudo HTML do elemento com id 'resultado' para exibir o preco final
    // innerHTML permite inserir codigo HTML ou texto dentro do elemento
    document.getElementById("resultado").innerHTML =
        // Define o texto a ser exibido com o preco final formatado em duas casas decimais
        "Preco com desconto: R$ " + precoFinal.toFixed(2);
}
