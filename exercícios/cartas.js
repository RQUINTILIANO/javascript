/**
 * Cartas de baralho sorteio
 * @author Juan Rozas
 */
 
let jogarNovamente = 'n'
do {
    const prompt = require('prompt-sync')()
    console.clear()
           
    let nipes = ['♠', '♥', '♦', '♣']
 
    let faces = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
 
    console.log('Sorteio de uma carta ( ♠ ♥ ♦ ♣ )')
    prompt('Pressione a tecla enter para sortear uma carta: ')
 
    let nipe = nipes[Math.floor(Math.random() * 4)]// sorteia entre 0 1 2 3
    let face = faces[Math.floor(Math.random() * 13)]// sorteia entre 0 1... 13
 
    console.log(`${face}${nipe}`)
 
    jogarNovamente = prompt('Deseja Jogar novamente? ')
 
}while (jogarNovamente === 'S' || jogarNovamente === 's')