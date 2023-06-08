const data = {
    dia: 12,
    mes: 11,
    ano: 2023,
    exibirDataFormatada: function () {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

data.dia = 09
data.mes = 12

console.log(data.exibirDataFormatada())
