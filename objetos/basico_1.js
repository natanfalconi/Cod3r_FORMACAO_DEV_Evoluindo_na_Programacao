const produto = {
    nome: 'Caneta BIC preta',
    preco: 9.99,
    desconto: 0.2,
    altoCusto: false,
    outroObjeto: {  // é possível ter mais objetos dentro do objeto principal
        attr: 'Valor'
    }
}

// pode ser acessado o atributo dessa forma
console.log(produto['nome'])
console.log(produto['preco'])
console.log(produto['desconto'])
console.log(produto['altoCusto'])

// esse é como o acesso é geralmente usado
console.log(produto.nome)
console.log(produto.preco)
console.log(produto.desconto)
console.log(produto.altoCusto)

console.log(typeof produto)

// É possível alterar o valor dentro do objeto, dessas duas formas
produto['nome'] = 'Caneta Verde'
console.log(produto.nome)

produto.nome = 'Lápis Roxo'
console.log(produto.nome)

