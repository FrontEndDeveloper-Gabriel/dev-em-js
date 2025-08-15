let array = []
let valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(valores[4])
// teste.length()
// // console.log(teste)
// console.log(teste.length);


// ----------------------------------------------------------------


// FORMAS DE CRIAR ARRAYS
const numeros = [11, 12, 13, 14, 15]
const teste = new Array[16, 17, 18, 19, 20]
const mista = [21, 22, 23, { '24': 25 }, [26, 27, 28]]
const bidimensional = [[[]]]

console.log(bidimensional[0][3][3])


// ----------------------------------------------------------------


// ACESSAR ELEMENTOS
console.log(mista[mista.length - 2])
console.log(mista[0])


// ----------------------------------------------------------------


// MÉTODOS BÁSICOS 

// add valores 
array = [1, 2, 34, 5, 6]
array.push(100)
console.log(array)


// remover o ultimo valor
array.pop()
console.log(array)


// remover o indice 0
array.shift()
console.log(array)


//adicionar no inicio
array.unshift(10)
console.log(array)


// adicionar declarando o indice 
array[2] = 100
console.log(array)


// ----------------------------------------------------------------

// FOR
let arrayNomes = []
let arrayIdades = []
for (i = 1; i <= 10; i += 2) {
    let nome = prompt('Nome:')
    arrayNomes.push(nome)
    console.log(arrayNomes, i)
    let idade = prompt('Idade:')
    arrayIdades.push(idade)
    console.log(arrayIdades, i)
}


// ----------------------------------------------------------------


// forEach
let array = [1, 2, 3, 4, 5, 6]

array.forEach((a) => console.log(a))

// array.forEach(function (a, index)){
// console.log(index, a)
// }

for (let a of array) {
    console.log(a)
}

const array = ['c', 'd', 'a']
const array2 = [25, 65, 879, 1]

array.sort()
console.log(array)

array2.sort((a, b) => a - b)

console.log(array2)


// ----------------------------------------------------------------


// CONCATENAÇÃO
let ar = [1, 2, 3]
let ar2 = [4, 5, 6]
let ar3 = [...ar, ...ar2]
console.log(ar3)