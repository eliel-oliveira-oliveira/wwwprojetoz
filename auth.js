function checkAuthentication() {
    const isAuthenticated = localStorage.getItem('authenticated');
    const authTime = localStorage.getItem('authTime');
    const currentTime = new Date().getTime();
    const oneDay = 24 * 60 * 60 * 1000; // 24 horas em milissegundos

    if (!isAuthenticated || (currentTime - authTime) >= oneDay) {
        localStorage.removeItem('authenticated');
        localStorage.removeItem('authTime');
        window.location.href = 'login.html';
    }
}

function logoff() {
    localStorage.removeItem('authenticated');
    localStorage.removeItem('authTime');
    window.location.href = 'login.html';
}

window.onload = checkAuthentication;
