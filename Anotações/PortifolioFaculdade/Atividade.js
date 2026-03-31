// Seleciona os elementos do HTML e os armazena em variáveis
var button = document.getElementById('button');
var email = document.getElementById('email');
var senha = document.getElementById('senha');

// Adiciona um "escutador de eventos": quando o botão for clicado, executa a função
button.addEventListener("click", function(){
    
    // Verifica se algum dos campos está vazio
    if (email.value == '' || senha.value == ''){
        // Se estiver vazio, exibe um alerta de erro
        alert("O campo e-mail ou senha não estão preenchidos.");
    } else {
        // Se ambos estiverem preenchidos, exibe um alerta de sucesso
        alert("Campos preenchidos com sucesso");
    }
});