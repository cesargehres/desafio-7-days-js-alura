let res = window.prompt('Tente acertar o número sorteado!')
const nSorteado = Math.round(Math.random() * 10)
for (let tentativa = 2; tentativa >= 0; tentativa--) {
    if (res == nSorteado) {
        window.alert(`Parabéns, você ganhou! O número sorteado era ${nSorteado}`)
    } else if (tentativa < 1) {
        window.alert(`É uma pena, você perdeu! O número sorteado era ${nSorteado}`)
    } else {
        res = window.prompt(`Você errou, tente novamente! Ainda restam ${tentativa} tentativas`)
    }
}
