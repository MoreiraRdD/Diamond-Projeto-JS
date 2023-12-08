function identificarDiaSemana() {
    var numeroDia = document.getElementById('numeroDia').value;
    var resultadoElement = document.getElementById('resultado');

    // Verifica se o valor é um número inteiro de 1 a 7
    if (Number.isInteger(parseFloat(numeroDia)) && numeroDia >= 1 && numeroDia <= 7) {
        var diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

        // Obtém o nome do dia da semana
        var nomeDia = diasSemana[numeroDia - 1];

        resultadoElement.innerHTML = 'O dia correspondente é: ' + nomeDia;
    } else {
        resultadoElement.innerHTML = 'Por favor, insira um número inteiro de 1 a 7.';
    }
}