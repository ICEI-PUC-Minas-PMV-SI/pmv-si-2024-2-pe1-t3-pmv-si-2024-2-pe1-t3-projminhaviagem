function insertHeader() {
    var nomeUsuario = getUserName();

    function getUserName() {
        if (localStorage.getItem("logado") == 1) {
            return localStorage.getItem("nome").split(" ")[0];
        } else {
            return "Convidado";
        }
    }

    const headerHTML = `
        <header>
            <div>
                <i class="bi bi-geo-alt"></i>
                Minha Viagem
            </div>
            <div id="profileIcon" class="profile-icon"><span style="padding-right: 20px">${nomeUsuario}</span><i class="bi bi-person-circle"></i></div>
            <div id="loginDialog" class="login-dialog">
                <div id="deslogadoContent" class="login-dialog-content">
                    <div class="input-login">
                        <i class="bi bi-person-fill"></i>
                        <input type="text" id="userLoginInput"/>
                    </div>
                    <div class="input-login">
                        <i class="bi bi-key-fill"></i>
                        <input type="password" id="userPwdInput"/>
                    </div>
                    <a class="login-text" id="loginText">Login</a>
                    <a style="text-decoration: none; color: inherit;" href="/src/features/cadastro/index.html" class="login-text">Cadastrar</a>
                </div>

                <div id="logadoContent" class="login-dialog-content">
                    <p class="login-text">Bem vindo, ${nomeUsuario}.</p>
                    <br></br>
                    <a class="login-text" id="logoutText">Sair</a>
                </div>
            </div>
        </header>
        <nav>
            <div class="nav-bar">
                <a href="/src/features/homepage/home.html"> <i class="bi bi-star-fill"></i> Explorar </a>
                <a href="/src/features/forum/index.html"> <i class="bi bi-star-fill"></i>Comunidade</a>
                <a href="/src/features/meu_espaco/index.html"> <i class="bi bi-star-fill"></i>Meu espaço</a>
            </div>
        </nav>
    `;

    // Insere o header
    document.body.insertAdjacentHTML("afterbegin", headerHTML);

    const navLinks = document.querySelectorAll(".nav-bar a");
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            localStorage.setItem("activeLink", link.getAttribute("href"));
        });
    });

    const activeLink = localStorage.getItem("activeLink");
    if (activeLink) {
        navLinks.forEach((link) => {
            if (link.getAttribute("href") === activeLink) {
                link.classList.add("ativo");
            }
        });
    }

    const profileIcon = document.getElementById("profileIcon");
    const loginDialog = document.getElementById("loginDialog");
    const loginText = document.getElementById("loginText");
    const logoutText = document.getElementById("logoutText");

    document.addEventListener("click", (event) => {
        switchLoginContent();
        if (!profileIcon.contains(event.target) && !loginDialog.contains(event.target)) {
            loginDialog.style.display = "none";
        }
    });

    profileIcon.addEventListener("click", () => {
        const rect = profileIcon.getBoundingClientRect();
        loginDialog.style.top = `${rect.bottom + window.scrollY + 5}px`;
        loginDialog.style.left = `${rect.right - 220 + window.scrollX - loginDialog.offsetWidth}px`;

        loginDialog.style.display = loginDialog.style.display === "flex" ? "none" : "flex";
    });

    loginText.addEventListener("click", () => {
        const userInput = document.getElementById("userLoginInput").value;
        const pwdInput = document.getElementById("userPwdInput").value;
        if (userInput == "" || pwdInput == "") return;

        const isAllowed = login(userInput, pwdInput);

        if (isAllowed) {
            alert("Usuário autenticado");
            var nome = localStorage.getItem("nome");
            nomeUsuario = nome;
            location.reload();
        } else {
            alert("Senha ou usuário incorretos");
        }
    });

    logoutText.addEventListener("click", () => {
        logout();
    });

    function login(usr, pwd) {
        const userStored = localStorage.getItem("usuario");
        const pwdStored = localStorage.getItem("senha");

        if (usr == userStored && pwd == pwdStored) {
            localStorage.setItem("logado", 1);
            return true;
        } else {
            return false;
        }
    }

    function logout(){
        localStorage.setItem("logado", 0);
        switchLoginContent();
        location.reload();
    }

    function switchLoginContent() {
        const logadoContent = document.getElementById("logadoContent");
        const deslogadoContent = document.getElementById("deslogadoContent");
        const estaLogado = localStorage.getItem("logado") == 1 ? true : false;

        if (estaLogado) {
            logadoContent.style.display = "block";
            deslogadoContent.style.display = "none";
        } else {
            deslogadoContent.style.display = "block";
            logadoContent.style.display = "none";
        }
    }
}
