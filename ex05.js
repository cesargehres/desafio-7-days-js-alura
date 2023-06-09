const carnes = []
const doces = []
const frutas = []
const graos = []
const hortalicas = []


function escolherCategoria(item) {
    let categoria = prompt('A qual categoria pertence essa compra? \n[1] Carnes, [2] Doces, [3] Frutas, [4] Grãos, [5] Hortaliças') 
    if (categoria == 1) {
        carnes.push(item)
    } else if (categoria == 2) {
        doces.push(item)
    } else if (categoria == 3) {
        frutas.push(item)
    } else if (categoria == 4) {
        graos.push(item)
    } else if (categoria == 5) {
        hortalicas.push(item)
    } else {
        while (categoria < 1 || categoria > 5) {
            alert('Erro! Por favor, escolha um valor válido!')
        }
    }
}



while (true) {
    let adcL = prompt('Você deseja adicionar alguma comida na sua lista de compras? [S / N]')
    if (adcL.toLocaleUpperCase() == 'S') {
        item = prompt('O que você quer adicionar a sua lista de compras?')
        escolherCategoria(item)
    } else if (adcL.toUpperCase() == 'N') {
        break
    } else {
        alert('Erro! Por favor, escolha um valor válido!')
    }
}
alert(`Carnes: ${carnes} \nDoces: ${doces} \nFrutas: ${frutas} \nGrãos: ${graos} \nHortaliças: ${hortalicas}`)
