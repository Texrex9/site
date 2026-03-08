
function calcular(num1, num2, operacao) {
  let resultado;
  switch (operacao) {
    case "+": // id: soma
      resultado = num1 + num2;
      break;
    case "-": // id: subtracao
      resultado = num1 - num2;
      break;
    case "*": // id: multiplicacao
      resultado = num1 * num2;
      break;
    case "/": // id: divisao
      if (num2 !== 0) {
        resultado = num1 / num2;
      } else {
        resultado = "Erro: Divisão por zero.";
      }
      break;
    default:
      resultado = "Operação invalida.";
  }
  return resultado;
}

module.exports = {
  calcular: calcular,
};
