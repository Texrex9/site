// Define a função que verifica se o aluno foi aprovado ou reprovado
function verificarAprovacao() {
    // Obtém o valor do input com id 'nota' e armazena na variável nota
    var nota = document.getElementById("nota").value;
    // Registra a nota inserida no console para fins de debug
    console.log("Nota inserida: " + nota);
    // Obtém o elemento HTML com id 'resultado' para exibir o resultado da aprovação
    var resultado = document.getElementById("resultado");
    // Verifica se a nota é maior ou igual a 7 (nota de aprovação)
    if (nota >= 7) {
        // Se aprovado, altera o conteúdo HTML do elemento resultado para "Aprovado(a)!"
        resultado.innerHTML = "Aprovado(a)!";
        // Muda a cor do texto para verde para indicar aprovação
        resultado.style.color = "green";
        // Exibe uma caixa de alerta congratulando o aluno aprovado
        alert("Parabéns! Você foi aprovado(a)!");
    } else {
        // Se reprovado (nota < 7), altera o conteúdo HTML do elemento resultado para "Reprovado(a)!"
        resultado.innerHTML = "Reprovado(a)!";
        // Muda a cor do texto para vermelho para indicar reprovação
        resultado.style.color = "red";
        // Exibe uma caixa de alerta informando que o aluno foi reprovado
        alert("Infelizmente, você foi reprovado(a). Tente novamente!");
    }
}