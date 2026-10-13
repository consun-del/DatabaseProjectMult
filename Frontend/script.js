document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nome = document.getElementById('nome_cliente').value;
    const email = document.getElementById('email_cliente').value;
    const cpf = document.getElementById('cpf').value;
    const contato = document.getElementById('n_contato_cliente').value;
    const senha = document.getElementById('senha_cliente').value;

    const dadosCliente = {
        nome_cliente: nome,
        email_cliente: email,
        cpf: cpf,
        n_contato_cliente: contato,
        senha_cliente: senha
    };

    fetch('http://localhost:3000/api/cadastro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(dadosCliente) 
    })
    .then(respostaServidor => respostaServidor.json()) 
    .then(dadosRetornados => {
        if (dadosRetornados.mensagem === "Cliente resgistrado com sucesso no Banco de Dados!") {
            alert("Cadastro efetuado com sucesso!");
            window.location.href = "login.html"; 
        } else {
            alert("Falha no cadastro: " + dadosRetornados.mensagem);
        }
    })
    .catch(erroDeRede => {
        console.error("Erro na comunicação com o backend:", erroDeRede);
        alert("O servidor está offline ou inacessível.");
    });
});

const formLogin = document.getElementById('formLogin');
if (formLogin) {
    formLogin.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const email = document.getElementById('email_cliente').value;
        const senha = document.getElementById('senha_cliente').value;

        const dadosLogin = {
            email_cliente: email,
            senha_cliente: senha
        };

        fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosLogin) 
        })
        .then(respostaServidor => respostaServidor.json())
        .then(dadosRetornados => {
            if (dadosRetornados.mensagem === "Sucesso no Login.") {
                alert("Login efetuado com sucesso!");
                window.location.href = "index.html";
            } else {
                alert("Falha no login: " + dadosRetornados.mensagem);
            }
        })
        .catch(erroDeRede => {
            console.error("Erro na comunicação com o backend:", erroDeRede);
            alert("O servidor está offline ou inacessível.");
        });
    });
}
