let idade = parseInt(prompt('Informe a idade: '))
let body = document.body;
let msg = document.getElementById('Mensagem')

if(idade<=18){
    body.style.background = 'Darkred';
    msg.style.fontSize = 'xx-large';
    msg.style.color = 'Cornsilk';
    msg.innerHTML = 'Voce e menor de idade';
}else{
    body.style.background = 'Aquamarine';
    msg.style.fontSize = 'xx-large';
    msg.style.color = 'CadeBlue';
    msg.innerHTML = 'Voce e maior de idade';
}