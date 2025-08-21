class Pessoa {
    constructor(nome, ano_nascimento, endereco, curso, peso, altura) { // auxiliador da class
        this.nome = nome;
        this.ano_nascimento = ano_nascimento;
        this.endereco = endereco
        this.curso = curso;
        this.peso = peso;
        this.altura = altura;
    }

    displayName() {
        console.log(this.nome)

    }

    calcular_Idade() {
        let ano_atual = parseInt(prompt('Digite o ano atual:  '))
        let calculo = ano_atual - this.ano_nascimento
        console.log('Idade:  ', calculo)
    }

    imc() {
        let novo_imc;
        novo_imc = this.peso / (this.altura ** 2)
        console.log(`IMC da ${this.nome} -> ${novo_imc.toFixed()}`)

    }

}


// filho da classe 1
outra_pessoa = new Pessoa('Carlos', 1980, 'Rua 70', 'Python', 80, 2.00,)

// filho da classe 2
segunda_pessoa = new Pessoa('Maria', 2000, 'Rua 150, centro', 'Java', 65, 1.71)

// filho da classe 3
terceira_pessoa = new Pessoa('Fernando', 1960, 'Rua Aruja, centro', 'Golang', 90, 1.71)


segunda_pessoa.displayName()
outra_pessoa.displayName()
terceira_pessoa.displayName()

segunda_pessoa.calcular_Idade()
outra_pessoa.calcular_Idade()
terceira_pessoa.calcular_Idade()

segunda_pessoa.imc()
outra_pessoa.imc()
terceira_pessoa.imc()


// SEM PARÂMETROS
class Calculadora {
    soma(a, b) {
        return a + b
    }

    subtracao(a, b) {
        return a - b
    }

    divisao(a, b) {
        return a / b
    }

    multiplicacao(a, b) {
        return a * b
    }
}

c = new Calculadora()

console.log(c.soma(10, 30))
console.log(c.subtracao(10, 30).toFixed())
console.log(c.divisao(10, 30))
console.log(c.multiplicacao(10, 30))


// COM PARÂMETROS
class Calculadora {
    constructor(n1, n2) {
        this.numero_1 = n1
        this.numero_2 = n2
    }

    somar() {

        let calculo = this.numero_1 + this.numero_2
        console.log('Resultado', calculo)
    }
    
    subtrair() {
        let calculo = this.numero_1 - this.numero_2
        console.log('Resultado', calculo)
    }

    dividir() {

        let calculo = this.numero_1 / this.numero_2
        console.log('Resultado', calculo)
    }

    multiplicar() {
        let calculo = this.numero_1 * this.numero_2
        console.log('Resultado', calculo)
    }

}

let n1 = parseFloat(prompt('Digite um número: '))
let n2 = parseFloat(prompt('Digite um número: '))

c = new Calculadora(n1, n2)

c.somar()
c.dividir()
c.multiplicar()
c.subtrair()