// && -> and e
// || -> or ou
// ! -> not não

/* Tabela verdade AND (&&)
true && true = true
true && false = false
false && true = false
false && false = false
*/

/* Tabela verdade OR (||)
true || true = true
true || false = true
false || true = true
false || false = false
*/

/* Tabela verdade NOT (!)
!true = false
!false = true
*/

/* Exemplos
const a = true;
const b = false;
console.log(a && b); // false
console.log(a || b); // true
console.log(!a);    // false
console.log(!b);    // true

Combinação de operadores lógicos
const c = true;
const d = false;
console.log((a && c) || (b && d));
*/

let n1, n2, n3, n4
n1 = 10
n2 = 5
n3 = 15
n4 = 2

console.log ((n1>n2)&&(n1>n3))

console.log ((n1>n2)||(n1>n3))

console.log (!(n1>n2))

console.log (((n1>n2)&&(n1>n3))||((n4<n2)&&(n4<n3)))

if(n1>n2){
    console.log(n1 + " maior que " + n2)
}
else{
    console.log(n1 + " menor que " + n2)
}

if(!(n1>n2) && (n3>n4)){
    console.log("Verdadeiro")
}
else{
    console.log("Falso")
}