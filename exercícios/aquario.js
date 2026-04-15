/**
 *  Cálculo do volume de um aquário:
 * @author Rafaela Quintiliano
 */


const prompt = require('prompt-sync')()
//variaveis
let comprimento, largura, altura
console.log("Volume de um aquario")

//entrada
altura = Number(prompt("Digite a altura:     "))
largura = Number(prompt("Digite a largura:    "))
comprimento = Number(prompt("Digite o comprimento:    "))

//processamento
volume =  (comprimento * altura * largura)/1000
console.log(`volume: ${volume}`)
