var button = document.getElementById('button');
var email = document.getElementById('email');
var senha = document.getElementById('senha');

button.addEventListener("click", function(){
    if (email.value == '' || senha.value == ''){
        alert("O campo e-mail ou senha não estão preenchidos.");
    }else{
        alert("Campos preenchidos com sucesso");
    }
});