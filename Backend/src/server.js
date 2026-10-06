const express = require('express');
const cors = require('cors');
const db = require('./database/database');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ status: "Servidor Ativo!" });
});

app.get('/produtos', (req, res) => {
    db.all('SELECT * FROM produtos', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message});
            return;
        }
        res.json(rows);
    })
});

const PORTA = 3000;
app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});
