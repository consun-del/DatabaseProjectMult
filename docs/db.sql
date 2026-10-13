SELECT * FROM demo;

DROP TABLE IF EXISTS clientes;
DROP TABLE IF EXISTS enderecos;
DROP TABLE if EXISTS produto;
drop table if EXISTS pedido;
DROP TABLE if EXISTS itens_pedidos;

CREATE TABLE IF NOT EXISTS clientes (
  id_cliente INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  nome_cliente VARCHAR(100) NOT NULL,
  email_cliente VARCHAR(150) UNIQUE NOT NULL,
  senha_cliente VARCHAR(100) NOT NULL,
  cpf VARCHAR(11),
  n_contato VARCHAR(14),
  cep_cliente VARCHAR(8)
);

CREATE table if not EXISTS enderecos (
  id_endereco INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_cliente INTEGER,
  cep VARCHAR,
  bairro VARCHAR,
  rua VARCHAR,
  numero VARCHAR,
  complemento VARCHAR,
  FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);

CREATE TABLE if NOT EXISTS produto (
  id_produto INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  nome VARCHAR,
  qtd_estoque INTEGER,
  em_estoque INTEGER NOT NULL DEFAULT 1 check(em_estoque IN (0,1)),
  preco REAL,
  tipo VARCHAR,
  descricao VARCHAR,
  cep VARCHAR,
  pesos_g FLOAT,
  comprimento_cm FLOAT,
  largura_cm FLOAT,
  altura_cm FLOAT
);

CREATE TABLE IF NOT EXISTS pedido (
  id_pedido INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_cliente INTEGER,
  preco_total REAL,
  data_pedido INTEGER,
  estado_pedido VARCHAR,
  codigo_rastreio VARCHAR,
  FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);

CREATE TABLE if not EXISTS itens_pedidos (
  id_itens_pedidos INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_pedido INTEGER,
  id_produto INTEGER,
  qtd_iten INTEGER,
  preco_unitario REAL,
  FOREIGN KEY (id_pedido) REFERENCES pedido(id_pedido),
  FOREIGN KEY (id_produto) REFERENCES produto(id_produto)
);

INSERT INTO produto (nome, preco, tipo, qtd_estoque, em_estoque) VALUES
('AMD Processador de desktop Ryzen 7 7800X3D 8 núcleos, 16 threads', 699.99, 'Processador', 10, 1),
('Placa Mãe MSI A520M-A PRO (AM4/2xDDR4/HDMI/DVI-D/M.2/USB 3.2', 376.20, 'Placa-Mãe', 10, 1),
('Placa Mãe Gigabyte A520M K V2 (AM4/2xDDR4/HDMI/D-Sub/M.2/USB 3.2', 408.73, 'Placa-Mãe', 10, 1),
('Placa Mãe AM4/USB 3.1/Type-C/Displayport, HDMI, ASRock, B450M Steel Legend', 689.99, 'Placa-Mãe', 10, 1),
('Placa Mãe MSI B840M GAMING WIFI6E (AM5/2xDDR5/HDMI/DisplayPort/M.2/USB 3.2', 749.55, 'Placa-Mãe', 10, 1),
('Placa Mãe Intel B85 Micro-ATX LGA 1150 DIMM 16GB RAM DDR3 4 Portas SATA III USB 3.0', 265.90, 'Placa-Mãe', 10, 1),
('Placa Mãe Gigabyte B550M AORUS ELITE AM4/DDR4/HDMI/M.2(PCIe,NVMe,SATA3)/VRM Solution/USB3.2 - B550M AORUS ELITE', 699.99, 'Placa-Mãe', 10, 1);

SELECT id_produto, nome, qtd_estoque FROM produto WHERE qtd_estoque > 0 AND em_estoque = 1;
SELECT p.id_pedido, p.data_pedido, p.estado_pedido, p.preco_total FROM pedido p INNER JOIN clientes c ON p.id_cliente = c.id_cliente WHERE c.id_cliente = 1;
SELECT pr.nome, ip.qtd_item, ip.preco_unitario, (ip.qtd_item * ip.preco_unitario) AS subtotal
FROM itens_pedidos ip INNER JOIN produto pr ON ip.id_produto = pr.id_produto WHERE ip.id_pedido = 1;
SELECT c.nome_cliente, COUNT(p.id_pedido) AS total_pedidos
FROM clientes c LEFT JOIN pedido p ON c.id_cliente = p.id_cliente GROUP BY c.id_cliente, c.nome_cliente;

SELECT * FROM produto
