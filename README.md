# SlothAgent

Projeto desenvolvido durante um evento da Rocketseat.

## 🚀 Tecnologias

- **React 19** - Biblioteca para construção de interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool e dev server
- **Tailwind CSS 4** - Framework CSS utilitário
- **React Router DOM** - Roteamento para React
- **TanStack Query** - Gerenciamento de estado e cache
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones
- **Biome** - Linter e formatter

## 🛠️ Padrões de Projeto

- **shadcn/ui** - Sistema de componentes baseado em Radix UI
- **Atomic Design** - Organização de componentes em estrutura hierárquica
- **Path Aliases** - Importações usando `@/` para melhor organização
- **Component Composition** - Reutilização de componentes através de composição

## 📁 Estrutura do Projeto

```
src/
├── components/
│   └── ui/          # Componentes base (shadcn/ui)
├── pages/           # Páginas da aplicação
├── lib/             # Utilitários e configurações
└── main.tsx         # Entry point
```

## ⚡ Setup e Configuração

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

1. Clone o repositório

```bash
git clone <repository-url>
cd web
```

2. Instale as dependências

```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento

```bash
npm run dev
```

4. Acesse `http://localhost:5173`

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Preview do build de produção

## 🎨 Configurações

- **Tailwind CSS 4** configurado com tema personalizado
- **Biome** para linting e formatação de código
- **TypeScript** com configurações otimizadas
- **Vite** com alias `@/` para imports
