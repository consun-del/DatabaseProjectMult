const formCadastro = document.getElementById('formCadastro');

if (formCadastro) {
    formCadastro.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const dadosCliente = {
            nome_cliente: document.getElementById('nome_cliente').value,
            email_cliente: document.getElementById('email_cliente').value,
            cpf: document.getElementById('cpf').value,
            n_contato_cliente: document.getElementById('n_contato_cliente').value,
            senha_cliente: document.getElementById('senha_cliente').value
        };

        fetch('http://localhost:3000/api/cadastro', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dadosCliente)
        })
        .then(res => res.json())
        .then(dados => {
            if (dados.mensagem === "Cliente resgistrado com sucesso no Banco de Dados!") {
                alert("Cadastro efetuado!");
                window.location.href = "login.html";
            } else { alert("Erro: " + dados.mensagem); }
        });
    });
}

const formLogin = document.getElementById('formLogin');

if (formLogin) { 
    formLogin.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const dadosLogin = {
            email_cliente: document.getElementById('email_cliente').value,
            senha_cliente: document.getElementById('senha_cliente').value
        };

        fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dadosLogin) 
        })
        .then(res => res.json())
        .then(dados => {
            if (dados.mensagem === "Sucesso no Login.") {
                alert("Login efetuado!");
                window.location.href = "index.html";
            } else { alert("Falha: " + dados.mensagem); }
        });
    });
}
