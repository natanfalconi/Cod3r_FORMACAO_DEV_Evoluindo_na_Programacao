//otimizando processos
function criarData(dia, mes, ano) {
    return {
        dia, // quando o valor é igual a chave, pode-se retirar o valor
        mes,
        ano: ano,
        formatar() {
            return `${this.dia}/${this.mes}/${this.ano}`
        }
    }
}

// deixando os objetos padronizados
const data1 = criarData(7, 11, 2026)
const data2 = criarData(3, 3, 2023)
const data3 = criarData(24, 12, 2025)


console.log(data1.formatar())
console.log(data2.formatar())
console.log(data3.formatar())