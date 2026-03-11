// Esta função é chamada quando a pessoa clica no botão para ver a saudação.
function mostraSaudacao() {
  // Pega o nome que foi digitado no campo "nome".
  const nome = document.getElementById("nome").value;
  // Pega a hora digitada e transforma em número inteiro para facilitar comparações.
  const hora = parseInt(document.getElementById("hora").value, 10);
  // Pega o elemento da página onde a mensagem final será mostrada.
  const mensagem = document.getElementById("mensagem");
  // Chama a função que monta a saudação e coloca o resultado na tela.
  mensagem.innerHTML = saudacaoPersonalizada(nome, hora);
}

// Esta função decide qual saudação será usada com base no horário informado.
function saudacaoPersonalizada(nome, hora) {
  // Se a hora for menor que 12, retorna "Bom dia" com o nome da pessoa.
  if (hora < 12) {
    return `Bom dia, ${nome}!`;
    // Se a hora for maior que 12 e menor que 18, retorna "Boa tarde".
  } else if (hora > 12 && hora < 18) {
    return `Boa tarde, ${nome}!`;
    // Se a hora for maior que 18, retorna "Boa noite".
  } else if (hora > 18) {
    return `Boa noite, ${nome}!`;
    // Nos outros casos (exemplo: exatamente 12 ou 18), retorna texto vazio.
  } else {
    return "";
  }
}
