/**
 * Calculo da gasoline ou alcool
 */
const prompt = require('prompt-sync')()
//variaveis
let gasolina, etanol
console.clear
console.log("Gasolina ou Alcool?")

//entrada
gasolina = Number(prompt("digite valor da gasolina:  "))
etanol = Number(prompt("digite valor do etanol:  "))


//processamento
if (etanol < 0.7 * gasolina) {
    console.log("Abasteça com etanol!")

} else {
    console.log("Abasteça com gasolina!")
}