# Prompt de Referência Técnica do Site SixSilvas

Use este prompt como guia para qualquer IA que vá manter ou evoluir o website estático da SixSilvas (branch `work`). Ele resume a estrutura, padrões de código e práticas obrigatórias do projeto.

## Contexto do Projeto
- Site institucional estático em HTML5/CSS3/JavaScript Vanilla, sem bundlers ou dependências externas além de Google Fonts.
- Páginas principais: `index.html`, `sobre.html`, `servicos.html`, `produtos.html`, `portfolio.html`, `contactos.html`. Todas importam `assets/css/variables.css`, `assets/css/main.css`, `assets/css/components.css`, `assets/js/theme.js` e `assets/js/main.js`.
- Tema dual (light/dark) controlado por `ThemeManager` em `assets/js/theme.js` via atributo `data-theme` no `<html>`.

## Estrutura e Responsabilidades
- **CSS**
  - `assets/css/variables.css`: design system (cores, gradientes, tipografia, espaçamentos, raios de borda, sombras, transições) e tokens para tema claro/escuro.
  - `assets/css/main.css`: layout base, tipografia, grids responsivos e utilitários (container, buttons, espaçamentos, responsividade mobile-first).
  - `assets/css/components.css`: estilos de componentes (cards, badges, tech tags, hero, seções com cabeçalho, navegação, formulários, ícones de lista, etc.).
- **JavaScript**
  - `assets/js/theme.js`: inicializa `window.themeManager`, lê preferência do sistema ou `localStorage`, aplica `data-theme`, e alterna ícone do botão `#theme-toggle` (🌙/☀️).
  - `assets/js/main.js`: classe `SixSilvasApp` inicializada em `DOMContentLoaded` (exposta como `window.app`). Funções principais:
    - Menu mobile: alterna `.nav-menu`/`.menu-toggle` e anima hambúrguer; fecha ao clicar em links ou fora do menu.
    - Efeitos de scroll: adiciona `.scrolled` ao header quando desce a página.
    - Animações de entrada: IntersectionObserver aplica `.visible`/opacidade e anima cartões dentro de `.grid`.
    - Links ativos: marca `.nav-link` conforme `window.location`.
    - Scroll suave para âncoras internas considerando altura do header.
    - Formulário de contactos (`#contact-form`): valida campos, simula envio, mostra notificações flutuantes e reseta.
    - Utilidades globais: `copyToClipboard`, `scrollToTop` (botão flutuante criado dinamicamente), `toggleTheme` (proxy para `ThemeManager`).
- **HTML**
  - Cabeçalho padrão com logo, navegação, botão de tema e toggler mobile.
  - Seções organizadas por `.section` com `.section-header` e grids (`.grid`, `.grid-3`) para cards de serviços/produtos.
  - Formulário em `contactos.html` utiliza ID `contact-form` para integração JS.

## Convenções e Boas Práticas
- Manter semântica HTML (sections, headers, nav, article) e acessibilidade (aria-labels já existentes, foco em teclas).
- Reutilizar tokens de `variables.css` para cores e espaços; evitar estilos inline, preferindo classes existentes.
- Para novos scripts, não envolver imports em try/catch e evitar dependências externas. Preferir inicialização após `DOMContentLoaded`.
- Preservar responsividade mobile-first: testar breakpoints (<640px, 640–1024px, >1024px) e manter grids adaptáveis.
- Para formulários, conectar a API editando `handleContactForm` em `assets/js/main.js` e manter validação e notificações.
- Ao adicionar seções/páginas, importar os três CSS e dois JS padrões e seguir o cabeçalho existente para consistência visual e de navegação.

## Instruções para Tarefas Futuras
- **Adicionar conteúdo**: edite a página temática (ex.: produtos em `produtos.html`, projetos em `portfolio.html`) mantendo a estrutura de cards e classes utilitárias.
- **Ajustar estilos**: altere tokens em `variables.css` para mudanças globais; use `main.css`/`components.css` para novos componentes ou variações.
- **Interações**: centralize lógicas em `assets/js/main.js`; para temas, use apenas `ThemeManager` em `assets/js/theme.js`.
- **Deploy/Preview**: abra `index.html` diretamente ou sirva via `python -m http.server 8000` e acesse `http://localhost:8000`.

Mantenha este prompt atualizado sempre que a arquitetura ou as convenções mudarem. Qualquer commit deve mencionar a branch `work` no título/mensagem.
