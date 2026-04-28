/**
 * Desafio JokenPo
 * @author Rafaela Quintiliano
 */

//Importação de pacote 
const prompt = require('prompt-sync')()

//Variáveis
let jogador, computador

//UX
do {
    console.clear()
    console.log("Teste//")

    console.log("       __    ______    __  ___  _______ .__   __. .______     ______   ")
    console.log("      |  |  /  __  \  |  |/  / |   ____||  \ |  | |   _  \   /  __  \  ")
    console.log("      |  | |  |  |  | |  '  /  |  |__   |   \|  | |  |_)  | |  |  |  | ")
    console.log(".--.  |  | |  |  |  | |    <   |   __|  |  . `  | |   ___/  |  |  |  | ")
    console.log("|  `--'  | |  `--'  | |  .  \  |  |____ |  |\   | |  |      |  `--'  | ")
    console.log(" \______/   \______/  |__|\__\ |_______||__| \__| | _|       \______/  ")
    console.log("")

    //Lógica do jogador

    console.log("1.Pedra")
    console.log("2.Papel")
    console.log("3.Tesoura")
    jogador = Number(prompt("Digite aopção desejada:  "))
    console.log("")

    switch (jogador) {
        case 1:
            console.log("Jogador escolheu pedra")
            break;
    }
    switch (jogador) {
        case 1:
            console.log("Jogador escolheu papel")
            break;
    }
    switch (jogador) {
        case 1:
            console.log("Jogador escolheu Tesoura")
            break;
        default:
            console.log("Opção Invalida")
            break;
    }

    //  Lógica do computador 

    //
    computador = Math.ceil(Math.random() * 3) // 1, 2 ou 3

    switch (computador) {
        case 1:
            console.log("Computador escolheu pedra")
            break;
    }
    switch (jogador) {
        case 1:
            console.log("Computador escolheu papel")
            break;
    }
    switch (jogador) {
        case 1:
            console.log("Computador escolheu Tesoura")
            break;
    }

    //Lógica para determinar o vencedor ou declarar empate
    if (jogador === computador) {
        console.log("EMPATE")
    } else if ((jogador === 1 && computador === 3) || (jogador === 2 && computador === 1) || (jogador === 3 && computador === 2)) {
        console.log ("Jogador venceu")
    } else {
        console.log("Computador venceu")
    }
    novoJogo = prompt ("Deseja jogar novamente (s/n)")
} while (novoJogo === "s" || novoJogo === "s") 
