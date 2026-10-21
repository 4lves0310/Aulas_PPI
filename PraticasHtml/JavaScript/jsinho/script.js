let peso = document.getElementById("peso");
let altura = document.getElementById("altura");
let resultado = document.getElementById("resultado");
let calcular = document.getElementById("calcular");
let imagemResultado = document.getElementById("imagemResultado");

calcular.addEventListener("click", function () {
    let pesoValor = Number(peso.value);
    let alturaValor = Number(altura.value);

    if (pesoValor <= 0 || alturaValor <= 0) {
        resultado.textContent = "Digite peso e altura válidos.";
        imagemResultado.style.display = "none";
        return;
    }

    let imc = pesoValor / (alturaValor * alturaValor);

    if (imc < 18.5) {
        imagemResultado.src = "abaixopeso.png";
        resultado.textContent = "Seu IMC é: " + imc.toFixed(2) + " - Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        imagemResultado.src = "normal.png";
        resultado.textContent = "Seu IMC é: " + imc.toFixed(2) + " - Peso normal";
    } else if (imc >= 25 && imc < 30) {
        imagemResultado.src = "sobrepeso.png";
        resultado.textContent = "Seu IMC é: " + imc.toFixed(2) + " - Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        imagemResultado.src = "obesidade1.png";
        resultado.textContent = "Seu IMC é: " + imc.toFixed(2) + " - Obesidade grau 1";
    } else if (imc >= 35 && imc < 40) {
        imagemResultado.src = "obesidade2.png";
        resultado.textContent = "Seu IMC é: " + imc.toFixed(2) + " - Obesidade grau 2";
    } else {
        imagemResultado.src = "obesidade3.png";
        resultado.textContent = "Seu IMC é: " + imc.toFixed(2) + " - Obesidade grau 3";
    }

    imagemResultado.style.display = "block";
});
