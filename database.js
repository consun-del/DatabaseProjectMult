const slqlite3 = require('sqlite3').verbose();

const db = new slqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
    }
    else {
        console.log('Conectado ao banco de dados SQLite.');
        
        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL, 
            preco REAL NOT NULL,
            estoque INTEGER NOT NULL,
            email TEXT NOT NULL UNIQUE
        )`);
    }
});

module.exports = db;
