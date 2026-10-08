const express = require(`express`); // Ele faz acontecer...
const cors = require(`cors`); // Guarda de transito chato
const app =  express(); // Dando vida para o site

const db = require('./database/database.js');

app.use(cors()); 
app.use(express.json()); // Ensinando o site a funcionar corretamente

app.get('/api/status', (req, res)  => {res.json({mensagem: "Desculpe, mas o servidor está funcionando corretamente!"}); });

app.post('/api/cadastro', (req, res) => {
    const nome_cliente = req.body.username;
    const email_cliente = req.body.email;
    const senha_cliente = req.body.password;

    const QueryInserir = `INSERT INTO clientes (nome_cliente, email_cliente, senha_cliente) VALUES (?, ?, ?)`;

    db.run(QueryInserir, [nome_cliente, email_cliente, senha_cliente], (err) => { 
        if (err) {
            console.error("Erro ao registrar o cliente no Banco de Dados!", err.message);
            res.status(500).json({mensagem : "Erro ao registrar o cliente no Banco de Dados!"});
        } else {
            console.log("Cliente registrado com sucesso no Banco de Dados!");
            res.json({mensagem : "Cliente resgistrado com sucesso no Banco de Dados!"});
        };
    }); 
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000!'));
