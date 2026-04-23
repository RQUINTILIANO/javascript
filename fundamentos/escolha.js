/**
 * exemplo de uso da estrutura switch case
 * @author Rafaela Quintiliano
 */

const prompt= require ('prompt-sync')()

console.clear
console.log ("Menu de opções")
console.log("")
console.log("1. Cadastro de cliente")
console.log("2. Cadastro de produto")
console.log("3. Relatórios")

let opcao = Number (prompt("Digite a opção desejada:  "))

//Uso da estrutuda switch case para tratamento do valor digitado
// Obs:Essa estrutuda ceita variaveis numericas do tipo:numeros inteiros e caracteres únicos, a opção, dentor da estrutura o defaut é opcional

switch (opcao) {
     case 1:
     console.clear () 
     console.log ("Tela de cadastro de cliente")
    break
     case 2: 
     console.clear () 
     console.log ("Tela de cadastro de produtos")
    break
     case 3: 
     console.clear () 
     console.log ("impressão dxe relatórios")
    break

    default:
        console.clear()
        console.log("Opção invalida")
    break
}
