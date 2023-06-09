const nome = prompt('Qual seu nome? ')
const idade = prompt('Qual sua idade? ')
const linguagem = prompt('Qual linguagem você esta aprendendo? ')

alert(`Olá ${nome}, você tem ${idade} anos e já esta aprendendo a lingagem ${linguagem}.`)

let res = prompt(`Você esta gostando de estudar ${linguagem}? [S/N]`)
if(res.toUpperCase() == 'S') {
    alert('Muito bom! Continue estudando e você terá muito sucesso.')
} else {
    alert('Ahh que pena... Já tentou aprender outras linguagens?')
}
