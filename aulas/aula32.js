const cursosTodos = [...document.getElementsByClassName("curso")]
const cursosC1 = [...document.getElementsByClassName("c1")]
const cursosC2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = document.getElementsByClassName("curso")[2] // pega o elemento específico [2], e executa o comando

console.log(cursosTodos)
console.log(cursosC1)
console.log(cursosC2)
console.log(cursoEspecial)


cursosC1.map((el)=> {
    el.classList.add("destaque")
})

// cursosC2.map((el)=> {
//     el.classList.add("destaque")
// })


// cursoEspecial.classList.add("destaque")
