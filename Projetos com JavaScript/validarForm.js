function validarForm() {
  const name = document.getElementById("name").value;
  const tel = document.getElementById("tel").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message").value;

  if (name === "" || tel === "" || email === "" || password === "" || message === "") {
    alert("Por favor, preencha todos os campos do formulário.");
    return false; // Encerra a função se algum campo estiver vazio
  }

  if (name.length < 3 || name.length > 50) {
    alert("O nome deve conter entre 3 e 50 caracteres.");
    return false; // Encerra a função se o nome tiver menos de 3 ou mais de 50 caracteres
  }

  // Validação do telefone com expressão regular para formatos brasileiros
  const telPattern = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
  if (!telPattern.test(tel)) {
    alert("Por favor, insira um número de telefone válido (ex: (11) 99999-9999).");
    return false; // Encerra a função se o telefone for inválido
  }

  if (email.length < 5 || email.length > 100 || !email.includes("@")) {
    alert(
      "Por favor, insira um email válido (entre 5 e 100 caracteres e contendo '@').",
    );
    return false; // Encerra a função se o email for inválido
  }

  if (password.length < 6 || password.length > 20) {
    alert("A senha deve conter entre 6 e 20 caracteres.");
    return false; // Encerra a função se a senha tiver menos de 6 ou mais de 20 caracteres
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Por favor, insira um email válido.");
    return false; // Encerra a função se o email não corresponder ao padrão
  }

  return true; // Retorna true se todas as validações passarem
}

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário para validação
   if (validarForm()){
        alert("Formulário enviado com sucesso!");
        // Limpa o formulário após envio
    }           
}); // Chama a função de validação