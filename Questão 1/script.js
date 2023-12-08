function verificarParOuImpar() {
    // Obtém o valor do campo de entrada
    var numero = document.getElementById('numero').value;

    // Verifica se o valor é um número inteiro
    if (Number.isInteger(parseFloat(numero))) {
        // Verifica se é par ou ímpar
        if (numero % 2 === 0) {
            document.getElementById('resultado').innerHTML = numero + ' é um número PAR.';
        } else {
            document.getElementById('resultado').innerHTML = numero + ' é um número ÍMPAR.';
        }
    } else {
        document.getElementById('resultado').innerHTML = 'Por favor, insira um número inteiro válido.';
    }
}