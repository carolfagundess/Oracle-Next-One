alert('Boas vindas ao Secret Number');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while(numeroSecreto != chute){
    chute = prompt('Escolha um número entre 1 e 100 : ');

    if(numeroSecreto == chute ){
        break;
    } else {
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        }else{
            alert(`O número secreto é maior que ${chute}`);
        }

        tentativas++;
    }
}

let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Você acertou o número secreto: ${numeroSecreto} com ${tentativas} ${palavraTentativas}. Parabéns!`);
