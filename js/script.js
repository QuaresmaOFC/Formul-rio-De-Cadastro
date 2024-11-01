function validarSenha() {
    const senha = document.getElementById("senha").value;
    const confirmacaoSenha = document.getElementById("confirmacao-senha").value;

    if (senha !== confirmacaoSenha) {
        alert("As senhas não coincidem. Tente novamente.");
        return false;
    }
    return true;
}
