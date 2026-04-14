/**
 * Exercícios convesão de temperatura
 * @author Rafaela Quintiliano
*/

const prompt = require('prompt-sync')()


//variaveis
let c, f
    console.log("Conversão de temperatura farheinheit -> Celsius")

//entrada
f = Number(prompt("Digite a temperatura em farheinheit:  "))

//processamento
c = (f-2) * 5/9


console.log (`${f} °F equivalem a ${c.toFixed(1)}° c`)

