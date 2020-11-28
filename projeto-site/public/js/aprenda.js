let usuario;
    
verificar_autenticacao();



//função para mostrar os livros de acordo com o perfil
combo.value = "0";

function mostrar() {
  let comboValue = document.getElementById("combo").value;
  let conservador = document.getElementById("conservador");
  let diversificado = document.getElementById("diversificado");
  let agressivo = document.getElementById("agressivo");

  if (comboValue == "1") {
    diversificado.style.display = `none`;
    conservador.style.display = `block`;
    agressivo.style.display = `none`;
  } else if (comboValue == "2") {
    diversificado.style.display = `block`;
    conservador.style.display = `none`;
    agressivo.style.display = `none`;
  } else if (comboValue == "3") {
    agressivo.style.display = `block`;
    conservador.style.display = `none`;
    diversificado.style.display = `none`;
  } else {
    conservador.style.display = `none`;
    agressivo.style.display = `none`;
    diversificado.style.display = `none`;
  }
}


let i = 0;
let txt = "Qual o seu perfil de investidor?"; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("campo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();