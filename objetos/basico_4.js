const cliente = {
    codigo: 57235,
    nome: "Luiz Falconi",
    vip: false,
    endereco: {
        logradouro: "Rua x",
        numero: 23,
        complemento: "Casa",
        pontosRef: ["Ao lado da padaria", "Em frente ao Bar"],
    },
    filhos: [
        {
            nome: "Rafael Falconi",
            anoDeNascimento: "2004",
        },
        {
            nome: "Braio Falconi",
            anoDeNascimento: "2007",
        },
        {
            nome: "Daniel Falconi",
            anoDeNascimento: "2012",
        },
    ],
};

// modos de acessar as informaçõpes do objeto
console.log(cliente.endereco.pontosRef)
console.log(cliente.filhos[1].anoDeNascimento)
