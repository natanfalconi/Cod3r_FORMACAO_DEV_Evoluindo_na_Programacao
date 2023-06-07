// const numeros = [7, 99, 1683, 4674, 33, 38, 47, 59]
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = numeros.length - 2; i >= 0; i -= 2) {
    console.log(`numeros => ${numeros[i]}`)
}

// existe a possibilidade de fazer um reverse no array
const numerosInvertidos = numeros.reverse()
for (let i in numerosInvertidos) {
    if (i % 2 === 1) { // Essa condição é para pegar os numeros impares => "%" - Modulo
        console.log(`${i} => ${numerosInvertidos[i]}`)
    }
}

