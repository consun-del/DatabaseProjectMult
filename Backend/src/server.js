const express = require(`express`); // Ele faz acontecer...
const cors = require(`cors`); // Guarda de transito chato
const app =  express(); // Dando vida para o site

app.use(cors()); 
app.use(express.json()); // Ensinando o site a funcionar corretamente

app.get('/api/status', (req, res)  => {res.json({mensagem: "Desculpe, mas o servidor está funcionando corretamente!"}); });

app.listen(3000, () => console.log('Servidor rodando na porta 3000!'));
