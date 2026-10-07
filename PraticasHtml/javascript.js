// Comentário de uma linha

/* Comentário de múltiplas linhas */

// Três formas de declarar uma variável (Sem tipo)
// O var e o let se distinguem pelo escopo de declaração.
let nome = "Bruno";
let sobrenome;
const e = 2.78;

if (nome === "Bruno") {
    sobrenome = "Alves";
    let idade = 18;
    let pet = "dog";
    console.log("nome: " + nome + " sobrenome: " + sobrenome + " idade: " + idade + " pet: " + pet);
}

let idade = 18;

// Estruturas da seleção no JS
if (idade === 18) {
    console.log("nome: " + nome);
} else {
    console.log("nome: Gustavo");
}

let peso = 68;
let altura = 1.68;
let imc = peso / (altura * altura);

// Classificação do IMC
console.log(imc);

switch (true) {
    case imc < 18.5:
        console.log("Abaixo do peso");
        break;
    case imc >= 18.5 && imc < 25:
        console.log("Peso Normal");
        break;
    case imc >= 25 && imc < 30:
        console.log("Acima do peso");
        break;
    case imc >= 30 && imc < 35:
        console.log("Obesidade");
        break;
    case imc >= 35:
        console.log("Obesidade Extrema");
        break;
    default:
        console.log("Valor inválido");
}

/*
if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
    console.log("Peso Normal");
} else if (imc >= 25 && imc < 30) {
    console.log("Acima do peso");
} else if (imc >= 30 && imc < 35) {
    console.log("Obesidade");
} else if (imc >= 35) {
    console.log("Obesidade Extrema");
}
*/

// switch case estrutura de seleção
let a = 2;

switch (a) {
    case 1:
        console.log("A");
        break;
    case 2:
        console.log("B");
        break;
    case 3:
        console.log("C");
        break;
    default:
        console.log("D");
}

// switch case com expressão
/*
switch (a) {
    case a ** a === 4:
        console.log("A");
        break;
    case a === 2:
        console.log("B");
        break;
    case 3 === 3:
        console.log("C");
        break;
    default:
        console.log("D");
}
*/

// Estruturas de repetição
let i = 0;
while (i < 10) {
    console.log("i: " + i);
    i++;
}

// Estrutura de repetição do for
for (let j = 0; j < 10; j++) {
    console.log("j: " + j);
}

// Arrays
let carros = ["Corsa", "Palio", "Uno", "Gol"];
console.log(carros[0]);
console.log(carros[1]);
console.log(carros[2]);
console.log(carros[3]);

let carrinhos = ["Corsa", "Palio", "Uno", "Gol"];

let frutas = ["Maçã", "Banana", "Laranja"];
frutas.forEach(function (fruta) {
    console.log(fruta);
});