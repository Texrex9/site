function verificarAprovacao() {
  var nota = document.getElementById("nota").value;
  console.log("Nota inserida: " + nota);
  var resultado = document.getElementById("resultado");

  if (nota === "" || nota === null) {
    resultado.innerHTML = "⚠️ Por favor, digite uma nota!";
    resultado.className = "invalido";
    return;
  }

  nota = parseFloat(nota);
  if (isNaN(nota) || nota < 0 || nota > 10) {
    resultado.innerHTML = "⚠️ Digite uma nota válida (0 a 10)!";
    resultado.className = "invalido";
    return;
  }

  if (nota >= 7) {
    resultado.innerHTML = "✓ Aprovado(a)!";
    resultado.className = "aprovado";
    alert("Parabéns! Você foi aprovado(a)!");
  } else {
    resultado.innerHTML = "✗ Reprovado(a)!";
    resultado.className = "reprovado";
    alert("Infelizmente, você foi reprovado(a). Tente novamente!");
  }
}
