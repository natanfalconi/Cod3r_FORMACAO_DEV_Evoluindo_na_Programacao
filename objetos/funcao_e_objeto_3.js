// classes!

// função construtora => criar objetos

function Data(dia, mes, ano) {
    this.dia = dia
    this.mes = mes
    this.ano = ano

    this.formatar = function () {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}


// Data(1, 1, 2028)

const data1 = new Data(1, 1, 2028)
console.log(data1)
data1.ano = 2025
console.log(data1.formatar())


// 1. Inicar com letra maiúscula [Não obrigatório]
// 2. Para usar uma funcão como contrutora, precisa suar o new na frente - new Data()
// 3. usar o this para acrecentar atributos e métodos no objeto