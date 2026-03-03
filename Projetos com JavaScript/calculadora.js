// Define a função que realiza a operação matemática escolhida pelo usuário
function calcular() {
  // Obtém o primeiro número do input com id 'num1', converte para número decimal e armazena na variável
  var num1 = parseFloat(document.getElementById("num1").value);
  // Obtém o segundo número do input com id 'num2', converte para número decimal e armazena na variável
  var num2 = parseFloat(document.getElementById("num2").value);
  // Obtém o operador selecionado do drop-down com id 'operador' e armazena na variável
  var operacao = document.getElementById("operador").value;
  // Declara a variável resultado que irá armazenar o valor da operação matemática
  var resultado;

  // Inicia uma estrutura switch que verifica qual operação será realizada
  switch (operacao) {
    // Caso o operador seja "+"
    case "+":
      // Realiza a soma dos dois números e armazena em resultado
      resultado = num1 + num2;
      // Encerra este caso do switch
      break;
    // Caso o operador seja "-"
    case "-":
      // Realiza a subtração dos dois números e armazena em resultado
      resultado = num1 - num2;
      // Encerra este caso do switch
      break;
    // Caso o operador seja "*"
    case "*":
      // Realiza a multiplicação dos dois números e armazena em resultado
      resultado = num1 * num2;
      // Encerra este caso do switch
      break;
    // Caso o operador seja "/"
    case "/":
      // Verifica se o divisor (num2) é diferente de zero para evitar divisão por zero
      if (num2 !== 0) {
        // Se for diferente de zero, realiza a divisão e armazena em resultado
        resultado = num1 / num2;
      } else {
        // Se for zero, atribui uma mensagem de erro à variável resultado
        resultado = "Erro: Divisão por zero";
      }
      // Encerra este caso do switch
      break;
    // Caso padrão quando nenhum operador válido é selecionado
    default:
      // Atribui uma mensagem de operação inválida à variável resultado
      resultado = "Operação inválida";
  }

  // Atualiza o conteúdo HTML do elemento com id 'resultado' para exibir o valor calculado
  document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}
