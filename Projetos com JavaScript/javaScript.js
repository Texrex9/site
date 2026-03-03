function verificarAprovacao() {{}
    var nota = document.getElementById("nota").value;
    console.log("Nota inserida: " + nota);
    var resultado = document.getElementById("resultado");
    if (nota >= 7) {
        resultado.innerHTML = "Aprovado(a)!";
        resultado.style.color = "green";
        alert("Parabéns! Você foi aprovado(a)!");
    } else {
        resultado.innerHTML = "Reprovado(a)!";
        resultado.style.color = "red";
        alert("Infelizmente, você foi reprovado(a). Tente novamente!");
    }
}