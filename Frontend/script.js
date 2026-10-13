// 1. Interceptação do formulário
document.getElementById('formCadastro').addEventListener('submit', function(event) {
    // 2. Prevenção: bloqueia o reload padrão do navegador
    event.preventDefault(); 

    // 3. Extração: coleta os valores dos inputs definidos no HTML
    const nome = document.getElementById('nome_cliente').value;
    const email = document.getElementById('email_cliente').value;
    const cpf = document.getElementById('cpf').value;
    const contato = document.getElementById('n_contato_cliente').value;
    const senha = document.getElementById('senha_cliente').value;

    // 4. Estruturação: monta o objeto Javascript (chaves alinhadas com o req.body do servidor)
    const dadosCliente = {
        nome_cliente: nome,
        email_cliente: email,
        cpf: cpf,
        n_contato_cliente: contato,
        senha_cliente: senha
    };

    // 5. Comunicação Assíncrona via Fetch API
    fetch('http://localhost:3000/api/cadastro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Avisa o Express que o pacote é um JSON
        },
        body: JSON.stringify(dadosCliente) // Serialização obrigatória do objeto
    })
    .then(respostaServidor => respostaServidor.json()) // Converte a resposta do servidor para objeto
    .then(dadosRetornados => {
        // Manipulação da resposta na interface
        if (dadosRetornados.mensagem === "Cliente resgistrado com sucesso no Banco de Dados!") {
            alert("Cadastro efetuado com sucesso!");
            window.location.href = "login.html"; // Redirecionamento após o cadastro
        } else {
            alert("Falha no cadastro: " + dadosRetornados.mensagem);
        }
    })
    .catch(erroDeRede => {
        console.error("Erro na comunicação com o backend:", erroDeRede);
        alert("O servidor está offline ou inacessível.");
    });
});