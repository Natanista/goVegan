let answerA = 0;
let answerB = 0;
let answerC = 0;

function addA(){
    answerA++;
}

function addB(){
    answerB++;
}

function addC(){
    answerC++;
}

function checar(){
    if(answerA > answerB && answerA > answerC){
        alert("A");
    }else if(answerB > answerA && answerB > answerC){
        alert("B");
    }else if(answerC > answerA && answerC > answerB){
        alert("C");
    }else{
        alert("error")
    }
}