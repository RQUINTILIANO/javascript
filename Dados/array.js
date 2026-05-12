/**
 * Estrutura de dados array (vetor)
 * @author Rafaela Quintiliano
 * . 
 *
 */

// A linha a baixo cria um array(vetor)
let alunos = ['Juan', 'Maria', 'José', 'ana']
console.clear()
console.log('==================ARRAY==================')

console.log(alunos)
console.log(`Um array do tipo: ${typeof (alunos)}`)


// Obtendo o tamanho do array (length)
console.log(`Tamanho do arrya ${alunos.length}`)


// Adicionando dados de uma array (CRUD create)
console.log("")
console.log('==================CRUD create==================')
// O método push adiciona de forma segura u, dado ao array
alunos.push('Adelson')
console.log(alunos)
console.log(`Tamanho do arrya ${alunos.length}`)


// Adicionando dados de uma array (CRUD read)
console.log("")
console.log('==================CRUD read==================')
console.log(alunos)
console.table(alunos)
// Exibindo um dado especifico do array
console.log(`Aluno [2]: ${alunos[2]}`)


// Adicionando dados de uma array (CRUD update)
// Usar o índice paraq alterar um dado do vetor
console.log("")
console.log('==================CRUD update==================')
alunos[3] = 'Ana'
alunos[4] = 'Adeilson'
console.table(alunos)


// Adicionando dados de uma array (CRUD delete)
console.log("")
console.log('==================CRUD delete==================')
// Delete exclui de forma segura um dados do array
delete alunos[2]
console.table(alunos)
console.log(`Tamanho do arrya ${alunos.length}`)

alunos.push('Robson')
console.table(alunos)
console.log(`Tamanho do arrya ${alunos.length}`)


console.log('')
console.log('-----------------------------------------------')
console.log('Percorrendo um array')

// Percorrendo um array
//          [0][1][2][3][4][5]
let notas = [3, 8, 5, 9, 2, 7]
console.log(notas)
console.table(notas)

//  Percorrendo um array com uso do laço for
console.log('Laço for')
for (let i = 0; i < notas.length; i++) {
    console.log(notas[i])
}


// Simplificação do laço for (for each)
console.log('')
console.log('Laço for each')

notas.forEach((notas) => {
    console.log(notas)
})


console.log('')
console.log('-----------------------------------------------')
console.log('Manipulação e filtragem de dados')
console.log('')
console.log('Exemplo 1: Adicionar 1 ponto as notas dos alunos')

let notasAtualizadas = notas.map((na) => {
    return (na + 1)
})
console.log(`Notas originais: ${notas}`)
console.log(`Notas atualizadas: ${notasAtualizadas}`)


console.log('')
console.log('Exemplo 2: conversão de um sistema de notas(números) para letras(caracteres)')

/*
    NA - Não atendeu (nota < 5)
    PA - Parcialmente atendido (nota entre 5 e 7)
    A - Atendeu (nota > 7)
 
*/

let notasConvertidas = notas.map((nc) => {
    if (nc < 5) {
        return 'NA'
    } else if (nc > 7) {
        return 'A'
    } else {
        return 'PA'
    }
})

console.log(`Notas originais: ${notas}`)
console.log(`Notas convertidas: ${notasConvertidas}`)

//nova estrutura de dados 
let alunosDC = [
    {
        Nome: "Bruce",
        idade: 43,
        bolsista: false
    },
    {
        Nome: "Clark",
        idade: 45,
        bolsista: false
    },
    {
        Nome: "Diana",
        idade: 36,
        bolsista: false
    },
    {
        Nome: "Berry",
        idade: 23,
        bolsista: false
    },
]
console.log("")
console.log("Estrutura de dados usando array")
console.log("")
console.log(alunosDC)
console.table(alunosDC)

//filtros
console.log("")
console.log("Filtros: Exemplo 1: Alunos bolsistas")
console.log(alunosDC.filter((b) => {
return b.bolsista === true
}))

console.log("")
console.log("Alunos com idade superior a 40 anos")
console.log(alunosDC.filter((i) => {
return i.idade > 40
}))

console.log("")
console.log("Filtros:Exemplo 3: Ordenar os alunos")
//Dica: criar uma cópia de array original ára não modificar o index
//index [ ...alunosDC]
let alunosOrdenasdos  = [...alunosDC] //criar uma cópis
alunosOrdenasdos.sort((a,z) => {
    return (a.Nome. localeCompare(z.Nome))
})
console.table(alunosOrdenasdos)