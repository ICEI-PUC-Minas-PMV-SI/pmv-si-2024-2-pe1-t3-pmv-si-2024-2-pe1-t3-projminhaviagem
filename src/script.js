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
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form"); // Seleciona o formulário
  const usuarioInput = document.querySelector("[name='usuario']"); // Campo de usuário
  const senhaInput = document.querySelector("[name='senha']"); // Campo de senha
  form.addEventListener("submit", function (event) {
    // Verifica se os campos estão preenchidos
    if (!usuarioInput.value.trim() || !senhaInput.value.trim()) {
      event.preventDefault(); // Impede o envio do formulário
      alert("Por favor, preencha os campos Usuário e Senha."); // Mostra alerta ao usuário
    }
  });
});
