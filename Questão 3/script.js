function verificarDireitoVoto() {
    // Obtém o valor do campo de entrada
    var anoNascimento = document.getElementById('anoNascimento').value;

    // Verifica se o valor é um número inteiro
    if (Number.isInteger(parseFloat(anoNascimento))) {
        // Obtém o ano atual
        var anoAtual = new Date().getFullYear();

        // Calcula a idade da pessoa
        var idade = anoAtual - anoNascimento;

        // Verifica se a pessoa pode votar
        if (idade >= 16) {
            document.getElementById('resultado').innerHTML = 'Você pode votar este ano.';
        } else {
            document.getElementById('resultado').innerHTML = 'Você ainda não tem idade suficiente para votar.';
        }
    } else {
        document.getElementById('resultado').innerHTML = 'Por favor, insira um ano de nascimento válido.';
    }
}