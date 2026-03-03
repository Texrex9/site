function calcular() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var operacao = document.getElementById("operador").value;
  var resultado;

  switch (operacao) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      if (num2 !== 0) {
        resultado = num1 / num2;
      } else {
        resultado = "Erro: Divisão por zero";
      }
      break;
    default:
      resultado = "Operação inválida";
  }

  document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}
