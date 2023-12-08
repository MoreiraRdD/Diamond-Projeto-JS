function exibirInverso() {
    var inputString = document.getElementById('inputString').value;
    var resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';

    if (inputString !== '') {
        // Inverte a string manualmente
        var inverso = '';
        for (var i = inputString.length - 1; i >= 0; i--) {
            inverso += inputString[i];
        }

        resultadoElement.innerHTML = 'O inverso da string é: ' + inverso;
    } else {
        resultadoElement.innerHTML = 'Por favor, insira uma string.';
    }
}