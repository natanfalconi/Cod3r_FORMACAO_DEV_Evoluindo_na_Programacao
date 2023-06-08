const data = {
    dia: 12,
    mes: 11,
    ano: 2023
}

data.dia = 9
data.mes = 12
data.noFuturo = true  // é possível incrementar novos atributos no objeto

console.log(data.dia)
console.log(data.mes)
console.log(data.ano)

//interpolação

console.log(`${data.dia}/${data.mes}/${data.ano}`)
console.log(data)
