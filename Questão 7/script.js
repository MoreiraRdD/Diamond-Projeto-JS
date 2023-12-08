function calcularSoma() {
    var numeroLimite = document.getElementById('numeroLimite').value;
    var resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';

    // Verifica se o valor é um número inteiro positivo
    if (Number.isInteger(parseFloat(numeroLimite)) && numeroLimite > 0) {
        // Calcula a soma dos números menores que o valor inserido
        var soma = 0;
        for (var i = 1; i < numeroLimite; i++) {
            soma += i;
        }

        resultadoElement.innerHTML = 'A soma dos números menores que ' + numeroLimite + ' é: ' + soma;
    } else {
        resultadoElement.innerHTML = 'Por favor, insira um número inteiro positivo.';
    }
}