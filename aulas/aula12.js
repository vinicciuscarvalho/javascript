/* Spread Operator (...) - espalhamento de elementos de um array
    Permite que um elemento iterável, como um array ou string,
    seja expandido em locais onde zero ou mais argumentos (para chamadas de função)
    ou elementos (para arrays literais) são esperados.

*/

let n1=[10,20,30]
let n2=[11,22,33,44,55]
let n3

// console.log("n1: " + n1)
// console.log("n2: " + n2)
console.log("n3: " + n3) 

const soma=(v1,v2,v3)=>{
    return v1+v2+v3
}

let valores=[1,5,4,10]

console.log(soma(...valores)) // espalha os valores do array como argumentos individuais

const objs1=document.getElementsByTagName("div")
const objs2=[...document.getElementsByTagName("div")] // converte HTMLCollection em array usando spread operator
console.log(objs1)
console.log(objs2)