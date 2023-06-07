//EXEMPLO FEITO POR MIM
function nota(num1) {
    const nota = Math.ceil(num1)
    let notaAluno

    switch (nota) {
        case 10: notaAluno = 'A+'; break;
        case 9: notaAluno = 'A'; break;
        case 8: notaAluno = 'B+'; break;
        case 7: notaAluno = 'B'; break;
        case 6: notaAluno = 'C+'; break;
        case 5: notaAluno = 'C'; break;
        case 4: notaAluno = 'D+'; break;
        case 3: notaAluno = 'D'; break;
        case 2: notaAluno = 'E+'; break;
        case 1: notaAluno = 'E'; break;
        case 0: notaAluno = 'F'; break;

        default: notaAluno = null; break;
    }

    return notaAluno
}

const notaDoAluno = nota(13.4)

console.log(notaDoAluno)
