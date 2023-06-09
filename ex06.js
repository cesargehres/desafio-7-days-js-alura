function removerItem(lista, item) {
    for(let c = 0; c <= lista.length; c++) {
        if (lista[c].filter(array => (array == item)) == item) {
            lista[c] = lista[c].filter(array => (array != item))
            return lista
        }
    }
}

function escolherCategoria(item) {
    while (true) {
        let categoria = prompt('A qual categoria pertence essa compra? \n[1] Carnes, [2] Doces, [3] Frutas [4]Grãos, [5] Hortaliças') 
        if (categoria == 1) {
            lista[0].push(item)
            break
        } else if (categoria == 2) {
            lista[1].push(item)
            break
        } else if (categoria == 3) {
            lista[2].push(item)
            break
        } else if (categoria == 4) {
            lista[3].push(item)
            break
        } else if (categoria == 5) {
            lista[4].push(item)
            break
        } else {
            alert('Erro! Por favor, escolha um valor válido!')
        }
    }
}

function title(string) {
    let stringFragmentada = []
    let letra
    for (let c = 0; c < string.length; c++) {
        if (c == 0) {
            letra = string[c].toUpperCase()
            stringFragmentada.push(letra)
        } else if (string[c - 1] == ' ') {
            letra = string[c].toUpperCase()
            stringFragmentada.push(letra)
        } else {
            letra = string[c].toLowerCase()
            stringFragmentada.push(letra)
        }
    }
    string = stringFragmentada.join('')
    return string
}


// Lista de compras //
// Carnes [0], Doces [1], Frutas[2], Grãos[3], Hortaliças[4] //
let lista = [['Carne Moída', 'Bisteca', 'Bacon'], ['Balas', 'Bolacha'], ['Banana', 'Maçã', 'Moranguinho', 'Abacaxi'], ['Arroz', 'Feijão', 'Lentilha', 'Soja'], ['Alface', 'Tomate', 'Cebola']]


while (true) {
    let adcL = prompt('[V] Ver lista \n[A] Adicionar item \n[R] Remover item \n[S] Sair')
    if (adcL.toLocaleUpperCase() == 'A') {
        item = prompt('O que você quer adicionar a sua lista de compras?')
        escolherCategoria(title(item))
        alert(`Carnes: ${lista[0]} \nDoces: ${lista[1]} \nFrutas: ${lista[2]} \nGrãos: ${lista[3]} \nHortaliças: ${lista[4]}`)
    } else if (adcL.toUpperCase() == 'V') {
        alert(`Carnes: ${lista[0]} \nDoces: ${lista[1]} \nFrutas: ${lista[2]} \nGrãos: ${lista[3]} \nHortaliças: ${lista[4]}`)
    } else if(adcL.toUpperCase() == 'R') {
        rItem = prompt(`Qual item você quer remover da lista? \nCarnes: ${lista[0]} \nDoces: ${lista[1]} \nFrutas: ${lista[2]} \nGrãos: ${lista[3]} \nHortaliças: ${lista[4]}`)
        removerItem(lista, rItem)
    } else if (adcL.toUpperCase() == 'S'){
        break
    } else {
        alert('Erro! Por favor, escolha um valor válido!')
    }
}