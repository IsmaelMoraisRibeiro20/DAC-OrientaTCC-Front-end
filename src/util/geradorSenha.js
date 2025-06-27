function gerarSenha() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,?';
    var senha = '';
    for (var i = 0; i < 6; i++) {
        senha += chars[Math.floor(Math.random() * chars.length)];
    }
    return senha;
}

export default gerarSenha;