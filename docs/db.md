# Prototipo e Estudos do Banco de Dados

## ENG
    This database prototype model was created using pseudocode in the https://dbdiagram.io/d application.
## PT-BR
    Essa modelagem de prototipo de banco de dados foi feito com pseudo-código no aplicativo https://dbdiagram.io/d .
## ZH-CH
    该数据库原型模型是使用伪代码在 https://dbdiagram.io/d 应用程序中创建的。

\`\`\
Table cliente {
  id_cliente int [increment, primary key]
  nome_cliente varchar(50) [not null]
  email_cliente varchar [not null, unique]
  senha_cliente varchar(100) [not null]
  n_contato_cliente varchar(14) [not null]
  cpf varchar(11) [not null, unique]
}

Table endereco {
  id_endereco int [increment, primary key]
  id_cliente int [not null]
  cep_endereco varchar(8) [not null]
  bairro varchar [not null]
  rua_endereco varchar(100) [not null]
  numero_endereco varchar(5) [not null]
  complemento_endereco varchar(250)
}

Table produto {
  id_produto int [increment, primary key]
  nome_produto varchar(50) [not null]
  estoque_produto int [not null]
  estado_estoque_produto bool 
  preco_produto decimal(10,2) [not null]
  tipo_produto tipos_de_produtos
  descricao_produto varchar(200)
  imagem_url varchar
  cep_produto varchar(8) // Apenas CEP da cidade do produto para calculos de tempo de entrega.
  peso_gramas decimal [not null]
  comprimento_cm decimal [not null]
  altura_cm decimal [not null]
  largura_cm decimal [not null]
}

Table pedido {
  id_pedido int [increment, primary key]
  id_cliente int [not null]
  preco_pedido decimal(10, 2)
  data_pedido timestamp [not null]
  data_pagamento timestamp 
  data_cancelamento timestamp 
  data_chegada timestamp 
  tipo_pagamento varchar [not null]
  estado_pedido estados_do_pedido
  valor_frete decimal(10, 2) [not null]
  codigo_rastreio varchar [not null]
}

Table itens_pedidos {
  id_itens_pedidos int [increment, primary key]
  id_pedido int [not null]
  id_produto int [not null]
  itens_quantidade int [not null]
  preco_unitario decimal(10, 2) [not null]
}

Enum tipos_de_produtos {
  "Memoria Ram"
  "Placa Mãe"
  "Processador"
  "SSD"
  "HD"
  "Placa de Video"
  "Air Cooler"
  "Water Cooler"
  "Monitor"
  "Mouse"
  "Fones"
  "Cabo"
  "Outro"
}

Enum tipos_de_pagamentos {
  ""  // I'm deciding how I'm going to handle that part.
}

Enum estados_do_pedido {
  "Aguardando Pagamento"
  "Pago"
  "Em transporte"
  "Finalizado"
  "Cancelado"
}

Ref: cliente.id_cliente < endereco.id_cliente
Ref: cliente.id_cliente < pedido.id_cliente
Ref: pedido.id_pedido < itens_pedidos.id_pedido
Ref: produto.id_produto < itens_pedidos.id_produto

\`\`\