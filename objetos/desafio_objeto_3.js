function mediaDeUmArray(numeros) {
    if (!Array.isArray(numeros)) return null

    let total = 0
    for (let numero of numeros) {
        total += numero
    }

    return total / numeros.length

}

function Aluno(nomeAluno, disciplinas) {
    this.nome = nomeAluno
    this.disciplinas = disciplinas

    this.media = function (nomeDisciplina) {
        for (let disciplina of this.disciplinas) {
            if (disciplina.nome.toLowerCase() === nomeDisciplina.toLowerCase()) {
                return mediaDeUmArray(disciplina.notas)
            }
        }
        return null

    }

    this.mediaGlobal = function () {
        const medias = []
        for (let disciplina of this.disciplinas) {
            medias.push(mediaDeUmArray(disciplina.notas))
        }

        return mediaDeUmArray(medias)
    }
}

const aluno = new Aluno(
    'Predro',
    [
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
)

console.log('aluno', aluno)
console.log(aluno.media('Português'))
console.log(aluno.mediaGlobal())

