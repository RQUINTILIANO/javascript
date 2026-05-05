/**
 * Calculadora JS - Exemplo de uson de funções 
 * @author Rafaela Quintiliano
 */

//Importação de biblioteca(Pacote)
const prompt = require('prompt-sync')()

//Variáveis Globais
let num1, num2, opcao, resultado

//Funções das operações ( Com parametros ). Recomendado antes da função principal.

function somar(num1, num2) {
    return num1 + num2
}
function subtrair(num1, num2) {
    return num1 - num2
}
function multiplicar(num1, num2) {
    return num1 * num2
}
function dividir(num1, num2) {
    //validação
    if (num1 === 0) {
        console.log("Erro! Impossível dividir por  0")
    } else {
        return num1 / num2
    }
}
function raizQuadrada(num1) {
    return Math.sqrt(num1);
}


//==============================================
//Função Principal ( O que chamamos de --main-- )
function iniciarCalculadora() {
    //Gerando um loop infinito (UX)
    do {
        mostrarMenu()
        //Escolher opção
        opcao = Number(prompt("Escolhe uma opção:  "))
        switch (opcao) {
            case 0:
                console.log("Calculadora Encerrada.")
                return //encerra o loop infinito
            case 1:
                num1 = Number(prompt("Digite o primeiro número:  "))
                num2 = Number(prompt("Digite o segundo número:  "))
                resultado = somar(num1, num2)
                break
            case 2:
                num1 = Number(prompt("Digite o primeiro número:  "))
                num2 = Number(prompt("Digite o segundo número:  "))
                resultado = subtrair(num1, num2)
                break
            case 3:
                num1 = Number(prompt("Digite o primeior número:   "))
                num2 = Number(prompt("Digiti o segundo número: "))
                resultado = multiplicar(num1, num2)
                break
            case 4:
                num1 = Number(prompt("Digite o primeiro número:  "))
                num2 = Number(prompt("Digiti o segundo número: "))
                resultado = dividir(num1, num2)
                break
            case 5:
                num1 = Number(prompt("Digite o Valor: "))
                resultado = raizQuadrada(num1)
                break
            default:
                console.log("Opção invalida")
                prompt("Precione [Enter] para continuar")
                continue//continue dentro do switch case
        }
        //Exibir resultado
        console.log(`Resultado: ${resultado.toFixed(2)}`)
        prompt("Pressione [ENTER] para continuar.")

    } while (true)
}

//Função mostrar menu
function mostrarMenu() {
    console.clear()
    console.log("===Calculadora JS===")
    console.log("1. Somar")
    console.log("2.Subtrair")
    console.log("3.Multiplicar")
    console.log("4.Dividir")
    console.log("5.Raiz Quadrada")
    console.log("0. Sair")
}
//Até aqui ao rodar o código não acontecerá nada, pois o código precisa ser chamado, como faremos a seguir.

//Executar função principal
iniciarCalculadora()