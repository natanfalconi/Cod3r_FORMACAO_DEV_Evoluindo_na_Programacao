const nomes = ['Ana', 'Carlos', 'João', 'Lucas', 'Daniel']

// function praCadaElemento(elemento, indice, arrayCompleto) {
//     console.log(elemento, indice, arrayCompleto)
// }

// nomes.forEach(praCadaElemento)

nomes.forEach(function (element, index, array) {
    console.log(element, index, array)
})
