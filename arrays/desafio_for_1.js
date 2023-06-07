const notas = [7.3, 8.1, 9.2, 8.1, 6.3, 7.9, 5.0, 6.0, 8.9, 10]

// de uma forma mais manual
let total = 0
for (let i = 0; i < notas.length; i++) {
    total += notas[i]
}
const media = total / notas.length
console.log(media)

// de uma forma mais limpa
let soma = 0
for (let nota of notas) {
    soma += nota
}
const mediaDosAlunos = soma / notas.length
console.log(mediaDosAlunos)