function mediaPonderada(num1, num2, num3) {
    const mediaPonderada = (num1 + 2 * num2 + 3 * num3) / 6
    return mediaPonderada
}

function mediaSimples(nota1, nota2) {
    return (nota1 + nota2) / 2
}

const media1 = mediaPonderada(4, 9, 7)
const media2 = mediaPonderada(7, 8, 8.4)
const mediaFinal = mediaSimples(media1, media2)

console.log(`A media do aluno é: ${mediaFinal}`)