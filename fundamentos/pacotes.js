/**
 * Estudo dos pacotes npn no javaScrip
 * @author Rafaela Quintiliano
 */





//A linha abaixo importa o pacote instalado
// O pacote precisa estar instalado

const color = require ('colors') 
const { useSyncExternalStore } = require('react')

console.clear ()
console.log("Hello Word".blue)
console.log("Rafaela Quintiliano".pink)

//No JS nao temos entrada de dados , para resiolver o problema devemos instalar um pacote.
//npm i prompt - useSyncExternalStore
//na importação do pacote: const prompt = ('require-sync')()

//Entrada de dados: JS entende que recebeu uma string
//no js
//para efetuar calculos numéricos é necessário converter a entrada de dados para number: Number()