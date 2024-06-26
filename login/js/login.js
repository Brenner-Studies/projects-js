const dataUserLogin = {
  email: "teste@gmail.com",
  senha: "Teste",
};

function errorUserInvalid() {
  var error = document.querySelectorAll(".input_element");

  error.forEach((input) => {
    input.value = "";
    input.placeholder = "E-mail ou Senha incorretos!";
    input.style.background = "rgba(255, 0, 0, 0.637)";
  });
}

function dataInputLogin(email, senha) {
  let booleanEmail = false;

  const validateEmail = email.split("");
  validateEmail.forEach((letter) => {
    letter === "@" ? (booleanEmail = true) : "";
  });

  email.length < 5 || booleanEmail === false
    ? alert("Email inválido!")
    : email === dataUserLogin.email && senha === dataUserLogin.senha
    ? (alert("Usuário Validado!"), (location.href = "home.html"))
    : (alert("Usuário inválido!"), errorUserInvalid());
}

document.getElementById("button_submit").addEventListener("click", (e) => {
  e.preventDefault();
  var email = document.getElementById("email").value;
  var senha = document.getElementById("password").value;
  dataInputLogin(email, senha);
});
