const elementoMenorValor = document.getElementById('menor-valor');
const elementoMaiorValor = document.getElementById('maior-valor');

const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = geraNumeroAleatorio();

console.log(numeroSecreto);

function geraNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1);
};

elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;