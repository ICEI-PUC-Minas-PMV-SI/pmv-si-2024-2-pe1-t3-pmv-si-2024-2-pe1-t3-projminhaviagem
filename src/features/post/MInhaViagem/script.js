let postagens = JSON.parse(localStorage.getItem("postagens")) || []; // Carrega do LocalStorage ou inicializa vazio.

// Exibe as postagens ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    listarPostagens();
    mostrarTelaDeListagem(); // Exibe a lista de postagens ao carregar
});

// Função para alternar telas
function mostrarTelaDeListagem() {
    document.querySelector(".formulario-postagem").style.display = "none"; // Oculta o formulário
    document.querySelector(".lista-postagens-container").style.display = "block"; // Mostra a listagem
}

function mostrarTelaDeCriacao() {
    document.querySelector(".formulario-postagem").style.display = "block"; // Mostra o formulário
    document.querySelector(".lista-postagens-container").style.display = "none"; // Oculta a listagem
}

// Função para listar postagens com a área de comentários
function listarPostagens() {
    const container = document.querySelector(".lista-postagens");
    container.innerHTML = ""; // Limpa o conteúdo atual

    postagens.forEach((post, index) => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("postagem");

        // Adicionando conteúdo da postagem
        postDiv.innerHTML = `
            <h3>${post.titulo}</h3>
            <p>${post.mensagem}</p>
            <div class="acoes">
                <button class="editar" data-index="${index}">Editar</button>
                <button class="excluir" data-index="${index}">Excluir</button>
            </div>
            <div class="comentarios">
                <h4>Comentários</h4>
                <div class="lista-comentarios" data-index="${index}">
                    <!-- Comentários serão adicionados aqui -->
                </div>
                <textarea class="campo-comentario" placeholder="Escreva um comentário..." data-index="${index}"></textarea>
                <button class="adicionar-comentario" data-index="${index}">Comentar</button>
            </div>
        `;

        container.appendChild(postDiv);

        // Exibe os comentários existentes
        if (post.comentarios) {
            const comentariosContainer = postDiv.querySelector(".lista-comentarios");
            post.comentarios.forEach((comentario) => {
                const comentarioDiv = document.createElement("p");
                comentarioDiv.textContent = comentario;
                comentariosContainer.appendChild(comentarioDiv);
            });
        }
    });
}
// Função para listar postagens com a área de comentários
function listarPostagens() {
    const container = document.querySelector(".lista-postagens");
    container.innerHTML = ""; // Limpa o conteúdo atual

    postagens.forEach((post, index) => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("postagem");

        // Adicionando conteúdo da postagem
        postDiv.innerHTML = `
            <h3>${post.titulo}</h3>
            <p>${post.mensagem}</p>
            <div class="acoes">
                <button class="editar" data-index="${index}">Editar</button>
                <button class="excluir" data-index="${index}">Excluir</button>
            </div>
            <div class="comentarios">
                <h4>Comentários</h4>
                <div class="lista-comentarios" data-index="${index}">
                    <!-- Comentários serão adicionados aqui -->
                </div>
                <textarea class="campo-comentario" placeholder="Escreva um comentário..." data-index="${index}"></textarea>
                <button class="adicionar-comentario" data-index="${index}">Comentar</button>
            </div>
        `;

        container.appendChild(postDiv);

        // Exibe os comentários existentes
        if (post.comentarios) {
            const comentariosContainer = postDiv.querySelector(".lista-comentarios");
            post.comentarios.forEach((comentario, comentarioIndex) => {
                const comentarioDiv = document.createElement("div");
                comentarioDiv.classList.add("comentario-item");
                comentarioDiv.innerHTML = `
                    <p>${comentario}</p>
                    <button class="editar-comentario" data-post-index="${index}" data-comentario-index="${comentarioIndex}">Editar</button>
                    <button class="excluir-comentario" data-post-index="${index}" data-comentario-index="${comentarioIndex}">Excluir</button>
                `;
                comentariosContainer.appendChild(comentarioDiv);
            });
        }
    });
}

// Função para adicionar comentários
document.querySelector(".lista-postagens").addEventListener("click", (event) => {
    if (event.target.classList.contains("adicionar-comentario")) {
        const index = event.target.getAttribute("data-index");
        const comentarioInput = document.querySelector(`.campo-comentario[data-index="${index}"]`);
        const comentarioTexto = comentarioInput.value.trim();

        if (comentarioTexto) {
            // Adiciona o comentário na postagem correspondente
            postagens[index].comentarios = postagens[index].comentarios || [];
            postagens[index].comentarios.push(comentarioTexto);
            salvarNoLocalStorage();
            listarPostagens(); // Atualiza a lista de postagens
            comentarioInput.value = ""; // Limpa o campo de comentário
        } else {
            alert("Por favor, escreva algo antes de comentar!");
        }
    }
});

// Função para editar comentários
document.querySelector(".lista-postagens").addEventListener("click", (event) => {
    if (event.target.classList.contains("editar-comentario")) {
        const postIndex = event.target.getAttribute("data-post-index");
        const comentarioIndex = event.target.getAttribute("data-comentario-index");
        const comentarioAtual = postagens[postIndex].comentarios[comentarioIndex];

        const novoComentario = prompt("Edite o comentário:", comentarioAtual);
        if (novoComentario !== null && novoComentario.trim() !== "") {
            postagens[postIndex].comentarios[comentarioIndex] = novoComentario.trim();
            salvarNoLocalStorage();
            listarPostagens(); // Atualiza a lista de postagens
        }
    }
});

// Função para excluir comentários
document.querySelector(".lista-postagens").addEventListener("click", (event) => {
    if (event.target.classList.contains("excluir-comentario")) {
        const postIndex = event.target.getAttribute("data-post-index");
        const comentarioIndex = event.target.getAttribute("data-comentario-index");

        if (confirm("Tem certeza que deseja excluir este comentário?")) {
            postagens[postIndex].comentarios.splice(comentarioIndex, 1); // Remove o comentário do array
            salvarNoLocalStorage();
            listarPostagens(); // Atualiza a lista de postagens
        }
    }
});


// Salva as postagens no LocalStorage
function salvarNoLocalStorage() {
    localStorage.setItem("postagens", JSON.stringify(postagens));
}

// Adiciona uma nova postagem
document.querySelector(".enviar").addEventListener("click", (event) => {
    event.preventDefault();

    const titulo = document.querySelector("#titulo").value.trim();
    const mensagem = document.querySelector("#mensagem").value.trim();

    if (titulo && mensagem) {
        const novaPostagem = { titulo, mensagem };
        postagens.push(novaPostagem);
        salvarNoLocalStorage();
        listarPostagens();
        document.querySelector("#titulo").value = ""; // Limpa os campos
        document.querySelector("#mensagem").value = "";
        mostrarTelaDeListagem(); // Alterna para a tela de listagem
        // Mostra a mensagem de sucesso
        const mensagemSucesso = document.querySelector("#mensagem-sucesso");
        mensagemSucesso.classList.remove("oculto");
        mensagemSucesso.classList.add("visivel");

        // Remove a mensagem após 3 segundos
        setTimeout(() => {
            mensagemSucesso.classList.remove("visivel");
            mensagemSucesso.classList.add("oculto");
        }, 3000);
    } else {
        alert("Preencha todos os campos!");
    }
});

// Edita ou exclui postagens
document.querySelector(".lista-postagens").addEventListener("click", (event) => {
    const index = event.target.getAttribute("data-index");

    if (event.target.classList.contains("editar")) {
        const postagem = postagens[index];
        document.querySelector("#titulo").value = postagem.titulo;
        document.querySelector("#mensagem").value = postagem.mensagem;

        postagens.splice(index, 1); // Remove a postagem original para ser substituída
        salvarNoLocalStorage();
        listarPostagens();
        mostrarTelaDeCriacao(); // Alterna para a tela de criação para editar
    }

    if (event.target.classList.contains("excluir")) {
        if (confirm("Tem certeza que deseja excluir esta postagem?")) {
            postagens.splice(index, 1); // Remove a postagem do array
            salvarNoLocalStorage();
            listarPostagens();
        }
    }
});

// Botão "Nova Postagem" para alternar para a tela de criação
document.querySelector(".nova-postagem").addEventListener("click", () => {
    mostrarTelaDeCriacao();
});

// Botão de cancelar
document.querySelector(".cancelar").addEventListener("click", () => {
    document.querySelector("#titulo").value = "";
    document.querySelector("#mensagem").value = "";
    mostrarTelaDeListagem(); // Alterna para a tela de listagem ao cancelar
});

// Funcionalidade para anexos e links

document.querySelector(".fa-link").addEventListener("click", () => {
    const link = prompt("Insira a URL:");
    if (link) {
        const linkTag = `[${link}](${link})`; // Exemplo em Markdown
        document.querySelector("#mensagem").value += linkTag;
    }
});

// Funcionalidade para adicionar imagem
document.querySelector(".fa-image").addEventListener("click", () => {
    const inputFile = document.createElement("input");
    inputFile.type = "file";
    inputFile.accept = "image/*";

    inputFile.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file) {
            const imgPreview = document.createElement("img");
            imgPreview.src = URL.createObjectURL(file);
            imgPreview.style.maxWidth = "200px";
            imgPreview.style.marginTop = "10px";

            document.querySelector(".message-container").appendChild(imgPreview);
        }
    });

    inputFile.click();
});