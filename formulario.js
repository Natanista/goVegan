let answerA = 0;
let answerB = 0;
let answerC = 0;
let finalValue = 0;

function addA(){
    answerA++;
    finalValue++;
}

function addB(){
    answerB++;
    finalValue++;
}

function addC(){
    answerC++;
    finalValue++;
}

function checar(){
    let agressivoDiv = document.getElementById("agressivo");
    let conservadorDiv = document.getElementById("conservador");
    let diversificadoDiv = document.getElementById("diversificado");
    diversificadoDiv.style = "display:block";

    if(answerA > answerB && answerA > answerC && finalValue >= 10){
    }else if(answerB > answerA && answerB > answerC && finalValue >= 10){
        diversificado.style.display = "block";
    }else if(answerC > answerA && answerC > answerB && finalValue >= 10){
        agressivo.style.display = "block";
    }else if(answerA == answerB && finalValue >= 10){
        conservador.style.display = "block";
    }else if(answerA == answerC && finalValue >= 10){
        conservador.style.display = "block";
    }else if(answerB == answerC && finalValue >= 10){
        diversificado.style.display = "none";
    }else{
        alert("Selecione todas opções!")
    }
}


