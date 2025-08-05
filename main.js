const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhosenha = 12;
numeroSenha.textContent = tamanhosenha;
const letrasMaiusculas = ABCDEFGHIJKLMNOPQRSTUVWXYZ
const letrasMinusculas = abcdefghijklmnopqrstuvwxyz
const numeros = '0123456789';
const simbolos = '!$#%*?';
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('.forca')

const botoes = document.querySelector('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho() {
    if (tamanhosenha > 1) {
        // tamanhosenha = tamanhosenha -1;
        tamanhosenha--;
    }
    numeroSenha.textContent = tamanhosenha;
    geralSenha ();
}

function aumentaTamanho(){
    if (tamanhosenha < 20) {
        //tamanhosenha = tamanhosenha +1;
        tamanhosenha ++;
    }
    numeroSenha.textContent = tamanhosenha;
    geraSenha();
}

geraSenha();

function geraSenha(){
    let senha = ""
    for (let i = 0; i < tamanhosenha;i++){
        let numeroAleatorio = Math.random()*letrasMaiusculas.length;
   const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhosenha = 12;
numeroSenha.textContent = tamanhosenha;
const letrasMaiusculas = ABCDEFGHIJKLMNOPQRSTUVWXYZ
const letrasMinusculas = abcdefghijklmnopqrstuvwxyz

const botoes = document.querySelector('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho() {
    if (tamanhosenha > 1) {
        // tamanhosenha = tamanhosenha -1;
        tamanhosenha--;
    }
    numeroSenha.textContent = tamanhosenha;
    geralSenha ();
}

function aumentaTamanho(){
    if (tamanhosenha < 20) {
        //tamanhosenha = tamanhosenha +1;
        tamanhosenha ++;
    }
    numeroSenha.textContent = tamanhosenha;
    geraSenha();
}

geraSenha();

function geraSenha(){
    let senha = ""
    for (let i = 0; i < tamanhosenha;i++){
        let numeroAleatorio = Math.random()*letrasMaiusculas.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + letrasMaiusculas(numeroAleatorio);
    }
    campoSenha.value = senha
}



for (i = 0; i < checkbox.length; i++) {
    checkbox [i].onclick = geraSenha;
}
     numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + letrasMaiusculas(numeroAleatorio);
    }
    campoSenha.value = senha
}



for (i = 0; i < checkbox.length; i++) {
    checkbox [i].onclick = geraSenha;
}

geraSenha();

function geralSenha()
