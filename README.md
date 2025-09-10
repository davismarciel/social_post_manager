# 📌 Social Post Manager

Um sistema de gerenciamento de conteúdo e blog **full-stack** construído com **Next.js**, **React** e **MongoDB**.  
A aplicação inclui **autenticação de usuários**, **painel de administração** e funcionalidades completas de **CRUD (Criar, Ler, Atualizar, Deletar)** para postagens.

---

## 🚀 Tecnologias Principais

- **Framework:** [Next.js 14](https://nextjs.org/)
- **Biblioteca de UI:** [React](https://react.dev/)
- **Banco de Dados:** [MongoDB](https://www.mongodb.com/) com [Mongoose](https://mongoosejs.com/)
- **Autenticação:** [NextAuth.js](https://next-auth.js.org/)
- **Estilização:** CSS Modules

---

## 🛠️ Como Começar

### ✅ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) **v18.17.0 ou superior**
- [Git](https://git-scm.com/)
- [MongoDB](https://www.mongodb.com/try/download/community) (local ou via [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

---

### 📥 Instalação e Configuração

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/davismarciel/social_post_manager.git
   cd social_post_manager
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**

   - Crie um arquivo `.env` na raiz do projeto.
   - Adicione as seguintes variáveis, substituindo pelos seus próprios valores:

     ```env
     MONGO="sua_string_de_conexao_mongodb"
     GITHUB_ID="seu_id_do_cliente_github"
     GITHUB_SECRET="seu_secret_do_cliente_github"
     AUTH_SECRET="sua_chave_secreta_para_nextauth"
     ```

---

### ▶️ Executando o Projeto

Para iniciar o servidor de desenvolvimento, execute:

```bash
npm run dev
```

A aplicação estará disponível em:  
👉 [http://localhost:3000](http://localhost:3000)

---

## 📚 Funcionalidades

- 🔑 Autenticação de usuários via GitHub
- 📝 CRUD completo para postagens
- 📊 Painel de administração
- 🎨 Estilização modular com **CSS Modules**
- 🌐 Integração com **MongoDB** para persistência de dados

---

## 📄 Licença

Este projeto é de uso livre para estudo e aprimoramento.  
Sinta-se à vontade para contribuir! 🚀
