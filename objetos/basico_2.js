function precoComDesconto(preco, desconto) {
    return preco * (1 - desconto)
}

const produto = {
    nome: 'Macbook',
    preco: 32000,
    desconto: 0.05,
    precoComDesconto: function () {   // Nesse caso, chamamos de métedo - Método é uma função, que pertence a um objeto
        return this.preco * (1 - this.desconto) // para referenciar os atributos dentro do mesmo objetos, usamos o "this"
    }
}

console.log(produto.preco)
console.log(produto.precoComDesconto())
console.log(precoComDesconto(produto.preco, produto.desconto))