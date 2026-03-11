function validarForm() {
  const name = document.getElementById("name").value;
  const tel = document.getElementById("tel").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message").value;

  if (
    name === "" ||
    tel === "" ||
    email === "" ||
    password === "" ||
    message === ""
  ) {
    alert("Por favor, preencha todos os campos do formulário.");
    return false;
  }

  if (name.length < 3 || name.length > 50) {
    alert("O nome deve conter entre 3 e 50 caracteres.");
    return false;
  }

  const telPattern = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
  if (!telPattern.test(tel)) {
    alert(
      "Por favor, insira um número de telefone válido (ex: (11) 99999-9999).",
    );
    return false;
  }

  if (email.length < 5 || email.length > 100 || !email.includes("@")) {
    alert(
      "Por favor, insira um email válido (entre 5 e 100 caracteres e contendo '@').",
    );
    return false;
  }

  if (password.length < 6 || password.length > 20) {
    alert("A senha deve conter entre 6 e 20 caracteres.");
    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Por favor, insira um email válido.");
    return false;
  }

  return true;
}

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    if (validarForm()) {
      alert("Formulário enviado com sucesso!");
    }
  });
