const mediaAluno1 = 9.4
const mediaAluno2 = 9.1
const mediaAluno3 = 10
const mediaAluno4 = 8.3
const mediaAluno5 = 8.8
const mediaAluno6 = 7.9

// ESSE CÓDIFOG HOJE NÃO SUPORTA UMA QUANTIDE INDEFINIDA DE ALUNOS, A MENOS QUE SEJA ADICONADO 
// DE FORMA MANUAL. sE TIVER POR EXEMPLO, 50 ALUNO, FICA TOTALMENTE "FORA DE MÃO"

const mediaDaTurma = (
    mediaAluno1 + mediaAluno2 +
    mediaAluno3 + mediaAluno4 +
    mediaAluno5 + mediaAluno6
) / 6

console.log(`A media da turma é ${mediaDaTurma}`)