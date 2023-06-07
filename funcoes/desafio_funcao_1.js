function mediaSimples(num1, num2, num3) {
    const media = (num1 + num2 + num3) / 3
    console.log(`A média é: ${media}`)
}

function mediaPonderada(num1, num2, num3) {
    const mediaPonderada = (num1 + 2 * num2 + 3 * num3) / 6
    console.log(`A média ponderada é: ${mediaPonderada}`)
}

mediaSimples(3, 10, 1)
mediaPonderada(10, 10, 1)