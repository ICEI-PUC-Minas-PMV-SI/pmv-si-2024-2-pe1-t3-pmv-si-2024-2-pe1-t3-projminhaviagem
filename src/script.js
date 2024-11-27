document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio automático do formulário

    const email = document.getElementById('email').value;
    const nome = document.getElementById('nome').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    const termos = document.getElementById('termos').checked;

    if (!termos) {
        alert('Você precisa aceitar os Termos e Condições.');
        return;
    }

    if (senha.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres.');
        return;
    }

    // Exemplo de log para testes (remova em produção)
    console.log({
        email,
        nome,
        dataNascimento,
        usuario,
        senha,
    });

    alert('Conta criada com sucesso!');
});
document.getElementById('email').addEventListener('input', function () {
    const email = this.value;
    if (!email.includes('@')) {
        this.style.borderColor = 'red';
    } else {
        this.style.borderColor = 'green';
    }
});
document.getElementById('criarConta').addEventListener('click', function () {
    this.textContent = 'Criando...';
    setTimeout(() => {
        this.textContent = 'Criar conta';
    }, 2000);
});
