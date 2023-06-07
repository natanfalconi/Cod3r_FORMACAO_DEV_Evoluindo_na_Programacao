function consoleRetorno() {
    return 'bom dia'
}
function semRetorno() {
    console.log('bom dia') // ele não retorna nada, então ao chamar abaixo, o valor é undefined
}

const saudacao1 = consoleRetorno()
const saudacao2 = semRetorno()

console.log(saudacao1, saudacao2)