const numeroSenha = document.querySelector(parametro-senha__texto);
let tamanhoSenha = 5;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes [0].onclik = diminuiTamanho;

botoes [1].onclik = aumentaTamanho;

function diminuiTamanho() {
    if(tamanhosenha > 1){
        //tamanhosenha = tamanhosenha -1;
        tamanhosenha--;
    }
    numeroSenha.textContent = tamanhosenha;
    geralSenha ();
}

function aumentaTamanho(){
    if(tamanhosenha < 20){
        //tamanhosenha = tamanhosenha +1;
    
    }
    numeroSenha. textContent = tamanhosenha;
    geralSenha();
}

const campoSenha = document.querySelector('#campo-senha');
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
geralSenha();

function geralSenha(){}