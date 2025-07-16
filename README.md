# 🐾 MUNDO PET

Aplicação web de agendamento para petshops, onde os usuários podem preencher um formulário, escolher uma data e hora para o atendimento e visualizar os agendamentos por dia. Ideal para organizar a rotina de atendimento de forma prática e eficiente.

---

## 🚀 Funcionalidades

- 📅 Agendamento de serviços por data e hora
- 🐶 Formulário de cadastro com nome, pet, telefone e descrição do atendimento
- 📋 Visualização de agendamentos agrupados por dia
- 📱 Design responsivo **Mobile First**
- 🔄 Animações de abertura/fechamento de modal
- 🌐 Comunicação com uma API REST fictícia usando **JSON Server**
- 📆 Manipulação de datas com **Day.js**

---

## 🧪 Tecnologias utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Day.js** — manipulação de datas
- **Webpack** — bundler para build e dev
- **JSON Server** — API fake RESTful para desenvolvimento

---

## 📦 Estrutura do Projeto

📸 Prévia do Projeto
<img width="1898" height="954" alt="image" src="https://github.com/user-attachments/assets/b589ab42-6f33-46f8-8eb0-47d0777996d6" />


🖼️ Imagem do Formulário
<img width="1123" height="927" alt="image" src="https://github.com/user-attachments/assets/367df0c6-fc73-4cb6-9488-004f8f9936fe" />

📅 Lista de Agendamentos por Dia
<img width="1115" height="754" alt="image" src="https://github.com/user-attachments/assets/8c9fd410-efeb-4661-b8f8-38d25171feb8" />


⚙️ Como executar o projeto
1. Clone o repositório
````bash

git clone https://github.com/ArthurScarcela/mundo-pet.git
cd mundo-pet
````
2. Instale as dependências

````bash
Editar
npm install
````

3. Inicie o JSON Server (API fake)`
````bash
npx json-server --watch server.json --port 3333
````
4. Rode o projeto com Webpack Dev Server
````bash
npm run start
````

