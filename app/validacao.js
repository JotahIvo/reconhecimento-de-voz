function verificaChute(chute){
    const numero = +chute;

    console.log(numeroSecreto)

    if(Number.isNaN(numero)){
        elementoChute.innerHTML += `<div>Valor inválido</div>`
        return;
    };

    if(numero < menorValor || numero > maiorValor){
        elementoChute.innerHTML += `<div>Valor inválido, tente algo que esteja entre ${menorValor} e ${maiorValor}</div>`;
        return;
    }; 

    if(numero < numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>`;
        return;
    } else {
        if(numero > numeroSecreto){
            elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>`;
            return;
        };
    };

    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `;
        return;
    };
};

document.body.addEventListener('click', (event) => {
    if(event.target.id == 'jogar-novamente'){
        window.location.reload();
    };
});