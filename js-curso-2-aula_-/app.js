let numeroSecreto = gerarNumeroAleatorio(); 
let tentativas = 1;
//mostrar o número que foi gerado
console.log(numeroSecreto);

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Secret Number Game');
exibirTextoNaTela('p', 'Escolha um nímero entre 1 e 10');

function verificarChute(){
    //testar se o botao foi clicado
    console.log('O botão foi clicado');
    //pegar o chute do user
    let chute = document.querySelector('input').value;
    //validando se é true ou false
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Parabéns! Você acertou o número');
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas = `O número secreto foi descoberto em ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor que o chute');
        }else{
            exibirTextoNaTela('p', 'O número secreto é maior que o chute');
        }
        tentativas++;

    }

}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}

