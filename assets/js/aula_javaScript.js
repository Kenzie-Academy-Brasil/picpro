

//VARIAVEIS
let nome = "Hudson Carolino"
let pessoa1 = "Amanda"

const idade = 10

// NUMEROS 
let numero1 = 400
let numero2 = 10
//let resultado  = numero1+numero2


//TIPOS DE DADOS 
//strings 

let primeiroNome  = "Hudson"
let segundoNome   = "Gabriel"

//INTEIROS
let primeiroNumero = 10
let segundoNumero  = 30

//BOLEANOS 
let verdadeiro = true 
let falso      = false

//Tipos de dados ⇒ Objetos

//ARRAY 
let listaNomes = []
listaNomes.push("Hudson")

let listNumeros = [1,2,34,5,6,3,45,6]

//OBJETO
const amanda = {
    nome:"Amanda",
    telefone:"0000000",
    cpf:"1082664945",
    cidade:"Curitiba",
}

const hudson = {
    nome:"Hudson",
    telefone:"0000000",
    cpf:"1082664945",
    cidade:"São Paulo",
}

//Operadores básicos
//SOMA          => +
//SUBTRAÇÃO     => -
//DIVISÃO       => /
//MULTIPLICAÇÃO => *
//MAIS IGUAL    => +=
//MENOS IGUAL   => -=

let numero = 1

numero = numero + 1
numero += 1
numero += 1
numero += 1

//Booleanos e comparações
//MAIOR 10 > 10         => FALSE
//MENOR 1 < 10          => TRUE 
//IGUALDADE 10 == 10    => TRUE 
//DIFERENTE 10 !== 12   => TRUE 
//VERIFICA IGUALDADE E TMABÉM O TIPO DE DADO (===) "10" === 10 => FALSE 


//Condicionais (if/else)

const amanda2 = {
    nome:"Amanda",
    idade:17,
    cidade: "São Paulo"
}

//&& (E)  AS DUAS VERIFICAÇÕES PRECISAM SER VERDADEIRAS
//|| (OU) QUALQUER UMA PRECISA SER VERDADEIRA 

// if(amanda2.idade >= 18){
//     console.log("Essa pessoa atingiu a maior idade")
   
//     if(amanda2.cidade == "Curitiba"){
//         console.log("Cidade verificada")
//     }else{
//         console.log("Cidade não verificada")
//     }
    
// }else{
//     console.log("Essa pessoa não atingiu a maior idade")
// }

//FUNÇÕES NO JAVASCRIPT 

//DECLARANDO
function soma(num1,num2){
   
   console.log(num1 + num2)
}
//CHAMANDO FUNÇAO
//soma(23,10)

// function verificarMaiorIdade(idade){
//     if(idade >= 18){
//          console.log("Maioridade")
//     }else{
//         console.log("Menoridade")
//     }
// }

// verificarMaiorIdade(40)


function divisao(num1, num2){

    return num1/num2

}
let resultado = divisao(2,4)



//Estrutura de repetição 

//let filaAtendimento = ["Hudson", "Vitor", "Guilherme", "Amanda", "Maria", "Daniel","Gabriel"]



//PARA
// for(let i = 0; i < filaAtendimento.length; i = i + 1){

//     //console.log(filaAtendimento[i])
// }


//**************************/
//   DOM - MODELO DE OBJETO DO DOCUMENTO
//**************************/

//document => DOCUMENTO HTML
//querySelector => SELETOR DE ELEMENTO

//let divPessoa = document.querySelector(".pessoa")

let divPessoa = document.querySelector(".pessoa")


//let filaAtendimento = ["Hudson", "Vitor", "Guilherme", "Amanda", "Maria", "Daniel","Gabriel"]
// for(let i = 0; i < filaAtendimento.length; i = i + 1){
    
    
//     let div = document.createElement("div")
//     div.innerText = filaAtendimento[i]

//     //divPessoa.appendChild(div)
  
// }



//AULA DE DOM 
//SELETORES
//const button = document.querySelector()
//const button = document.querySelectorAll()
//const button = document.getElementById()

//CRIANDO ELEMENTOS NO JAVASCRIPT
const body      = document.querySelector("body")
const tagButton = document.createElement("button")
tagButton.innerText = "Extrato 2"

//body.appendChild(tagButton)

//CRIANDO LISTA DE NOMES
let filaAtendimento = ["Hudson", "Vitor", "Guilherme", "Amanda", "Maria", "Daniel","Gabriel"]

const lista = document.querySelector(".listaNomes")

//para         //condição                   //incremento
for(let i = 0; i < filaAtendimento.length; i++){
   
    //CRIANDO UM LI 
    const liNome = document.createElement("li")
    
    //ALIMENTO ESSE LI COM CADA NOME
    liNome.innerText = filaAtendimento[i]
    
    //lista.appendChild(liNome)

}



//EVENTOS 


//1 SELECIONAR INPUT **
    //A) PEGAR O VALOR DO CAMPO  **

//2 ADICIONAR UM EVENTO NO BOTÃO/CLIQUE  **
//3 GUARDAR O VALOR EM ALGUM LUGAR  **
//4 SELECIONAR A LISTA **
//5 CRIAR UM LI (ITEM DA LISTA)
//6 ALIMENTAR COM O VALOR DO INPUNT 
//7 JOGAR ELE PARA DENTRO DA LISTA

//SELECIONANDO BUTTON DO HTML
const btnAdicionar = document.querySelector(".btnAdicionar")

//SELECIONANDO A LISTA DE NOMES 
const ol = document.querySelector("ol")

//INTERCEPTANDO EVENTO NO BUTTON
btnAdicionar.addEventListener("click", pegarValores)

//FUNÇÃO QUE VAI EXECUTAR
function pegarValores(event){
    //console.log(event)
    
    //SELECIONANDO INPUT 
    const inputTexto = document.querySelector(".inputTexto")

    //PEGANDO O VALOR DO INPUT 
    const valorInput  = inputTexto.value 

    //CRIANDO LI PARA ALIMENTAR A LISTA 
    const li = document.createElement("li")
    
    //ALIMENTAR LI COM O VALOR DO CAMPO
    li.innerText = valorInput

    //ADICIONANDO O LI COM AS INFORMAÇÕES NA LISTA
    ol.appendChild(li)
    

}



