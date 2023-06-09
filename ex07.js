function somar(n1, n2) {
    return n1 + n2
}


function subtrair(n1, n2) {
    return n1 - n2
}


function multiplicar(n1, n2) {
    return n1 * n2
}


function dividir(n1, n2) {
    return n1 / n2
}


function operacao(numeroOperacao, n1, n2) {
    switch (numeroOperacao) {
        case 1:
            return somar(n1, n2)
        case 2:
            return subtrair(n1, n2)
        case 3:
            return multiplicar(n1, n2)
        case 4:
            return dividir(n1, n2)
    }
}

while (true) {
    let escolha = prompt('[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir \n[5] Saír')
    escolha = Number(escolha)
    if (escolha == 5) {
        break
    } else if (escolha > 0 && escolha < 5) {
        let n1 = prompt('Digite o primeiro número: ')
        let n2 = prompt('Digite o segundo número: ')
        alert(operacao(Number(escolha), Number(n1), Number(n2)))
    } else {
        alert('Erro! Por favor, escolha uma opção válida! ')
    }
}