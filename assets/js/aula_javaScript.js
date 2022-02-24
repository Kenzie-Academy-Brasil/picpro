

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


let filaAtendimento = ["Hudson", "Vitor", "Guilherme", "Amanda", "Maria", "Daniel","Gabriel"]
for(let i = 0; i < filaAtendimento.length; i = i + 1){
    
    
    let div = document.createElement("div")
    div.innerText = filaAtendimento[i]

    divPessoa.appendChild(div)
  
  
}
