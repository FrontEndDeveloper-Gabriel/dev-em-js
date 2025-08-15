// ATIVIDADES

// COM ARRAY E LOOP FOR
// 1 - Contagem de 1 a 10
for (n = 0; n <= 10; n++) {
    console.log(n)
}


// 2 - Números pares de 0 a 20
for (n = 0; n <= 20; n+=2) {
    console.log(n)
}


// 3 - Tabuada do 5
for (n = 0; n <= 10; n++) {
    let n1 = 5
    let result = n1 * n
    console.log(n1,'X', n,'=', result)
}


// 4 - Imprimir elementos de um array
array = [1,'Array!', true]
console.log(array)


// 5 - Soma de números de 1 a 100
let soma_ate_100 = 0
for (let n = 1; n <= 100; n++) {
    soma_ate_100 += n;
}
console.log("Soma de 1 a 100: ", soma_ate_100);



// COM LOOP FOR WHILE
// 6 Contagem regressiva de 10 a 1
for (n = 10; n >= 1; n--) {
    console.log("Contagem regressiva: ", n)
}


// 7 Adivinhe o número (1 a 10)
const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let chute = null;

while (chute !== numeroSecreto) {
    chute = parseInt(prompt("Adivinhe o número:"));

    if (chute === numeroSecreto) {
        console.log("Parabéns! Você acertou!");
    } else {
        console.log("Tente novamente.");
    }
}


// 8 Soma até digitar 0
let numero = null;
let soma = 0;

while (numero !== 0) {
    numero = parseInt(prompt("Digite um número:"));
    soma += numero;
}

console.log("Soma total:", soma);


// 9 Percorrendo array com while
let frutas = ["maçã", "banana", "laranja", "uva"];
let i = 0;

while (i < frutas.length) {
    console.log(frutas[i]);
    i++;
}
