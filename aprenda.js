//Função para o efeito de maquina de escrever
function typeWriter(elemento){
    //split: divide uma string em indices de uma lista(array)
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    //forEach permite executar uma função para cada item de um array
    textoArray.forEach((letra,i)=>{
        setTimeout(() => elemento.innerHTML += letra, 75 * i)
    });
}
//atribuindo o h1 a tag titulo
const titulo = document.querySelector('h1');
//ultilizando o título como parâmetro da função
typeWriter(titulo);

//função para mostrar os livros de acordo com o perfil
let valorLivro = document.getElementById("livros").value;
function mostrar(){
    if(valorLivro == 1){
        
    }else if(valorLivros == 2){

    }else{
        
    }
}