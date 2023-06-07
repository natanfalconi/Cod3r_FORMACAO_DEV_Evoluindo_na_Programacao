const nomes = ['Rafael', 'Carlos', 'Gustavo']

function forEach(array, funcao) {
    for (let i in array) {
        funcao(array[i], i, array)
    }
}

forEach(nomes, (element, index, array) => {
    console.log(element, index, array)
})