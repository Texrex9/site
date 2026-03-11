// Esta função valida todos os campos do formulário antes de enviar.
function validarForm() {
  // Pega o valor digitado no campo de nome.
  const name = document.getElementById("name").value;
  // Pega o valor digitado no campo de telefone.
  const tel = document.getElementById("tel").value;
  // Pega o valor digitado no campo de e-mail.
  const email = document.getElementById("email").value;
  // Pega o valor digitado no campo de senha.
  const password = document.getElementById("password").value;
  // Pega o valor digitado no campo de mensagem.
  const message = document.getElementById("message").value;

  // Verifica se algum campo ficou vazio.
  if (
    name === "" ||
    tel === "" ||
    email === "" ||
    password === "" ||
    message === ""
  ) {
    // Mostra aviso para a pessoa preencher todos os campos.
    alert("Por favor, preencha todos os campos do formulário.");
    // Retorna falso para impedir o envio.
    return false;
  }

  // Verifica se o nome tem tamanho mínimo e máximo permitido.
  if (name.length < 3 || name.length > 50) {
    // Mostra aviso explicando o tamanho aceito para o nome.
    alert("O nome deve conter entre 3 e 50 caracteres.");
    // Retorna falso para impedir o envio.
    return false;
  }

  // Cria um padrão para validar número de telefone brasileiro.
  const telPattern = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
  // Testa se o telefone digitado segue o padrão esperado.
  if (!telPattern.test(tel)) {
    // Mostra exemplo para ajudar a preencher corretamente.
    alert(
      "Por favor, insira um número de telefone válido (ex: (11) 99999-9999).",
    );
    // Retorna falso para impedir o envio.
    return false;
  }

  // Verifica regras básicas do e-mail (tamanho e presença de @).
  if (email.length < 5 || email.length > 100 || !email.includes("@")) {
    // Mostra aviso com as regras mínimas de e-mail.
    alert(
      "Por favor, insira um email válido (entre 5 e 100 caracteres e contendo '@').",
    );
    // Retorna falso para impedir o envio.
    return false;
  }

  // Verifica se a senha possui tamanho aceitável.
  if (password.length < 6 || password.length > 20) {
    // Mostra aviso com o tamanho permitido para senha.
    alert("A senha deve conter entre 6 e 20 caracteres.");
    // Retorna falso para impedir o envio.
    return false;
  }

  // Cria um padrão para validar melhor a estrutura do e-mail.
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Testa se o e-mail combina com o padrão criado.
  if (!emailPattern.test(email)) {
    // Mostra aviso de e-mail inválido.
    alert("Por favor, insira um email válido.");
    // Retorna falso para impedir o envio.
    return false;
  }

  // Se passou por todas as validações, retorna verdadeiro.
  return true;
}

// Escuta o evento de envio do formulário.
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    // Impede o envio automático para validar antes.
    event.preventDefault();
    // Chama a função de validação.
    if (validarForm()) {
      // Se estiver tudo correto, mostra mensagem de sucesso.
      alert("Formulário enviado com sucesso!");
    }
  });
