/**
 * Estudo das variáveis em JavaScript
 * @author [Rafaela Quintiliano]
 */

console.clear()
console.log('Estudo das variáveis em JavaScript')
console.log('') 

// a linha a baixo mostra uma string no console 
console.log('String')

// a linha a baixo cria uma variavel do tipo string e mostra seu tipo no console
let nome = 'Rafaela'
console.log(nome)
console.log(typeof(nome))

console.log('')

console.log('variavel do tipo Number')
let idade = 20
console.log(idade)
console.log(typeof(idade))

console.log('')

let peso = 75.5
console.log(peso)
console.log(typeof(peso))

console.log('')

let altura = 1.83
console.log(altura)
console.log(typeof(altura))


let vip = true
console.log(vip)
console.log(typeof(vip))





console.log('----------------------------')
console.log(' -     Ficha do aluno     - ')
console.log('----------------------------')

// alinha abaixo concatena (uniao) um texto com o conteudo da variavel nome e mostra no console
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Peso: ${peso}kg`)
console.log(`Altura: ${altura}m`)
console.log(`Vip: ${vip}`)
console.log(`FCM: ${208 - (0.7 * idade)}bpm`)
// .toFixed (2)formata o resultado em duas casa decimais
console.log(`IMC: ${(peso / (altura * altura)).toFixed(2)}`)
console.log('-----------------------------')

//git status sinaliza o que mudei