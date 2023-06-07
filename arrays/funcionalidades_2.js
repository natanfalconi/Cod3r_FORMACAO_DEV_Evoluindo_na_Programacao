const numeros = [1, 2, 3, 4, 5, 6]

const numeroExcluido = numeros.pop()  /* remove o ULTIMO item o array, sendo possível pegar esse valor removido */
console.log(numeroExcluido)
console.log(numeros)


numeros.splice(1, 2, 100, 267) /* Consigo remover quando items eu precisar tendo a flexibilidade para escolher 
                    qual será o index de inicio e fim. É possível ainda passar mais parametros, que serve
                    para ele adicianar ao array */

console.log(numeros)