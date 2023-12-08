function calcularNovoSalario() {
    // Obtém os valores dos campos de entrada
    var salarioAtual = document.getElementById('salarioAtual').value;
    var percentualReajuste = document.getElementById('percentualReajuste').value;

    // Verifica se os valores são números
    if (!isNaN(salarioAtual) && !isNaN(percentualReajuste)) {
        // Calcula o novo salário com base no percentual de reajuste
        var novoSalario = parseFloat(salarioAtual) * (1 + parseFloat(percentualReajuste) / 100);

        document.getElementById('resultado').innerHTML = 'O novo salário é: R$ ' + novoSalario.toFixed(2);
    } else {
        document.getElementById('resultado').innerHTML = 'Por favor, insira valores numéricos válidos.';
    }
}