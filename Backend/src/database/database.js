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

const queryCriarCliente = `
    CREATE TABLE IF NOT EXISTS clientes (
        id_cliente INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        nome_cliente VARCHAR(100) NOT NULL,
        email_cliente VARCHAR(100) UNIQUE NOT NULL,
        senha_cliente VARCHAR(100) NOT NULL,
        n_contato_cliente VARCHAR(14) NOT NULL,
        cpf VARCHAR(14) UNIQUE NOT NULL
    );
`;

const queryCriarProduto = `
    CREATE TABLE IF NOT EXISTS produtos (
        id_produto INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        nome_produto VARCHAR(75) NOT NULL,
        estoque_produto INTEGER NOT NULL,
        estado_estoque_produto TEXT NOT NULL,
        preco_produto REAL NOT NULL,
        tipo_pagamento TEXT NOT NULL, -- Fazer estudos de como eu vou lidar com essa parte.
        descricao_produto VARCHAR(300),
        cep_produto VARCHAR(8) NOT NULL,
        tipos_de_produtos TEXT CHECK(tipos_de_produtos IN ('Memoria RAM', 'Placa Mãe', 'Processador', 'SSD', 'HD', 'Placa de Video', 'Air Cooler', 'Water Cooler', 'Monitor', 'Mause', 'Fones', 'Cabos', 'Outro'))  
    );
`;

const queryCriarEndereco = `
    CREATE TABLE IF NOT EXISTS enderecos (
        id_endereco INTEGER PRIMARY KEY AUTOINCREMENT,
        id_cliente INTEGER NOT NULL,
        cep_endereco VARCHAR(8) NOT NULL,
        rua_endereco VARCHAR(100) NOT NULL,
        numero_endereco VARCHAR(5) NOT NULL,
        complemento_endereco VARCHAR(250),
        FOREIGN KEY (id_cliente) REFERENCES clientes (id_cliente) -- Talves precise de um ON DELETE & ON UPDATE fazer a verificação sobre se tenho que integrar em todas as tabelas.        
    );
`;

const queryCriarPedidos = `
    CREATE TABLE IF NOT EXISTS pedidos (
        id_pedido INTEGER PRIMARY KEY AUTOINCREMENT,
        id_cliente INTEGER NOT NULL,
        preco_pedido REAL,
        data_pedido TIMESTAMP NOT NULL,
        data_pagamento TIMESTAMP,
        data_cancelamento TIMESTAMP,
        data_chegada TIMESTAMP,
        estado_do_pedido TEXT CHECK(estado_do_pedido IN ('Aguardando Pagamento', 'Pago', 'Preparando Pedido', 'Em transtorpote', 'Finalizado', 'Cancelado')),
        FOREIGN KEY (id_cliente) REFERENCES clientes (id_cliente)
    );
`;

const queryCriarIntensPedidos = `
    CREATE TABLE IF NOT EXISTS itens_pedidos (
        id_item_pedido INTEGER PRIMARY KEY AUTOINCREMENT,
        id_pedido INTEGER NOT NULL,
        id_produto INTEGER NOT NULL,
        itens_quantidade INTEGER,
        FOREIGN KEY (id_pedido) REFERENCES pedidos (id_pedido),
        FOREIGN KEY (id_produto) REFERENCES produtos (id_produto)
    );
`;

db.run(queryCriarCliente, (err) => {
    if (err) {
        console.error("Database clientes Falhou.", err.message)
    } else {
        console.log("Database clientes Sucesso.")
    };
});

db.run(queryCriarProduto, (err) => {
    if (err) {
        console.error("Database produtos Falhou.", err.message)
    }
    else {
        console.log("Database produtos Sucesso.")
    };
});

db.run(queryCriarEndereco, (err) => {
    if (err) {
        console.error("Database endereços Falha.", err.message)
    }
    else {
        console.log("Database endereços Sucesso.")
    };
});

db.run(queryCriarPedidos, (err) => { 
    if (err) {
        console.error("Database pedidos Falha.", err.message)
    } 
    else {
        console.log("Database pedidos Sucesso.")
    };
});

db.run(queryCriarIntensPedidos, (err) => { 
    if (err) {
        console.error("Database itens pedidos Falha.", err.message)
    } 
    else {
        console.log("Database intes pedidos Sucesso.")
    };
});

module.exports = db;
