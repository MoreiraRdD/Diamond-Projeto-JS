function calcularSoma() {
    var inputLista = document.getElementById('inputLista').value;
    var resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';

    if (inputLista !== '') {
        // Converte a string em um array de números
        var numeros = inputLista.split('-').map(Number);

        // Calcula a soma dos números menores que 30
        var soma = 0;
        for (var i = 0; i < numeros.length; i++) {
            if (numeros[i] < 30) {
                soma += numeros[i];
            }
        }

        resultadoElement.innerHTML = 'A soma dos números menores que 30 é: ' + soma;
    } else {
        resultadoElement.innerHTML = 'Por favor, insira uma lista de números.';
    }
}