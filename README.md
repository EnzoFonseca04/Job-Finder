# Job Finder 💼

![Status do Projeto](https://img.shields.io/badge/status-finalizado-brightgreen)
![Node.js Version](https://img.shields.io/badge/node-v18%2B-blue)

O **Job Finder** é uma aplicação web completa desenvolvida para conectar profissionais de tecnologia a oportunidades de trabalho, com foco especial em vagas remotas (home office). O projeto permite que empresas cadastrem vagas e que candidatos busquem oportunidades em tempo real.

---

## 🛠️ Tecnologias e Ferramentas

O projeto utiliza o padrão de arquitetura **MVC (Model-View-Controller)** simplificado, garantindo organização e escalabilidade:

* **Backend:** [Node.js](https://nodejs.org/) com o framework [Express](https://expressjs.com/).
* **Banco de Dados:** [SQLite](https://www.sqlite.org/) gerenciado pelo ORM [Sequelize](https://sequelize.org/).
* **Frontend:** [Handlebars](https://handlebarsjs.com/) para templates dinâmicos e [Bootstrap 5](https://getbootstrap.com/) para estilização responsiva.
* **Utilitários:** `body-parser` para processamento de requisições e `nodemon` para desenvolvimento ágil.



[Image of MVC architecture pattern diagram]


---

## ✨ Funcionalidades Principais

* **Listagem Dinâmica:** Exibição automática das vagas mais recentes na página inicial.
* **Sistema de Busca:** Filtro de vagas por título através do operador `LIKE` do banco de dados.
* **Visualização Detalhada:** Páginas individuais para cada vaga com descrição completa e link de e-mail direto (`mailto`).
* **Cadastro de Vagas:** Formulário intuitivo para adição de novas oportunidades com validação básica.
* **Selo "Nova":** Identificação visual automática para vagas recém-postadas.



---

## 🚀 Como Executar o Projeto

Siga os passos abaixo para ter o Job Finder rodando na sua máquina:

1.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/job-finder.git](https://github.com/seu-usuario/job-finder.git)
    cd job-finder
    ```

2.  **Instale as Dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o Servidor:**
    ```bash
    # Para modo de desenvolvimento (com nodemon)
    npm run dev
    ```

4.  **Acesse no Navegador:**
    Abra [http://localhost:3000](http://localhost:3000)

---

## 📂 Estrutura do Projeto

```text
├── db/              # Conexão com SQLite
├── models/          # Definição dos Schemas (Sequelize)
├── public/          # Arquivos estáticos (CSS, Imagens)
├── routes/          # Lógica de rotas da aplicação
├── views/           # Templates Handlebars
│   ├── layouts/     # Template principal (main)
│   └── ...          # Páginas (index, add, view)
└── app.js           # Arquivo principal de entrada
