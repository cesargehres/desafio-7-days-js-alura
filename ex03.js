let area = [prompt('Você quer iniciar na area de Front-End [1] ou Back-End [2]?')]
const linguagem = []
if (area == 1) {
    let lin = prompt('Você quer começar aprendendo React [1] ou Vue [2]?')
    if (lin == 1) {
        linguagem.push('React')
    } else if (lin == 2) {
        linguagem.push('Vue')
    }

} else if (area == 2) {
    let lin = prompt('Você quer começar aprendendo C# [1] ou Java [2]?')
    if (lin == 1) {
        linguagem.push('C#')
    } else if (lin == 2) {
        linguagem.push('Java')
    }
}
