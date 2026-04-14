/**
 * calculo da media de duas notas
 * exemplo de uso da biblioteca prompt-sync
 * @author Rafaela Quintiliano
 */

//importar pacote
const prompt = require('prompt-sync')()



//variáveis
let disciplina, nota1, nota2

console.clear()
console.log ("calculo da média de duas notas")



//entrada de dados
disciplina = prompt("Digite seu nome da disciplina:    ")
// console.log(disciplina)
// console.log(typeof(disciplina))
//Number converte para o tipo numerico
nota1 = prompt("Digite nota 1")
// console.log(nota1)
// console.log(typeof(nota1))
nota1 = prompt("Digite nota 2")
// console.log(nota2)
// console.log(typeof(nota2))


//processamento
media = (nota1 + nota2) /2

//saída
console.log(`Média:${media.toFixed(1)}`)
//toFixed - para casas decimais