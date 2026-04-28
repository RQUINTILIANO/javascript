/**
 * Estudo do laço while | tabuada
 * @author Rafaela Quintiliano 
 */
9
const prompt = require ('prompt-sync')()

let tabuada
let i = 1

console.clear()
console.log ("Tabuada")
tabuada = Number(prompt("Digite a tabuada desejada:  "))

while (i < 11) {
    console.log (`${tabuada} * ${i} = ${tabuada * i}`)
    i++
}