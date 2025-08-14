/* Vamos entender Operadores:
-> Os operadores JavaScript são usados para atribuir valores, comparar valores, executar operações aritméticas e muito mais.

São os sinais que usamos: + - * / = ++ -- += && || etc...

São separados em 6 "categorias":

1) Operadores Artítmeticos (matemáticos)
2) Operadores de Atribuição
3) Operadores de Sequência
4) Operadores de Comparação
5) Operadores Condicional (Ternário)
6) Operadores Lógicos

*/

var idade, eleitor, resultado;

idade = 20;
eleitor = (idade >= 18) ? "Sim, eleitor" : "Não, eleitor";

alert('A resposta é: ' + eleitor + '. A idade dele(a) é de ' + idade + ' anos.');

resultado = (idade > 18 && idade < 65) ? "Pode votar" : "Não pode votar";

alert(resultado);