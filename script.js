// script.js
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const loginEmail = document.getElementById('loginEmail').value;
    const loginSenha = document.getElementById('loginSenha').value;

    // Enviar dados para o servidor
    console.log(`E-mail: ${loginEmail}, Senha: ${loginSenha}`);

    // Redirecionar para a página index.html após o login
    window.location.href = 'index.html';
});

// script.js
const cadastroForm = document.getElementById('cadastro-form');

cadastroForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmacaoSenha = document.getElementById('confirmacao-senha').value;

    if (senha !== confirmacaoSenha) {
        alert('Senhas não conferem!');
        return;
    }

    // Enviar dados para o servidor
    console.log(`Nome: ${nome}, E-mail: ${email}, Senha: ${senha}`);

    // Redirecionar para a página index.html após o login
    window.location.href = 'index.html';
});