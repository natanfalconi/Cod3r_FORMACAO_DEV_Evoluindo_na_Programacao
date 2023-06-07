const numeros = [7, 8, 9, 222, 96, 78, 77, 12]

// foreach => para cada elemento do array
for (let numero of numeros) {
    console.log(numero)
}

// esse foreach retornar o index do array
for (let indice in numeros) {
    console.log(`${indice} => ${numeros[indice]}`)
}
