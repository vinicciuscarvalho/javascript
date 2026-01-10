/*
SINTAXE

for (inicialização; condição; contador) {
    // bloco de código a ser executado
}

*/
console.log("Inicio do loop")

for (let i = 0; i <= 10; i++) {

    console.log(i)
}

console.log("Fim do loop")

for (let x=0; x < 100; x++) {
    if (x%2 == 0) {
        console.log(x + " é par")
    }
    else {
        console.log(x + " é ímpar")
    }
}

console.log("Fim do programa")