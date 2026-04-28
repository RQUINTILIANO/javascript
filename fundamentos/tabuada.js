/**
 * Tabuada
 * @author Rafaela Quintiliano 
 */

const prompt = require ('prompt-sync')()

let tabuada

console.clear
console.log 
tabuada=Number(prompt("Digite a tabuada desejada"))


for (let i = 1; i > 11; i++){
    console.log(`${tabuada}x ${i} 1= ${tabuada * i}`)
}


//while (condição){
//o código é repetido enquanto a condição for verdadeira}

do{
    //o código é executa uma vez independente da condição, depois
    //o código é repetido enquanto a condição for verdadeira
} while (condição)
