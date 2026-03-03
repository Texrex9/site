// Define a função que será chamada quando o usuário clicar no botão calcular
function calcularDesconto() {
    // Obtém o valor do input com id 'preco', converte para número decimal e armazena na variável
    var precoInput = parseFloat(document.getElementById("preco").value);
    // Obtém o valor do input com id 'porcentagemDesconto', converte para número decimal e armazena na variável
    var percDesconto = parseFloat(document.getElementById("porcentagemDesconto").value);

    // Verifica se o preço é um número válido ou se é menor ou igual a zero
    if (isNaN(precoInput) || precoInput <= 0) {
        // Se inválido, exibe uma mensagem de erro para o usuário
        alert("Preço inválido. Por favor, informe um valor maior que zero.");
        // Registra o erro no console para diagnóstico
        console.error("Entrada de preço inválida", precoInput);
        // Encerra a execução da função se o preço for inválido
        return;
    }

    // Verifica se a porcentagem é um número válido e se está entre 0 e 100
    if (isNaN(percDesconto) || percDesconto < 0 || percDesconto > 100) {
        // Se inválida, exibe uma mensagem de erro para o usuário
        alert("Porcentagem de desconto inválida. Informe um valor entre 0 e 100.");
        // Registra o erro no console para diagnóstico
        console.error("Entrada de porcentagem inválida", percDesconto);
        // Encerra a execução da função se a porcentagem for inválida
        return;
    }

    // Calcula o valor do desconto multiplicando o preço pela porcentagem e dividindo por 100
    var descontoValor = (precoInput * percDesconto) / 100;
    // Calcula o preço final subtraindo o valor do desconto do preço original
    var precoFinal = precoInput - descontoValor;

    // Exibe o preço original no console com duas casas decimais
    console.log("Preço original: R$ " + precoInput.toFixed(2));
    // Exibe o valor do desconto no console com a porcentagem e duas casas decimais
    console.log("Desconto (" + percDesconto + "%): R$ " + descontoValor.toFixed(2));
    // Exibe o preço final no console com duas casas decimais
    console.log("Preço final: R$ " + precoFinal.toFixed(2));

    // Exibe uma caixa de alerta para o usuário com todas as informações do cálculo
    alert(
        // Mostra o preço original formatado com 2 casas decimais
        "Preço original: R$ " + precoInput.toFixed(2) + "\n" +
        // Mostra a porcentagem de desconto e o valor descontado formatado
        "Desconto (" + percDesconto + "%): R$ " + descontoValor.toFixed(2) + "\n" +
        // Mostra o preço final após o desconto formatado
        "Preço final: R$ " + precoFinal.toFixed(2)
    );

    // Atualiza o conteúdo HTML do elemento com id 'resultado' para exibir o preço com desconto
    document.getElementById("resultado").innerHTML =
        // Define o texto a ser exibido com o preço final formatado em duas casas decimais
        "Preço com desconto: R$ " + precoFinal.toFixed(2);
}