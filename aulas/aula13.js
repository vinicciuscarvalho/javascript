/*
Como funciona?
if(Expressão Lógica) {
    SE VERDADEIRO, IRÁ EXECUTAR O CÓDIGO DESSE LOCAL
}

else if (Expressão Lógica) {
    SE OUTRA ALTERNATIVA ALÉM DA PRIMEIRA, IRÁ EXECUTAR O CÓDIGO DESSE LOCAL
}

else{
    SE FALSO, IRÁ EXECUTAR O CÓDIGO DESSE LOCAL
}
*/

let num=5
let energia=100
let clima="sol"

// Exemplo 1
if(num > 10) {
    console.log("Numeral maior que 10")
}
else if (num > 5){
    console.log("Numeral está entre 6 e 10")
}
else {
    console.log("Numero menor ou igual a 5")
}

// Exemplo 2

if (energia > 70 && clima === "sol") {
    console.log("vou á praia")
} 

else {
    console.log("vou ficar em casa")    
}
console.log("Fim do Programa")