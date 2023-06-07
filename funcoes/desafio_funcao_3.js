const n1 = 7.9
const n2 = 8.4
const n3 = 6.5

function removerMenorNota(nota1, nota2, nota3) {

    if (nota1 < nota2 && nota1 < nota3) {
        return nota2 + nota3
    } else if (nota2 < nota1 && nota2 < nota3) {
        return nota1 + nota3
    } else if (nota3 < nota2 && nota3 < nota1) {
        return nota1 + nota2
    }
}

function calculoDaNota(nota) {
    const media = nota / 2

    if (media >= 7) {
        return 'Aprovado'
    } else if (media >= 4) {
        return 'Reculperação'
    } else {
        return 'Reprovado'
    }
}

const notaRemovida = removerMenorNota(n1, n2, n3)
console.log(calculoDaNota(notaRemovida))


// RESPOSTA DO PROFESSOR - APENAS UMA FUNÇÃO
function notaParaStatus(n1, n2, n3) {
    let media
    if (n1 <= n2 && n1 <= n3) {
        media = (n2 + n3) / 2
    } else if (n2 <= n1 && n2 <= n3) {
        media = (n1 + n3) / 2
    } else {
        media = (n1 + n2) / 2
    }

    if (media >= 7) {
        return 'Aprovado'
    } else if (media >= 4) {
        return 'Reculperação'
    } else {
        return 'Reprovado'
    }
}

console.log(notaParaStatus(n1, n2, n3))