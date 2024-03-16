const menorValor = 1;
const maiorValor = 1000;
let numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * (maiorValor - menorValor + 1)) + menorValor;
}

console.log("Número Secreto: " + numeroSecreto);

const elementoMenorValor = document.getElementById("menor-valor");
const elementoMaiorValor = document.getElementById("maior-valor");

elementoMenorValor.textContent = menorValor;
elementoMaiorValor.textContent = maiorValor;
