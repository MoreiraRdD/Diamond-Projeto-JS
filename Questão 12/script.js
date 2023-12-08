function exibirResultado() {
    var inputString = document.getElementById('inputString').value;
    var resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = ''; 

    if (inputString !== '') {
        // Converte a primeira letra para maiúscula
        var primeiraLetra = inputString.charAt(0).toUpperCase();

        // Converte a última letra para maiúscula
        var ultimaLetra = inputString.slice(-1).toUpperCase();

        resultadoElement.innerHTML = 'Resultado: ' + primeiraLetra + inputString.slice(1, -1) + ultimaLetra;
    } else {
        resultadoElement.innerHTML = 'Por favor, insira uma string.';
    }
}