

function calcularDesconto() {
    var precoInput = parseFloat(document.getElementById("preco").value);
    
    var percDesconto = parseFloat(document.getElementById("porcentagemDesconto").value);

    if (isNaN(precoInput) || precoInput <= 0) {
        alert("Preco invalido. Por favor, informe um valor maior que zero.");
        console.error("Entrada de preco invalida", precoInput);
        return;
    }

    if (isNaN(percDesconto) || percDesconto < 0 || percDesconto > 100) {
        alert("Porcentagem de desconto invalida. Informe um valor entre 0 e 100.");
        console.error("Entrada de porcentagem invalida", percDesconto);
        return;
    }

    var descontoValor = (precoInput * percDesconto) / 100;
    
    var precoFinal = precoInput - descontoValor;

    console.log("Preco original: R$ " + precoInput.toFixed(2));
    
    console.log("Desconto (" + percDesconto + "%): R$ " + descontoValor.toFixed(2));
    
    console.log("Preco final: R$ " + precoFinal.toFixed(2));

    alert(
        "Preco original: R$ " + precoInput.toFixed(2) + "\n" +
        "Desconto (" + percDesconto + "%): R$ " + descontoValor.toFixed(2) + "\n" +
        "Preco final: R$ " + precoFinal.toFixed(2)
    );

    document.getElementById("resultado").innerHTML =
        "Preco com desconto: R$ " + precoFinal.toFixed(2);
}
