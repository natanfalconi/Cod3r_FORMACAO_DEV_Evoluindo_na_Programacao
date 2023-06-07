const numeros = [1, 7, 3, 4, 5, 2]

// função vs método
numeros[0] = 100
numeros.push(6)

console.log(numeros.join()) /* juntou os dados separados por virgula - sem array - Output => 100,2,3,4,5,6 
                             posso escoler qual separador eu quero, por exemplo numeros.join(';') */

console.log(numeros.includes(10, 2)) /* valida se a informação (10) existe detro do array. É possível passar um 
                                    segundo parametro para definir de qual local ele deve começar a procurar
                                    Ex.: numeros.includes(10, 2)
                                    Output => true ou false */

console.log(numeros.indexOf(2)) /* traz listado qual é o indice do elemento selecionado - É possível passar um 
                                    segundo parametro para definir de qual local ele deve começar a procurar
                                    Ex.: numeros.indexOf(2, 3)
                                    nesse caso o indice do elemento 2 é o 5 */
console.log(numeros.concat(2))

const numeros2 = numeros.concat(7, 8, 9) /* Diferente do push, o concat não altera o array inicial, ele cria um novo array
                                            que é a unição entre o array original + os elementos passados como parametros */
console.log(numeros2)