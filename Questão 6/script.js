function exibirNumeros() {
    var numeroLimite = document.getElementById('numeroLimite').value;
    var resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';

    // Verifica se o valor é um número inteiro positivo
    if (Number.isInteger(parseFloat(numeroLimite)) && numeroLimite > 0) {
        // Exibe todos os números até o valor inserido
        for (var i = 1; i <= numeroLimite; i++) {
            resultadoElement.innerHTML += i + ' ';
        }
    } else {
        resultadoElement.innerHTML = 'Por favor, insira um número inteiro positivo.';
    }
}