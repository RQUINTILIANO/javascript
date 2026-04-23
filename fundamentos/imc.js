/**
 * Calculo do imc
 * @author Rafaela Quintiliano
 */
const prompt = require('prompt-sync')()

let peso, altura, imc

console.clear ()
console.log("Calculo do IMC:      ")

peso= Number(prompt("Digite o seu peso:     "))
altura= Number(prompt("Digite a sua altura:     "))

imc= peso/ (altura * altura)
console.log(`imc: ${imc.toFixed(2)}`)

if (imc <18.5) {
    console.log ('peso baixo')
} else if (imc<25){
    console.log ('peso normal')
} else if (imc<30) {
    console.log ('sobrepeso')
} else if (imc<35) {
    console.log ('obesidade 1')
} else if (imc<40) {
   console.log ('obesidade 2')  
} else if (imc<45) {
    console.log ('obesidade 3')
}
