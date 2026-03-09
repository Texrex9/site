var pessoa = require("./commons/Pessoa");
var soma = require("./commons/Soma");
var imposto = require("./commons/CalculoImposto")
var calculadora = require("./commons/Calculadora")

jose = pessoa();

//console.log(JSON.stringify(jose));
//console.log(soma(3,5));


console.log("A soma dos números é: " + calculadora.calcular(10, 35, "+"));
console.log("A subtração dos números é: " + calculadora.calcular(50, 8, "-"));
console.log("A multiplicação dos números é: " + calculadora.calcular(7, 6, "*"));
console.log("A divisão dos números é: " + calculadora.calcular(40, 5, "/"));
console.log("Divisão por zero: " + calculadora.calcular(10, 0, "/"));
console.log("Operação inválida: " + calculadora.calcular(10, 5, "%"));

//console.log('Valor do produto com imposto: ' + imposto.adicionar(10));
//console.log('Valor do imposto: ' + imposto.valor(10));
//console.log('Taxa do Imposto: ' + imposto.taxa);