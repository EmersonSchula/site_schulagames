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

// Configuração do Google Sign-In
function handleGoogleCredentialResponse(response) {
    // Obter o token de ID do Google
    const idToken = response.credential;
    
    // Decodificar o token JWT (apenas para fins de demonstração)
    // Em um ambiente de produção, isso deveria ser validado no servidor
    const base64Url = idToken.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    const payload = JSON.parse(jsonPayload);
    
    // Extrair dados do usuário do token
    const { name, email, picture } = payload;
    
    console.log(`Login com Google: Nome: ${name}, E-mail: ${email}`);
    
    // Salvar informações do usuário no sessionStorage
    sessionStorage.setItem('usuarioNome', name);
    sessionStorage.setItem('usuarioEmail', email);
    sessionStorage.setItem('usuarioFoto', picture);
    sessionStorage.setItem('usuarioLogado', 'true');
    
    // Redirecionar para a página inicial ou mostrar mensagem de sucesso
    alert(`Login com Google realizado com sucesso! Bem-vindo(a), ${name}!`);
    window.location.href = 'index.html';
}

// Inicializar os botões do Google quando a página estiver totalmente carregada
window.addEventListener('load', function() {
    // Verificar se estamos na página de contato que tem os botões do Google
    if (document.getElementById('g_id_signin')) {
        // Configuração do botão de login
        google.accounts.id.initialize({
            client_id: '123456789-abcdefghijklmnopqrstuvwxyz.apps.googleusercontent.com', // Substitua pelo seu Client ID real
            callback: handleGoogleCredentialResponse,
            auto_select: false
        });

        // Renderizar botão de login
        google.accounts.id.renderButton(
            document.getElementById('g_id_signin'), {
                theme: 'outline',
                size: 'large',
                type: 'standard',
                text: 'signin_with',
                shape: 'rectangular',
                logo_alignment: 'center',
                width: 280
            }
        );

        // Renderizar botão de cadastro (usa o mesmo callback que o login)
        if (document.getElementById('g_id_signup')) {
            google.accounts.id.renderButton(
                document.getElementById('g_id_signup'), {
                    theme: 'outline',
                    size: 'large',
                    type: 'standard',
                    text: 'signup_with',
                    shape: 'rectangular',
                    logo_alignment: 'center',
                    width: 280
                }
            );
        }

        // Também mostrar o One Tap Login se o usuário não tiver feito login ainda
        if (!sessionStorage.getItem('usuarioLogado')) {
            google.accounts.id.prompt();
        }
    }
    
    // Verificar se o usuário está logado ao carregar qualquer página
    verificarUsuarioLogado();
});

// Função para verificar se o usuário está logado e atualizar a interface
function verificarUsuarioLogado() {
    const usuarioLogado = sessionStorage.getItem('usuarioLogado');
    const usuarioNome = sessionStorage.getItem('usuarioNome');
    
    // Se existir um elemento para mostrar informações do usuário (pode ser adicionado em páginas futuras)
    const userInfoEl = document.getElementById('user-info');
    if (userInfoEl && usuarioLogado) {
        userInfoEl.textContent = `Olá, ${usuarioNome}!`;
        userInfoEl.style.display = 'block';
        
        // Mostrar botão de logout se o usuário estiver logado
        const logoutBtnEl = document.getElementById('logout-btn');
        if (logoutBtnEl) {
            logoutBtnEl.style.display = 'block';
            logoutBtnEl.addEventListener('click', fazerLogout);
        }
    }
}

// Função para fazer logout
function fazerLogout() {
    // Limpar dados do usuário do sessionStorage
    sessionStorage.removeItem('usuarioNome');
    sessionStorage.removeItem('usuarioEmail');
    sessionStorage.removeItem('usuarioFoto');
    sessionStorage.removeItem('usuarioLogado');
    
    // Atualizar a página atual
    window.location.reload();
}