const objs=document.getElementsByTagName("div")

let num = [10,20,30,40,50]

// Cada FOR abaixo irá retornar o mesmo resultado

// FOR IN -> Retorna o índice/chave ou "posição" (string ou número)
for (n in num) {
    console.log(num[n])
}

// FOR OF -> Retorna o valor (elementos) em si, dentro do array
for (n of num) {
    console.log(n)
}

// for (let i=0; i < num.length; i++) {
//     console.log(`A posição ${i} tem o valor ${num[i]}`)
// }   

for (o of objs) {
    console.log(o.innerHTML="Alterado pelo FOR IN")
}

for (o in objs) {
    console.log(o)
}