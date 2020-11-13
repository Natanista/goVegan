function descobrir() {
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

  //atribuindo as divs a variavel respectiva
  let conservadorDiv = document.getElementById("conservador");
  let diversificadoDiv = document.getElementById("diversificado");
  let agressivoDiv = document.getElementById("agressivo");

  //variaveis para comparação posterior de escolhas
  let answerA = 0;
  let answerB = 0;
  let answerC = 0;
  let validador = 0;

  //atribuindo as escolhas da combo-box para variaveis
  if (seletor1 == "1") {
    answerA++;
    validador++;
  } else if (seletor1 == "2") {
    answerB++;
    validador++;
  } else if (seletor1 == "3") {
    answerC++;
    validador++;
  } else {
    error1.innerHTML = `<i style="color:red">*Não deixe de preencher este campo!</i>`;
  }

  if (seletor2 == "1") {
    answerA++;
    validador++;
  } else if (seletor2 == "2") {
    answerB++;
    validador++;
  } else if (seletor2 == "3") {
    answerC++;
    validador++;
  } else {
    error2.innerHTML = `<i style="color:red">*Não deixe de preencher este campo!</i>`;
  }

  if (seletor3 == "1") {
    answerA++;
  } else if (seletor3 == "2") {
    answerB++;
  } else if (seletor3 == "3") {
    answerC++;
  } else {
    error3.innerHTML = `<i style="color:red">*Não deixe de preencher este campo!</i>`;
  }

  if (seletor4 == "1") {
    answerA++;
    validador++;
  } else if (seletor4 == "2") {
    answerB++;
    validador++;
  } else if (seletor4 == "3") {
    answerC++;
    validador++;
  } else {
    error4.innerHTML = `<i style="color:red">*Não deixe de preencher este campo!</i>`;
  }

  if (seletor5 == "1") {
    answerA++;
    validador++;
  } else if (seletor5 == "2") {
    answerB++;
    validador++;
  } else if (seletor5 == "3") {
    answerC++;
    validador++;
  } else {
    error5.innerHTML = `<i style="color:red">*Não deixe de preencher este campo!</i>`;
  }

  if (seletor6 == "1") {
    answerA++;
    validador++;
  } else if (seletor6 == "2") {
    answerB++;
    validador++;
  } else if (seletor6 == "3") {
    answerC++;
    validador++;
  } else {
    error6.innerHTML = `<i style="color:red">*Não deixe de preencher este campo!</i>`;
  }

  if (seletor7 == "1") {
    answerA++;
    validador++;
  } else if (seletor7 == "2") {
    answerB++;
    validador++;
  } else if (seletor7 == "3") {
    answerC++;
    validador++;
  } else {
    error7.innerHTML = `<i style="color:red">*Não deixe de preencher este campo!</i>`;
  }

  if (seletor8 == "1") {
    answerA++;
    validador++;
  } else if (seletor8 == "2") {
    answerB++;
    validador++;
  } else if (seletor8 == "3") {
    answerC++;
    validador++;
  } else {
    error8.innerHTML = `<i style="color:red">*Não deixe de preencher este campo!</i>`;
  }

  if (seletor9 == "1") {
    answerA++;
    validador++;
  } else if (seletor9 == "2") {
    answerB++;
    validador++;
  } else if (seletor9 == "3") {
    answerC++;
    validador++;
  } else {
    error9.innerHTML = `<i style="color:red">*Não deixe de preencher este campo!</i>`;
  }

  if (seletor10 == "1") {
    answerA++;
    validador++;
  } else if (seletor10 == "2") {
    answerB++;
    validador++;
  } else if (seletor10 == "3") {
    answerC++;
    validador++;
  } else {
    error10.innerHTML = `<i style="color:red">*Não deixe de preencher este campo!</i>`;
  }

  //validando para que nenhum campo não fique preenchido

  //validando o perfil de acordo com as respostas acumuladas
  if (validador < 9) {
    alert("Lembre-se de assinalar todas opções!");
    diversificadoDiv.style.display = "none";
    conservadorDiv.style.display = "none";
    agressivoDiv.style.display = "none";
  } else {
    if (answerA > answerB && answerA > answerC) {
      conservadorDiv.style.display = "block";
      agressivoDiv.style.display = "none";
      diversificadoDiv.style.display = "none";
    } else if (answerB > answerA && answerB > answerC) {
      diversificadoDiv.style.display = "block";
      conservadorDiv.style.display = "none";
      agressivoDiv.style.display = "none";
    } else if (answerC > answerA && answerC > answerB) {
      agressivoDiv.style.display = "block";
      conservadorDiv.style.display = "none";
      diversificadoDiv.style.display = "none";
    } else if (answerA == answerB) {
      conservadorDiv.style.display = "block";
      diversificadoDiv.style.display = "none";
      agressivoDiv.style.display = "none";
    } else if (answerC == answerB) {
      diversificadoDiv.style.display = "block";
      conservadorDiv.style.display = "none";
      agressivoDiv.style.display = "none";
    } else {
      conservadorDiv.style.display = "block";
      agressivoDiv.style.display = "none";
      diversificadoDiv.style.display = "none";
    }
  }
}
