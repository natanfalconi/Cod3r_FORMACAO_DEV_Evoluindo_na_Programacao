//DESAFIO 2 - FEITO POR MIM

function calcMedia(array) {
    let total = 0
    for (let num of array) {
        total += num
    }

    return total / array.length
}

const aluno = {
    nome: 'Rafael',
    disciplinas: [
        {
            nome: 'Português',
            notas: [5.4, 9, 8.1]
        },
        {
            nome: 'Matemática',
            notas: [7.9, 6.3, 8.9]
        },
        {
            nome: 'Inglês',
            notas: [8.7, 9, 9.6]
        },
    ],
    media: function (nomeDisciplina) {
        let media
        let soma = 0
        this.disciplinas.forEach((value) => {
            if (value.nome.toLowerCase() === nomeDisciplina.toLowerCase()) {
                value.notas.forEach((nota) => {
                    return soma += nota
                })
            }
            media = soma / value.notas.length
        })
        return media

    },
    mediaGlobal: function () {
        const mediaGlobal = []

        for (let disciplina of this.disciplinas) {
            mediaGlobal.push(calcMedia(disciplina.notas))
        }

        return calcMedia(mediaGlobal)
    }
}

console.log(aluno.media('Português'))
console.log(aluno.mediaGlobal())


// // FEITO PELO PROFESSOR - RESPOSTA

const aluno2 = {
    nome: 'Pedro',
    disciplinas: [
        {
            nome: 'Português',
            notas: [5.4, 9, 8.1]
        },
        {
            nome: 'Matemática',
            notas: [7.9, 6.3, 8.9]
        },
        {
            nome: 'Inglês',
            notas: [8.7, 9, 9.6]
        },
    ],
    media: function (nomeDisciplina) {
        for (let disciplina of this.disciplinas) {
            if (disciplina.nome.toLowerCase() === nomeDisciplina.toLowerCase()) {
                return mediaDeUmArray(disciplina.notas)
            }
        }
        return null

    },
    mediaGlobal: function () {
        const medias = []
        for (let disciplina of this.disciplinas) {
            medias.push(mediaDeUmArray(disciplina.notas))
        }

        return mediaDeUmArray(medias)
    }
}

function mediaDeUmArray(numeros) {
    if (!Array.isArray(numeros)) return null

    let total = 0
    for (let numero of numeros) {
        total += numero
    }

    return total / numeros.length

}

console.log(aluno2.nome)
console.log(aluno2.media('Português'))
console.log(aluno2.media('matemática'))
console.log(aluno2.media('inglês'))
console.log(aluno2.mediaGlobal())

