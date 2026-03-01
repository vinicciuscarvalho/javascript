/*
SINTAXE DO MAP

array = [1, 2, 3, 4, 5]

const novoArray = array.map((elemento, indice, arrayOriginal) => {
return elemento * 2
})

console.log(novoArray)

novoArray = [2, 4, 6, 8, 10]

*/

const el = document.getElementsByTagName('div')
const val = Array.prototype.map.call(el,({innerHTML}) => innerHTML)
console.log(val)