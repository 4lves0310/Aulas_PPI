console.log(window.screen);

window.document.body.innerHTML = "<p>Olá Mundo</p>"
window.document.body.style.backgroundColor = "blue"
let div= document.createElement("div");
let pnome = document.createElement("p");
pnome.innerHTML = "Informe seu nome: ";
div.appendChild(pnome);
document.body.appendChild(div);
/*
let nome = document.createElement("input");
div.appendChild(nome);

let peso = document.createElement("input");
peso.setAttribute("type", "number");
peso.setAttribute("placeholder", "Informe seu peso em kg:");
div.appendChild(peso);

let altura = document.createElement("input");
altura.setAttribute("type", "number");
altura.setAttribute("placeholder", "Informe sua altura em cm:");
div.appendChild(altura);
*/

document.body.appendChild(div);
let temp=document.createElement("input");
temp.id="inputNome"
div.appendChild(temp);

div.appendChild(document.createElement("br"));
temp=document.createElement("label");
temp.innerHTML = "Peso: ";
div.appendChild(temp);
temp=document.createElement("input");
temp.id="inputPeso"
div.appendChild(temp);

div.appendChild(document.createElement("br"));
temp=document.createElement("label");
temp.innerHTML = "Altura: ";
div.appendChild(temp);
temp=document.createElement("input");
temp.id="inputAltura"
div.appendChild(temp);

//add botao

div.appendChild(document.createElement("br"));
temp=document.createElement("button");
temp.id="btnCalcular"
temp.innerHTML = "Calcular IMC";
div.appendChild(temp);

temp.addEventListener("click", () => {
    inputNome = document.getElementById("inputNome").value;
    inputPeso = document.getElementById("inputPeso").value;
    inputAltura = document.getElementById("inputAltura").value;
    peso = Number.parseFloat(inputPeso.value);
    altura = Number.parseFloat(inputAltura.value);
    imc = peso / (altura * altura);
    console.log(imc);
    resultado = document.createElement("p");
    resultado.innerHTML = "Seu IMC é: " + imc;
    document.body.appendChild(resultado);
})
