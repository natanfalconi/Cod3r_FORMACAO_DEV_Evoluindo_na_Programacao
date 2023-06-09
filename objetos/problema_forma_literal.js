// Problema Forma Literal
const data1 = {
    dia: 12,
    mes: 11,
    ano: 2027,
    formatar() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const data2 = {
    dia: 3,
    mes: 03,
    ano: 2023,
    formatar() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const data3 = {
    dia: 07,
    mes: 12,
    ano: 2025,
    exibir() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

console.log(data)
console.log(data1.formatar())
console.log(data2.formatar())
console.log(data3.formatar()) // vai dar erro, pois não existe a o formatar dentro do data3
