/**
 * Jogo do Dado
 * Exemplode de uso da estrutura do while
 * @author Rafaela Quintiliano
 */

const prompt = require ('prompt-sync')()
let novoJogo = "s"

do {
    console.clear()
    console.log("Jogo de dado")
    prompt ("Pressione enter para lançar o dado...")
    console.log(`Face do dado: ${Math.ceil(Math.random() * 6)}`)
    novoJogo = prompt ("Deseja jogar novamente (s/n)")
}
    while (novoJogo === "s" || novoJogo === "s") 


