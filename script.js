let numeroSecreto = parseInt(Math.random() * 11);
console.log("Shiiiiiu, o número secreto é esse -> " + numeroSecreto)
let tentativas = 5;

function Chutar() {
    let valorChuteCampo = parseInt(document.getElementById("valor").value);
    let resultadoTextoAcertouErrou = document.querySelector("#resultado");
    let resultadoTextoMaiorMenor = document.querySelector("#maiorMenor");
    let tentativas = document.querySelector("#tentativas");
    resultadoTextoMaiorMenor.innerHTML = verificarMaiorMenor(numeroSecreto, valorChuteCampo)
    
    if (valorChuteCampo == numeroSecreto) {
        resultadoTextoAcertouErrou.innerHTML = "Você acertou o número secreto."
    } else if(valorChuteCampo > 10 || valorChuteCampo < 0) {
        resultadoTextoAcertouErrou.innerHTML = "Chute apenas números de 0 a 10."
    } else {
        tentativas.innerHTML = verificarTentativas()
    }
}

function verificarMaiorMenor(numeroSecreto, numeroDigitado) {
    if (numeroDigitado > numeroSecreto) {
        return "O número digitado é maior do que o número secreto."
    } else if(numeroDigitado < numeroSecreto) {
        return "O número digitado é menor do que o número secreto."
    }
}

function verificarTentativas() {
    if (tentativas <= 0) {
        tentativas = 5
        return 'Suas tentativas acabaram.'
    } else {
        tentativas--;
        return 'Você tem ' + tentativas +' tentativas.'
    }
}