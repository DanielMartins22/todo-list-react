# 📝 Todo List React

Uma aplicação moderna e responsiva de gerenciamento de tarefas (Todo List) construída com React 19, Vite e Styled-Components. Com interface intuitiva, modo escuro/claro e notificações interativas.

<div align="center">

![React](https://img.shields.io/badge/React-19.2-blue?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-8.1-646CFF?style=flat-square&logo=vite)
![Node](https://img.shields.io/badge/Node-%3E%3D18-green?style=flat-square&logo=nodedotjs)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

</div>

---

## ✨ Funcionalidades

- ✅ **Adicionar Tarefas** - Crie novas tarefas de forma rápida e fácil
- ✏️ **Editar Tarefas** - Modifique suas tarefas a qualquer momento
- 🗑️ **Deletar Tarefas** - Remova tarefas que não são mais necessárias
- ✔️ **Marcar como Concluída** - Acompanhe o progresso de suas tarefas
- 🌙/☀️ **Modo Escuro/Claro** - Alterne entre temas de acordo com sua preferência
- 💾 **Persistência de Tema** - Suas preferências são salvas no localStorage
- 🔔 **Notificações Toast** - Feedback visual para todas as ações
- 📱 **Design Responsivo** - Funciona perfeitamente em qualquer dispositivo

---

## 🚀 Tecnologias Utilizadas

- **React 19.2** - Framework JavaScript para construir interfaces
- **Vite 8.1** - Build tool rápido e moderno
- **Styled-Components 6.4** - CSS-in-JS para estilização
- **React-Toastify 11.1** - Sistema de notificações
- **ESLint** - Linter de código
- **Biome** - Formatador e linter rápido

---

## 📋 Pré-requisitos

- Node.js >= 18.x
- npm ou pnpm

---

## 🛠️ Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/todo-list-react.git
cd todo-list-react
```

### 2. Instale as dependências

Com **npm**:
```bash
npm install
```

Com **pnpm**:
```bash
pnpm install
```

---

## 💻 Desenvolvimento

### Iniciar o servidor de desenvolvimento

```bash
npm run dev
# ou
pnpm dev
```

O aplicativo estará disponível em `http://localhost:5173`

### Verificar e corrigir código

```bash
npm run lint
# ou
pnpm lint
```

### Formatar código

```bash
npm run format
# ou
pnpm format
```

### Build para produção

```bash
npm run build
# ou
pnpm build
```

### Preview da build

```bash
npm run preview
# ou
pnpm preview
```

---

## 📁 Estrutura do Projeto

```
todo-list-react/
├── src/
│   ├── components/
│   │   └── ToastContainer/          # Componente de notificações
│   │       ├── index.jsx
│   │       └── styles.js
│   ├── helpers/
│   │   └── toastHelper.js           # Funções auxiliares de toast
│   ├── pages/
│   │   └── TodoList/                # Página principal
│   │       ├── index.jsx
│   │       └── styles.js
│   ├── styles/
│   │   ├── GlobalStyles.js          # Estilos globais
│   │   └── theme.js                 # Temas (claro/escuro)
│   ├── assets/                      # Imagens e ícones
│   └── main.jsx                     # Ponto de entrada
├── public/                          # Arquivos estáticos
├── vite.config.js                   # Configuração Vite
├── eslint.config.js                 # Configuração ESLint
├── biome.json                       # Configuração Biome
├── package.json
└── README.md
```

---

## 🎮 Como Usar

1. **Adicionar uma tarefa**: Digite sua tarefa no campo de entrada e clique no botão "Adicionar"
2. **Editar uma tarefa**: Clique no ícone de editar, modifique o texto e salve
3. **Marcar como concluída**: Clique no ícone de checkmark para marcar como feita
4. **Deletar uma tarefa**: Clique no ícone de lixeira para remover
5. **Alternar tema**: Use o ícone de lua/sol no cabeçalho

---

## 🎨 Temas

A aplicação suporta dois temas:

- **Tema Claro** - Perfeito para uso durante o dia
- **Tema Escuro** - Confortável para uso noturno

Suas preferências de tema são salvas automaticamente no localStorage e restauradas ao retornar ao aplicativo.

---

## 📦 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Compila o projeto para produção |
| `npm run preview` | Visualiza o build de produção |
| `npm run lint` | Verifica e corrige problemas de código |
| `npm run format` | Formata o código automaticamente |
| `npm run check` | Executa verificações com Biome |

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

---

## 📝 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 👨‍💻 Autor

**Daniel Martins** - Frontend Developer

- LinkedIn: [@danielmartins-frontend](https://www.linkedin.com/in/danielmartins-frontend/)

---

## 📞 Suporte

Se encontrar algum problema ou tiver sugestões, por favor abra uma [Issue](../../issues) ou entre em contato através do LinkedIn.

---

## 🙏 Agradecimentos

- Comunidade React
- Vite team
- Styled-components
- React-Toastify

---

<div align="center">

Made with ❤️ by Daniel Martins

</div>
