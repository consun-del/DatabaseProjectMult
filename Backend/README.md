# DatabaseProjectMult

- ENG:
> "A project by students Raphael, Kayky, Renata, Sayuri, Carlos, and Matheus, focused on putting into practice the knowledge gained so far in Mult's "Trilhas do Futuro" course."

- PT-BR:
> "Projeto dos alunos Raphael, Kayky, Renata, Sayuri, Carlos e Matheus, com foco em colocar em prática os conhecimentos adquiridos até o momento no curso "Trilhas do Futuro" da Mult."

- ZH-CH:
> "由学生 Raphael、Kayky、Renata、Sayuri、Carlos 和 Matheus 发起的一个项目，重点是将迄今为止在 Mult 的“Trilhas do Futuro”课程中获得的知识付诸实践。"

---

# ENG

## Team Structure
"Such is the base, such will be the superstructure – Karl Marx"

- Sayuri:
  - Planning; 
  - Documentation; 
  - Manual Logging; 
  - Development Support; 
  - Technical Support; 
  - Feedback & Ideas.

- Renata:
  - Planning; 
  - Documentation; 
  - Manual Logging; 
  - Development Support; 
  - Technical Support; 
  - Feedback & Ideas.

- Raphael: Hello End :P
  - Back-end; 
  - JavaScript; 
  - Node; 
  - SQL; 
  - Planning; 
  - Project Leadership.

- Kayky:
  - Front-end; 
  - HTML; 
  - CSS; 
  - Planning; 
  - Team Leadership.

- Carlos:
  - SQL Modeling; 
  - Planning; 
  - Documentation; 
  - Manual Logging; 
  - Development Support; 
  - Feedback & Ideas; 
  - Flows, Diagrams & Wireframes.

- Matheus:
  - SQL Modeling; 
  - Planning; 
  - Documentation; 
  - Manual Logging; 
  - Development Support; 
  - Feedback & Ideas; 
  - Flows, Diagrams & Wireframes.

## API Contract

### 1. Registration Route (Creating a new account)
**What the Front-end must send to the Back-end:**
\`\`\`json
{
  "nome_cliente": "ExemploNome",
  "email_cliente": "exemploemail@gmail.com",
  "senha_cliente": "exemplosenha@123",
  "n_contato_cliente": "11988887777",
  "cpf": "12345678901",
  "endereco": {
    "cep_endereco": "12345678",
    "bairro": "Centro",
    "rua_endereco": "Rua Exemplo",
    "numero_endereco": "1024",
    "complemento_endereco": "Apto 42"
  }
}
\`\`\`

### 2. Login Route (Accessing the account)
**What the Front-end must send to the Back-end:**
\`\`\`json
{
  "email_cliente": "exemploemail@gmail.com",
  "senha_cliente": "exemplosenha@123"
}
\`\`\`

README created by Raphael

---

# PT-BR (Brasil With "S")

## Estrutura de Equipe
"Tal é a base, tal será a superestrutura - Karl Marx"

- Sayuri:
  - Planejamento;
  - Documentação;
  - Registro a Mão;
  - Suporte de Desenvolvimento;
  - Suporte Técnico;
  - Feedbacks & Ideias.

- Renata:
  - Planejamento;
  - Documentação;
  - Registro a Mão;
  - Suporte de Desenvolvimento;
  - Suporte Técnico;
  - Feedbacks & Ideias.

- Raphael: Hello End :P
  - Back-end;
  - JavaScript;
  - Node;
  - SQLite;
  - Planejamento;
  - Liderança do Projeto.

- Kayky:
  - Front-end;
  - HTML;
  - CSS;
  - Planejamento;
  - Liderança da Equipe.

- Carlos:
  - Modelagem SQLite;
  - Planejamento;
  - Documentação;
  - Registro a Mão;
  - Suporte de Desenvolvimento;
  - Feedbacks & Ideias;
  - Fluxos, Diagramas & Wireframes.

- Matheus:
  - Modelagem SQLite;
  - Planejamento;
  - Documentação;
  - Registro a Mão;
  - Suporte de Desenvolvimento;
  - Feedbacks & Ideias;
  - Fluxos, Diagramas & Wireframes.

## Contrato de API

### 1. Rota de Cadastro (Criação de uma nova conta)
**O que o Front-end deve enviar para o Back-end:**
\`\`\`json
{
  "nome_cliente": "ExemploNome",
  "email_cliente": "exemploemail@gmail.com",
  "senha_cliente": "exemplosenha@123",
  "n_contato_cliente": "11988887777",
  "cpf": "12345678901",
  "endereco": {
    "cep_endereco": "12345678",
    "bairro": "Centro",
    "rua_endereco": "Rua Exemplo",
    "numero_endereco": "1024",
    "complemento_endereco": "Apto 42"
  }
}
\`\`\`

### 2. Rota de Login (Acessar a conta)
**O que o Front-end deve enviar para o Back-end:**
\`\`\`json
{
  "email_cliente": "exemploemail@gmail.com",
  "senha_cliente": "exemplosenha@123"
}
\`\`\`

READ-ME feito por Raphael

---

# ZH-CH

## 团队架构
“基础如此，上层建筑亦如此。”——卡尔·马克思 

树高千尺，不忘根本

- Sayuri：
  - 规划；
  - 文档编写；
  - 手动记录；
  - 开发支持；
  - 技术支持；
  - 反馈与建议。

- Renata：
  - 规划；
  - 文档编写；
  - 手动记录；
  - 开发支持；
  - 技术支持；
  - 反馈与建议。

- Raphael：你好，End :P
  - 后端；
  - JavaScript；
  - Node；
  - SQLite；
  - 规划；
  - 项目领导。

- Kayky：
  - 前端；
  - HTML；
  - CSS；
  - 规划；
  - 团队领导。

- Carlos：
  - SQLite 建模；
  - 规划；
  - 文档编写；
  - 手动记录；
  - 开发支持；
  - 反馈与建议；
  - 流程图、图表和线框图。

- Matheus：
  - SQLite 建模；
  - 规划；
  - 文档编写；
  - 手动记录；
  - 开发支持；
  - 反馈和建议；
  - 流程图、图表和线框图。

## API 合约
### 1. 注册路由（创建新帐户）
**前端应向后端发送的内容：**
\`\`\`json
{
  "nome_cliente": "ExemploNome",
  "email_cliente": "exemploemail@gmail.com",
  "senha_cliente": "exemplosenha@123",
  "n_contato_cliente": "11988887777",
  "cpf": "12345678901",
  "endereco": {
    "cep_endereco": "12345678",
    "bairro": "Centro",
    "rua_endereco": "Rua Exemplo",
    "numero_endereco": "1024",
    "complemento_endereco": "Apto 42"
  }
}
\`\`\`

### 2. 登录路由（访问帐户）
**前端应向后端发送的内容：**
\`\`\`json
{
  "email_cliente": "exemploemail@gmail.com",
  "senha_cliente": "exemplosenha@123"
}
\`\`\`
README 文件由 Raphael 创建
