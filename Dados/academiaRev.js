/**
 * Sistema para gestão de academia
 * Estudo de array como estrutura de dados
 * @author Rafaela Quintiliano
 * @version 1.0
 */
const prompt = require('prompt-sync')()

let nome, idade, peso, altura, vip
let matricula = 1
let opcaoMenu, opcaoConsulta, opcaoRelatorio, busca

let alunos = []

function mainAcademia() {

    do {
        console.clear()
        console.log(" _____           _           _           __ _____")
        console.log("|  _  |___ ___ _| |___ _____|_|___    __|  |   __|")
        console.log("|     |  _| .'| . | -_|     | | .'|  |  |  |__   |")
        console.log("|__|__|___|__,|___|___|_|_|_|_|__,|  |_____|_____|")
        console.log("")
        console.log("1. Cadastrar aluno")
        console.log("2. Consultar alunos")
        console.log("3. Alterar aluno")
        console.log("4. Excluir aluno")
        console.log("5. Ficha do aluno")
        console.log("6. Relatórios")
        console.log("0. Sair")
        console.log("")

        opcaoMenu = Number(prompt("Escolha: "))

        switch (opcaoMenu) {
            case 1:
                cadastrarAluno()
                break
            case 2:
                consultarAlunos()
                break
            case 3:
                editarAluno()
                break
            case 4:
                excluirAluno()
                break
            case 5:
                gerarFichaAluno()
                break
            case 6:
                gerarRelatorios()
                break
            case 0:
                console.log("Encerrando o sistema...")
                break
            default:
                console.log("Opção inválida!")
                prompt("ENTER...")
        }

    } while (opcaoMenu !== 0)
}
function cadastrarAluno() {
    console.clear()
    console.log("=== CADASTRO DE ALUNO ===")
    console.log("")

    nome = prompt("Nome: ")
    idade = Number(prompt("Idade: "))
    peso = Number(prompt("Peso: "))
    altura = Number(prompt("Altura: "))
    vip = prompt("Aluno VIP (s/n): ")
    if (vip === "s") {
        vip = true
    } else {
        vip = false
    }

    alunos.push([
        matricula,
        nome,
        idade,
        peso,
        altura,
        vip
    ])


    console.log("")
    console.log("Aluno cadastrado com sucesso!")
    prompt("ENTER...")
}

function consultarAlunos() {
    do {
        console.clear()
        console.log("=== CONSULTA DE ALUNOS ===")
        console.log("")
        console.log("1. Buscar aluno")
        console.log("2. Listar alunos")
        console.log("0. Voltar")
        console.log("")
        opcaoConsulta = Number(prompt("Escolha: "))

        switch (opcaoConsulta) {
            case 1:
                buscarAluno()
                break
            case 2:
                listarAlunos()
                break
            case 0:
                break
            default:
                console.log("")
                console.log("Opção inválida!")
                prompt("ENTER...")
        }

    } while (opcaoConsulta !== 0)
    function buscarAluno() {
        console.clear()
        console.log("=== BUSCAR ALUNO ===")
        console.log("")
        busca = prompt("Digite o nome do aluno: ").toLowerCase()

        let encontrados = alunos.filter((a) => {
            return a[1].toLowerCase().includes(busca)
        })
        if (encontrados.length === 0) {
            console.log("")
            console.log("Aluno não encontrado.")
        } else {
            let alunoEncontrado = encontrados
                .map((a) => {
                    return {
                        Matrícula: a[0],
                        Nome: a[1],
                        Idade: a[2],
                        Peso: a[3],
                        Altura: a[4],
                        VIP: a[5]
                    }
                })
            console.table(alunoEncontrado)
        }

        console.log("")
        prompt("ENTER...")
    }
    function listarAlunos() {
        console.clear()
        console.log("=== LISTA DE ALUNOS ===")
        console.log("")

        if (alunos.length === 0) {
            console.log("Nenhum aluno cadastrado")
        } else {
            let alunosOrdenados = [...alunos]
            alunosOrdenados.sort((a, z) => {
                return a[1].localeCompare(z[1])
            })
            let listaAlunos = alunosOrdenados
                .map((a) => {
                    return {
                        Matrícula: a[0],
                        Nome: a[1],
                        Idade: a[2],
                        Peso: a[3],
                        Altura: a[4],
                        VIP: a[5]
                    }
                })
            console.table(listaAlunos)
        }

        console.log("")
        prompt("ENTER...")
    }
}
function editarAluno() {
    console.clear()
    console.log("=== ALTERAR ALUNO ===")
    console.log("")

    let buscaMatricula = Number(prompt("Digite a matrícula do aluno: "))

    let indice = alunos.findIndex((a) => {
        return a[0] === buscaMatricula
    })

    console.log("")

    if (indice === -1) {
        console.log("Aluno não encontrado")
    } else {
        console.log("Dados atuais:")
        console.log("")
        console.log(`Nome: ${alunos[indice][1]}`)
        console.log(`Idade: ${alunos[indice][2]}`)
        console.log(`Peso: ${alunos[indice][3]}`)
        console.log(`Altura: ${alunos[indice][4]}`)
        console.log(`VIP: ${alunos[indice][5]}`)
        console.log("")

        let novoNome = prompt("Novo nome: ")
        let novaIdade = Number(prompt("Nova idade: "))
        let novoPeso = Number(prompt("Novo peso: "))
        let novaAltura = Number(prompt("Nova altura: "))

        let novoVip = prompt("Aluno VIP? (s/n): ")

        if (novoVip === "s") {
            novoVip = true
        } else {
            novoVip = false
        }

        alunos[indice][1] = novoNome
        alunos[indice][2] = novaIdade
        alunos[indice][3] = novoPeso
        alunos[indice][4] = novaAltura
        alunos[indice][5] = novoVip

        console.log("")
        console.log("Dados do aluno alterados com sucesso")
    }

    console.log("")
    prompt("ENTER...")
}
function excluirAluno() {
    console.clear()
    console.log("=== EXCLUIR ALUNO ===")
    console.log("")
    let buscaMatricula = Number(prompt("Digite a matrícula do aluno: "))

    let indice = alunos.findIndex((a) => {
        return a[0] === buscaMatricula
    })

    console.log("")


    if (indice === -1) {
        console.log("Aluno não encontrado")
    } else {
        console.log("Aluno encontrado:")
        console.log("")
        console.log(`Matrícula: ${alunos[indice][0]}`)
        console.log(`Nome: ${alunos[indice][1]}`)
        console.log(`Idade: ${alunos[indice][2]}`)
        console.log(`Peso: ${alunos[indice][3]}`)
        console.log(`Altura: ${alunos[indice][4]}`)
        console.log(`VIP: ${alunos[indice][5]}`)
        console.log("")

        let confirmar = prompt("Confirmar exclusão? (s/n): ").toLowerCase()
        if (confirmar === "s") {

            delete alunos[indice]
            console.log("")
            console.log("Aluno excluído com sucesso!")
        } else {
            console.log("")
            console.log("Exclusão cancelada")
        }
    }
    console.log("")
    prompt("ENTER...")
}
function gerarFichaAluno() {
    console.clear()
    console.log("=== FICHA DO ALUNO ===")
    console.log("")

    let buscarMatricula = Number(prompt("Digite a matrícula do aluno: "))
    let indice = alunos.findIndex((a) => {
        return a[0] === buscarMatricula
    })
    if (indice === -1) {
        console.log("Aluno não encontrado")
    } else {
        nome = alunos[indice][1]
        idade = alunos[indice][2]
        peso = alunos[indice][3]
        altura = alunos[indice][4]
        vip = alunos[indice][5]

        let statusVip
        if (vip === true) {
            statusVip = "Sim (Direito a personal trainer)"
        } else {
            statusVip = "Não"
        }
        let fcm = (208 - (0.7 * idade)).toFixed(0)
        let agua = (peso * 35) / 1000
        let imc = (peso / (altura * altura))
        let pesoIdealMin = (18.5 * (altura * altura)).toFixed(1)
        let pesoIdealMax = (24.9 * (altura * altura)).toFixed(1)
        let statusImc
        if (imc < 18.5) {
            statusImc = "Abaixo do peso"
        } else if (imc < 25) {
            statusImc = "Peso normal"
        } else if (imc < 30) {
            statusImc = "Sobrepeso"
        } else if (imc < 35) {
            statusImc = "Obesidade grau I"
        } else if (imc < 40) {
            statusImc = "Obesidade grau II"
        } else {
            statusImc = "Obesidade grau III"
        }
        console.log("-------------------------------------------")
        console.log("-             Ficha do aluno              -")
        console.log("-------------------------------------------")
        console.log(`Matrícula: ${buscarMatricula}`)
        console.log(`Nome: ${nome}`)
        console.log(`Idade: ${idade}`)
        console.log(`Peso: ${peso}`)
        console.log(`Altura: ${altura}`)
        console.log(`VIP: ${statusVip}`)
        console.log("")
        console.log(`FCM: ${fcm} bpm`)
        console.log(`Água recomendada: ${agua.toFixed(1)} litros/dia`)
        console.log(`IMC: ${imc.toFixed(2)} ${statusImc}`)
        console.log(`Faixa de peso ideal: ${pesoIdealMin} Kg até ${pesoIdealMax} Kg`)
        console.log("-------------------------------------------")
    }

    console.log("")
    prompt("ENTER...")
}
function gerarRelatorios() {
    do {
        console.clear()
        console.log("=== RELATÓRIOS ===")
        console.log("")
        console.log("1. Alunos VIP")
        console.log("2. Média de idade")
        console.log("3. % IMC dos alunos")
        console.log("0. Voltar")
        console.log("")
        opcaoRelatorio = Number(prompt("Escolha: "))

        switch (opcaoRelatorio) {
            case 1:
                gerarRelatorioVip()
                break
            case 2:
                gerarRelatorioMediaIdade()
                break
            case 3:
                gerarRelatorioImc()
                break
            case 0:
                break
            default:
                console.log("")
                console.log("Opção inválida!")
                prompt("ENTER...")
        }
    } while (opcaoRelatorio !== 0)
    function gerarRelatorioVip() {
        console.clear()
        console.log("=== ALUNOS VIP ===")
        console.log("")

        let alunosVip = alunos.filter((a) => {
            return a[5] === true
        })

        if (alunosVip.length === 0) {
            console.log("Nenhum aluno VIP cadastrado")
        } else {
            let listaVip = alunosVip.map((a) => {
                return {
                    Matrícula: a[0],
                    Nome: a[1]
                }
            })
            console.table(listaVip)
        }

        console.log("")
        prompt("ENTER...")
    }
    function gerarRelatorioMediaIdade() {
        console.clear()
        console.log("=== MÉDIA DE IDADES ===")
        console.log("")

        if (alunos.length === 0) {
            console.log("Nenhum aluno cadastrado")
        } else {
            let somaIdades = 0
            alunos.forEach((a) => {
                somaIdades += a[2]
            })
            let media = somaIdades / alunos.length
            console.log(`Média de idade: ${media.toFixed(0)} anos`)
        }

        console.log("")
        prompt("ENTER...")
    }

    function gerarRelatorioImc() {
        console.clear()
        console.log("=== % IMC DOS ALUNOS ===")
        console.log("")

        if (alunos.length === 0) {
            console.log("Nenhum aluno cadastrado")
        } else {
            let abaixoPeso = 0
            let pesoNormal = 0
            let acimaPeso = 0

            alunos.map((a) => {
                let peso = a[3]
                let altura = a[4]
                let imc = peso / (altura * altura)
                if (imc < 18.5) {
                    abaixoPeso++
                } else if (imc < 25) {
                    pesoNormal++
                } else {
                    acimaPeso++
                }
            })
            let total = alunos.length
            let percAbaixo = ((abaixoPeso / total) * 100)
            let percNormal = ((pesoNormal / total) * 100)
            let percAcima = ((acimaPeso / total) * 100)

            let graficoAbaixo = "■".repeat(Math.round(percAbaixo / 2))
            let graficoNormal = "■".repeat(Math.round(percNormal / 2))
            let graficoAcima = "■".repeat(Math.round(percAcima / 2))

            console.log(`Abaixo do peso: ${percAbaixo.toFixed(1)}%`)
            console.log(graficoAbaixo)
            console.log("")

            console.log(`Peso normal: ${percNormal.toFixed(1)}%`)
            console.log(graficoNormal)
            console.log("")

            console.log(`Acima do peso: ${percAcima.toFixed(1)}%`)
            console.log(graficoAcima)
            console.log("")
        }

        console.log("")
        prompt("ENTER...")
    }
}

mainAcademia()