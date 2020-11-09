  //atribuindo a variavel "seletor" os elemntos com id "seletor";
  let seletor1 = document.getElementById("seletor1").value;
  let seletor2 = document.getElementById("seletor2").value;
  let seletor3 = document.getElementById("seletor3").value;
  let seletor4 = document.getElementById("seletor4").value;
  let seletor5 = document.getElementById("seletor5").value;
  let seletor6 = document.getElementById("seletor6").value;
  let seletor7 = document.getElementById("seletor7").value;
  let seletor8 = document.getElementById("seletor8").value;
  let seletor9 = document.getElementById("seletor9").value;
  let seletor10 = document.getElementById("seletor10").value;

function descobrir() {
    let conservadorDiv = document.getElementById("conservador");
    let diversificadoDiv = document.getElementById("diversificado");
    let agressivoDiv = document.getElementById("agressivo");
  //variaveis para comparação posterior de escolhas
  let answerA = 0;
  let answerB = 0;
  let answerC = 0;

  //atribuindo as escolhas da combo-box para variaveis
  if (seletor1 == 1) {
    answerA++;
  } else if (seletor1 == 2) {
    answerB++;
  } else if (seletor1 == 3) {
    answerC++;
  } else {
    error1.innerHTML = `<i style="color>red">*Não deixe de preencher este campo!</i>`;
  }

  if (seletor2 == 1) {
    answerA++;
  } else if (seletor2 == 2) {
    answerB++;
  } else if (seletor2 == 3) {
    answerC++;
  } else {
    error2.innerHTML = `<i style="color>red">*Não deixe de preencher este campo!</i>`;
  }

  if (seletor3 == 1) {
    answerA++;
  } else if (seletor3 == 2) {
    answerB++;
  } else if (seletor3 == 3) {
    answerC++;
  } else {
    error3.innerHTML = `<i style="color>red">*Não deixe de preencher este campo!</i>`;
  }

  if (seletor4 == 1) {
    answerA++;
  } else if (seletor4 == 2) {
    answerB++;
  } else if (seletor4 == 3) {
    answerC++;
  } else {
    error4.innerHTML = `<i style="color>red">*Não deixe de preencher este campo!</i>`;
  }

  if (seletor5 == 1) {
    answerA++;
  } else if (seletor5 == 2) {
    answerB++;
  } else if (seletor5 == 3) {
    answerC++;
  } else {
    error5.innerHTML = `<i style="color>red">*Não deixe de preencher este campo!</i>`;
  }

  if (seletor6 == 1) {
    answerA++;
  } else if (seletor6 == 2) {
    answerB++;
  } else if (seletor6 == 3) {
    answerC++;
  } else {
    error6.innerHTML = `<i style="color>red">*Não deixe de preencher este campo!</i>`;
  }

  if (seletor7 == 1) {
    answerA++;
  } else if (seletor7 == 2) {
    answerB++;
  } else if (seletor7 == 3) {
    answerC++;
  } else {
    error7.innerHTML = `<i style="color>red">*Não deixe de preencher este campo!</i>`;
  }

  if (seletor8 == 1) {
    answerA++;
  } else if (seletor8 == 2) {
    answerB++;
  } else if (seletor8 == 3) {
    answerC++;
  } else {
    error8.innerHTML = `<i style="color>red">*Não deixe de preencher este campo!</i>`;
  }

  if (seletor9 == 1) {
    answerA++;
  } else if (seletor9 == 2) {
    answerB++;
  } else if (seletor9 == 3) {
    answerC++;
  } else {
    error9.innerHTML = `<i style="color>red">*Não deixe de preencher este campo!</i>`;
  }

  if (seletor10 == 1) {
    answerA++;
  } else if (seletor10 == 2) {
    answerB++;
  } else if (seletor10 == 3) {
    answerC++;
  } else {
    error10.innerHTML = `<i style="color>red">*Não deixe de preencher este campo!</i>`;
  }

//validando para que nenhum campo não fique preenchido
  if (
    seletor1 == 0 ||
    seletor2 == 0 ||
    seletor3 == 0 ||
    seletor4 == 0 ||
    seletor5 == 0 ||
    seletor6 == 0 ||
    seletor7 == 0 ||
    seletor8 == 0 ||
    seletor9 == 0 ||
    seletor10 == 0
  ) {
    alert("Atenção, preencha todos os campos!");
  } else {
    //validando o perfil de acordo com as respostas acumuladas
    if (answerA > answerB && answerA > answerC) {
      conservadorDiv.style.display = "block";
    } else if (answerB > answerA && answerB > answerC) {
      diversificadoDiv.style.display = "block";
    } else if (answerC > answerA && answerC > answerB) {
      agressivoDiv.style.display = "block";
    } else if (answerA == answerB) {
      conservadorDiv.style.display = "block";
    } else if (answerC == answerB) {
      diversificadoDiv.style.display = "block";
    } else {
      conservadorDiv.style.display = "block";
    }
  }
}

//funcao para atualizar a pagina
function resetar(){
    location.reload(); 
}