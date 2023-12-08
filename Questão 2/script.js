function compararNumeros() {
    // Obtém os valores dos campos de entrada
    var num1 = document.getElementById('numero1').value;
    var num2 = document.getElementById('numero2').value;

    // Verifica se os valores são números inteiros
    if (Number.isInteger(parseFloat(num1)) && Number.isInteger(parseFloat(num2))) {
        // Compara os números
        if (num1 > num2) {
            document.getElementById('resultado').innerHTML = num1 + ' é maior que ' + num2 + '.';
        } else if (num1 < num2) {
            document.getElementById('resultado').innerHTML = num2 + ' é maior que ' + num1 + '.';
        } else {
            document.getElementById('resultado').innerHTML = 'Os números são iguais.';
        }
    } else {
        document.getElementById('resultado').innerHTML = 'Por favor, insira dois números inteiros válidos.';
    }
}