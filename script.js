function usuarioDigita() {
    let qtdTemperaturas = parseInt(prompt("Digite um número maior que zero e menor que dez para ser a quantidade de temperaturas"));
    let temperaturas = [];
    let qtdNomes = parseInt(prompt("Digite um número maior que zero e menor que dez para ser a quantidade de nomes"));
    let nomes = [];
    for (let i = 0; i < qtdTemperaturas; i++) {
        temperaturas[i] = parseInt(prompt("Digite a temperatura: " + (i + 1)));
    }
    for (let i = 0; i < qtdNomes; i++) {
        nomes[i] = prompt("Digite o nome: " + (i + 1));
    }
    
    // verifica se no vetor de nomes existe o nome "Eliana" e exibe na tela
    let verificaEliana = nomes.find(nome => nome === "Eliana");
    if (verificaEliana) {
        document.write("Existe o nome Eliana na lista de nomes. <br>");
    }
    else {
        document.write("Não existe o nome Eliana na lista de nomes. <br>");
    }

    // exiba na tela as temperaturas maiores que 20
    let tempMaioresQue20 = temperaturas.filter(temp => temp > 20);
    document.write("Temperaturas maiores que 20: " + tempMaioresQue20 + ". <br>");

    // exiba a posição do nome Carlos caso exista, senão, informe ao usuário
    let verificaIndiceCarlos = nomes.findIndex(nome => nome === "Carlos");
    if (verificaIndiceCarlos != -1) {
        document.write("Existe o nome Carlos na lista e a posição(índice) é: " + verificaIndiceCarlos + ". <br>");
    }
    else {
        document.write("Não existe o nome Carlos na lista. <br>");
    }

    // exiba o cubo dos números do array de números
    let cuboTemperaturas = [];
    temperaturas.forEach(temp => {
        cuboTemperaturas.push(temp * temp * temp);
    })
    document.write("A lista de temperaturas: " + temperaturas + "<br>");
    document.write("A lista de temperaturas ao cubo: " + cuboTemperaturas + "<br>");
}