/* OBJETOS
Objetos são basicamente variáveis com muitos valores dentro.

EX.: const carro = {marca:"ford", modelo:"ka", ano: 2015}

Os valores dentro de um objeto são chamados propriedades.

Objetos também podem ter métodos. Um Método é uma função colocada dentro de uma propriedade.

*/

const carro = {
    marca:"ford", 
    modelo:"ka", 
    ano: 2015,
    placa: "ABC-1234",
    buzina: function () {alert('Biiiiiiiiiiiiiiiiiiiiiii')},
    completo: function () {
        return "A marca do carro é "+this.marca+ " e o modelo é: "+this.modelo
    }
};

alert(carro.completo());