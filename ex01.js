let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

function compararValor(v1, v2) {
    if (v1 === v2) {
        return 'As variáveis tem o mesmo valor e são de tipos iguais.'
    } else if (v1 == v2) {
        return 'As variáveis tem o mesmo valor, mas tipos diferentes.'
    } else {
        return 'As variáveis não tem o mesmo valor.'
    }
}

console.log(compararValor(numeroUm, numeroUm))
