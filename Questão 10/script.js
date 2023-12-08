function contarValoresMaioresQue50() {
    var inputLista = document.getElementById('inputLista').value;
    var resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = ''; 

    if (inputLista !== '') {
        // Converte a string em um array de números
        var numeros = inputLista.split('/').map(Number);

        // Conta a quantidade de valores maiores que 50
        var quantidade = 0;
        for (var i = 0; i < numeros.length; i++) {
            if (numeros[i] > 50) {
                quantidade++;
            }
        }
        resultadoElement.innerHTML = 'A quantidade de valores maiores que 50 é: ' + quantidade;
    } else {
        resultadoElement.innerHTML = 'Por favor, insira uma lista de números.';
    }
}