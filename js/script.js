function realizarLogin() {
    var email = prompt("Digite seu e-mail:");
    var senha = prompt("Digite sua senha:");

    if (email === "admin" && senha === "123456") {
        alert("Login bem-sucedido como administrador");
        exibirConteudo();
        localStorage.setItem("loginRealizado", "true"); // Armazena a informação de login realizado no localStorage
    } else {
        alert("Login inválido. Tente novamente.");
        realizarLogin();
    }
}

function exibirConteudo() {
    var conteudo = document.getElementById("conteudo");
    conteudo.style.display = "block";
}

// Verifica se o login já foi realizado anteriormente
var loginRealizado = localStorage.getItem("loginRealizado");
if (loginRealizado === null) {
    // Chama a função de realizar login apenas na primeira vez que o site é aberto
    realizarLogin();
} else {
    // Se o login já foi realizado, exibe o conteúdo diretamente
    exibirConteudo();
}

function exibirMensagemBoasVindas() {
    alert("Seja Muito Bem-Vindo(a)! 😄");
}

// Capturando o botão de envio
var btnEnviar = document.querySelector('.btn-block');

// Adicionando o evento de clique
btnEnviar.addEventListener('click', function(event) {
    // Prevenindo o comportamento padrão do botão de envio
    event.preventDefault();

    // Capturando os valores dos campos do formulário
    var nome = document.querySelector('input[placeholder="Nome completo"]').value;
    var email = document.querySelector('input[placeholder="E-mail"]').value;
    var mensagem = document.querySelector('textarea[placeholder="Messagem"]').value;

    // Validando os campos
    if (nome === '' || email === '' || mensagem === '') {
        // Exibindo mensagem de erro ou realizando ações específicas
        alert('Por favor, preencha todos os campos!');
    } else if (!email.includes('@')) {
        // Verificando se o campo de e-mail contém o símbolo '@'
        alert('Por favor, digite um e-mail válido!');
    } else {
        // Caso todos os campos sejam preenchidos corretamente, você pode prosseguir com o envio do formulário ou realizar outras ações necessárias.
        alert('Formulário enviado com sucesso!');
    }
});
