function calcularDesconto() {
    // lê os valores informados pelo usuário
    var precoInput = parseFloat(document.getElementById("preco").value);
    var percDesconto = parseFloat(document.getElementById("porcentagemDesconto").value);

    // validações básicas usando if/else
    if (isNaN(precoInput) || precoInput <= 0) {
        alert("Preço inválido. Por favor, informe um valor maior que zero.");
        console.error("Entrada de preço inválida", precoInput);
        return;
    }

    if (isNaN(percDesconto) || percDesconto < 0 || percDesconto > 100) {
        alert("Porcentagem de desconto inválida. Informe um valor entre 0 e 100.");
        console.error("Entrada de porcentagem inválida", percDesconto);
        return;
    }

    // cálculos necessários
    var descontoValor = (precoInput * percDesconto) / 100;
    var precoFinal = precoInput - descontoValor;

    // exibe no console e em alert
    console.log("Preço original: R$ " + precoInput.toFixed(2));
    console.log("Desconto (" + percDesconto + "%): R$ " + descontoValor.toFixed(2));
    console.log("Preço final: R$ " + precoFinal.toFixed(2));

    alert(
        "Preço original: R$ " + precoInput.toFixed(2) + "\n" +
        "Desconto (" + percDesconto + "%): R$ " + descontoValor.toFixed(2) + "\n" +
        "Preço final: R$ " + precoFinal.toFixed(2)
    );

    // atualiza área de resultado na página
    document.getElementById("resultado").innerHTML =
        "Preço com desconto: R$ " + precoFinal.toFixed(2);
}