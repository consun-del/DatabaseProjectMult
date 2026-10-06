const sqlite3 = require(`sqlite3`).verbose(); // O .verbose da um susto e faz o mudo falar
const path = require(`path`); // Pra quem se perder toda hora ele ajuda 
const db = new sqlite3.Database(path.resolve(__dirname, `./database.db`));  // Aqui o dirname e tipo a sua mae mandando voce achar logo oque esta procurando antes que ela va procurar

db.run('PRAGMA foreign_keys = ON', (err) => {
    if (err) {
        console.error(`Não deu certo no Banco de Dados não em: ${err.message}`);
    } 
    else {
        console.log(`Banco de Dados conectado e segurança ativada! Eu acho que é isso...`);
    }
});

module.exports = db;
