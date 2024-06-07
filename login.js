const users = {
    "desenvolvedor": "dev#771",
    "gabriel": "gabriel$881",
    "cliente": "cliente#991"
};

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('login-error');

    if (users[username] && users[username] === password) {
        localStorage.setItem('authenticated', true);
        localStorage.setItem('authTime', new Date().getTime());
        window.location.href = 'index_monitor_acoes.html';
    } else {
        errorDiv.textContent = 'Usuário ou senha incorretos';
    }
}

function checkAuthentication() {
    const isAuthenticated = localStorage.getItem('authenticated');
    const authTime = localStorage.getItem('authTime');
    const currentTime = new Date().getTime();
    const oneDay = 24 * 60 * 60 * 1000; // 24 horas em milissegundos

    if (isAuthenticated && (currentTime - authTime) < oneDay) {
        window.location.href = 'index_monitor_acoes.html';
    } else {
        localStorage.removeItem('authenticated');
        localStorage.removeItem('authTime');
    }
}

window.onload = checkAuthentication;
