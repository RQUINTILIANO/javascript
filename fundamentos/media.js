/**
 * Estudo da estrutura de controle if else
 * calculo da media 
 * @author Rafaela Quintiliano
 */
//importação de pacotes
const color = require (`colors`)
const promp= require ('prompt-sync')()
//variaveis
let nota1, nota2
console.clear ()
console.log ("Calculo da média")
//entrada
nota1 = Number(promp("Digite a nota1:  "))
nota2 = Number(promp("digite a note2:  "))
//processamento
media = (nota1+ nota2)/2
//saída
console.log(`Média: ${media.toFixed(1)}`)
//uso da estrutura if else para deteminar se o aluno está aprovado ou reprovado
if (media < 5) {
    console.log("Reprovado".red)
} else {
    console.log("aprovado".cyan)   
}