function cadastrar() {
  aguardar();
  var formulario = new URLSearchParams(new FormData(form_cadastro));
  fetch("/usuarios/cadastrar", {
    method: "POST",
    body: formulario,
  }).then(function (response) {
    if (response.ok) {
      window.location.href = "login.html";
    } else {
      console.log("Erro de cadastro!");
      response.text().then(function (resposta) {
        div_erro.innerHTML = resposta;
      });
      finalizar_aguardar();
    }
  });

  return false;
}

function aguardar() {
  btn_entrar.disabled = true;
  img_aguarde.style.display = "block";
  div_erro.style.display = "none";
}

function finalizar_aguardar() {
  btn_entrar.disabled = false;
  img_aguarde.style.display = "none";
  div_erro.style.display = "block";
}

function verificarNome() {
  let nomeDigitado = nome.value;

  if (nomeDigitado.startsWith(" ") || nomeDigitado.endsWith(" ") || nomeDigitado == 0 || nomeDigitado.length >= 46) {
    checador.src = `img/x.png`;
    checador.style.display = `block`;
  } else {
    checador.src = `img/check.png`;
    checador.style.display = `block`;
  }
}

function validacaoEmail() {
  let emailUser = email.value;
  if (emailUser.includes(".") == true && emailUser.includes("@") == true) {
    checadorEmail.src = `img/check.png`;
    checadorEmail.style.display = `block`;
  } else {
    checadorEmail.src = `img/x.png`;
    checadorEmail.style.display = `block`;
  }
}

function validadorSenha() {
  feedback.innerHTML = ``;
  let password = senha.value;
  var error = false;
  var message = "";
  if (password.length < 8) {
    feedback.innerHTML += "<br>Sua senha precisa de no mínimo 8 caracteres.";
    error = true;
  } else if (password.search(/[a-z]/) == -1) {
    feedback.innerHTML +=
      "<br>Sua senha precisa conter ao menos uma letra minúscula.";
    error = true;
  } else if (password.search(/[A-Z]/) == -1) {
    feedback.innerHTML +=
      "<br>Sua senha precisa conter ao menos uma letra maiúscula.";
    error = true;
  } else if (password.search(/[0-9]/) == -1) {
    feedback.innerHTML += "<br>Sua senha precisa conter um número.";
    error = true;
  } else {
    checadorSenha.src = `img/check.png`;
    checadorSenha.style.display = `block`;
  }
}

function validadorCPF() {
  let cpf = CPF.value;
  if (cpf.length < 11) {
    checadorCPF.src = `img/x.png`;
    checadorCPF.style.display = `block`;
  } else {
    checadorCPF.src = `img/check.png`;
    checadorCPF.style.display = `block`;
  }
}


function verificarUsuario(){
  let nomeDigitado = login.value;

  if (nomeDigitado.startsWith(" ") || nomeDigitado.endsWith(" ") || nomeDigitado.length == 0 || nomeDigitado.length >= 46) {
    checkUser.src = `img/x.png`;
    checkUser.style.display = `block`;
  } else {
    checkUser.src = `img/check.png`;
    checkUser.style.display = `block`;
  }
}

function validarCelular(){
  let telefoneUser = celular.value;
  if(telefoneUser.length < 11){
    checadorCelular.src = `img/x.png`;
    checadorCelular.style.display = `block`;
  }else{
    checadorCelular.src = `img/check.png`;
    checadorCelular.style.display = `block`;
  }
}