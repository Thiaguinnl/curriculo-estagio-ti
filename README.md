# Currículo Online - Estágio em TI

Currículo online moderno em React, focado em oportunidades de estágio na área de Tecnologia da Informação. Projeto 100% estático, pronto para publicação no GitHub Pages.

## Tecnologias

- **React 18** - Interface
- **Vite** - Build tool (gera arquivos estáticos)
- **CSS puro** - Estilização (sem dependências)

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev
```

## Build para produção

```bash
npm run build
```

Os arquivos estáticos serão gerados na pasta `dist/`.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub (ex: `curriculo-estagio-ti`)

2. Atualize o nome do repositório em:
   - `vite.config.js` → variável `repoName`
   - `package.json` → campo `homepage`

3. Execute o deploy:

```bash
npm run deploy
```

O script irá fazer o build e publicar automaticamente na branch `gh-pages`.

4. No GitHub:
   - Vá em **Settings** → **Pages**
   - Em **Source**, selecione a branch `gh-pages`
   - O site estará disponível em `https://seu-usuario.github.io/curriculo-estagio-ti/`

## Personalização

Edite os dados em:
- `src/components/Hero.jsx` - Nome, bio, links sociais
- `src/components/Sobre.jsx` - Cards sobre você
- `src/components/Formacao.jsx` - Formação acadêmica
- `src/components/Dados.jsx` - Dados pessoais
- `src/components/Contato.jsx` - Links de contato

## Estrutura do projeto

```
├── public/          # Assets estáticos
├── src/
│   ├── components/  # Componentes React
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```
