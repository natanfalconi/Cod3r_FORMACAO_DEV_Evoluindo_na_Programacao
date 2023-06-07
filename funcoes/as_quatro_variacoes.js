// #1 = funcção SEM parâmetros e SEM retorno
function exibirBomDia() {
    console.log('Bom dia')
}

exibirBomDia()

// #2 = funcção COM parâmetros e SEM retorno
function exibirBomDiaPara(nome) {
    console.log(`Bom dia ${nome}`)
}

exibirBomDiaPara("Natan")
exibirBomDiaPara("Carlos")

// #3 = funcção SEM parâmetros e COM retorno
function numeroEntre0e10() {
    const numero = parseInt(Math.random() * 10)
    return numero
}

const numeroGerado = numeroEntre0e10()
console.log(numeroGerado)

// #4 = funcção COM parâmetros e COM retorno
function somar(n1, n2) {
    const soma = n1 + n2
    return soma
}

console.log(somar(10, 3))

