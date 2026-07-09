# Arquitetura Institucional da SixSilvas

## Branch base e branch de trabalho
- Branch base: `work`.
- Branch criada: `feature/work-sixsilvas-institucional`.

## Visão geral
O portal foi implementado como uma aplicação web estática moderna com HTML, JavaScript modular e CSS responsivo, preparada para evolução futura para ASP.NET Core, Blazor Web App, Blazor WASM e MudBlazor. A primeira entrega prioriza velocidade de publicação, SEO técnico, responsividade, acessibilidade e componentização de interface.

## Sitemap
- `/` — Home institucional.
- `/sobre` — História, missão, visão, valores, cultura e linha do tempo.
- `/areas/software` — Desenvolvimento Web, Mobile, Desktop, APIs e integrações.
- `/areas/infraestrutura` — Redes, servidores, cloud e virtualização.
- `/areas/seguranca` — Auditoria, hardening, backup e monitorização.
- `/areas/assistencia-tecnica` — Computadores, impressoras, redes e servidores.
- `/areas/comercio` — Computadores, portáteis, impressoras e acessórios.
- `/areas/aksanet` — Provedor de internet, planos, cobertura, benefícios e FAQ.
- `/areas/farmacia-sixsilvas` — Produtos, serviços, entrega, receitas e contacto.
- `/solucoes/minha-farmacia-online` — Produto próprio para farmácias.
- `/portfolio` — Projetos, casos de sucesso, tecnologias e resultados.
- `/clientes` — Logos, casos e depoimentos.
- `/parceiros` — Parceiros estratégicos.
- `/blog` — Tecnologia, cloud, redes, segurança, software, internet, farmácia e transformação digital.
- `/carreiras` — Benefícios, valores, vagas e banco de talentos.
- `/contactos` — Mapa, formulário, WhatsApp, email, telefones, redes sociais, horário e localização.

## Wireframes textuais
### Home
1. Navbar fixa com marca, links e CTA.
2. Hero com slogan, texto de autoridade, CTA principal, CTA secundário e visual tecnológico.
3. Áreas de negócio em cards.
4. Produto em destaque.
5. Diferenciais.
6. Números institucionais.
7. Clientes, parceiros e depoimentos.
8. CTA final.
9. Footer completo.

### Página interna
1. Navbar.
2. Cabeçalho com breadcrumb conceitual, título e descrição.
3. Cards de conteúdo.
4. Secções específicas, como FAQ, pricing ou timeline.
5. CTA/contexto de contacto.
6. Footer.

## Design System
### Cores
- Azul institucional: `#0b63ff`.
- Azul escuro premium: `#07152f`.
- Ciano tecnológico: `#24d3ee`.
- Texto secundário: `#5d6b82`.
- Fundo claro: `#f7f9fc`.
- Cartões: `#ffffff`.

### Tipografia
- Stack principal: `Inter`, `ui-sans-serif`, `system-ui`.
- Títulos com peso alto, tracking negativo e hierarquia forte.
- Parágrafos com alto espaçamento de linha para leitura institucional.

### Componentes reutilizáveis
- Navbar responsiva.
- Hero.
- Cards.
- Timeline.
- FAQ com `details/summary`.
- Pricing cards.
- CTA.
- Footer.
- Formulário de contacto.
- Painéis institucionais.

## Estratégia de SEO
- Meta description institucional.
- Open Graph.
- Twitter Card.
- Canonical.
- JSON-LD `Organization` com departamentos AksaNet e Farmácia SixSilvas.
- `sitemap.xml`.
- `robots.txt`.
- URLs amigáveis.
- Estrutura semântica com `header`, `nav`, `main`, `section`, `footer`.

## Estratégia de performance
- Aplicação leve com HTML, JavaScript modular e CSS responsivo.
- CSS único otimizado.
- Sem dependências pesadas de UI.
- Preload do CSS principal.
- Conteúdo renderizado de forma modular.
- Arquitetura preparada para code splitting quando o portal crescer.

## Estratégia de acessibilidade
- Idioma `pt-AO`.
- Link de salto para conteúdo.
- Navegação por teclado.
- Foco visível.
- Contraste forte entre texto e fundo.
- Botões e campos com labels.
- Uso de `aria-label` onde necessário.
- Respeito a `prefers-reduced-motion`.

## Landing pages futuras
A arquitetura suporta rotas como:
- `/aksanet`
- `/software`
- `/helpdesk`
- `/cloud`
- `/consultoria`
- `/farmacia`
- `/mfo`

Cada landing page deve reutilizar o design system, ter proposta de valor específica, prova social, FAQ, formulário e schema adequado.

## Recomendações de evolução
1. Migrar para solução corporativa com ASP.NET Core API, Blazor Web App para gestão de conteúdo e Blazor WASM para frontend rico.
2. Criar área do cliente com tickets, faturas, contratos, instalações AksaNet e histórico de serviços.
3. Criar portal de suporte com base de conhecimento, SLAs e chat.
4. Criar portal de parceiros com leads, materiais comerciais e acompanhamento de oportunidades.
5. Integrar recrutamento com banco de talentos e triagem automatizada.
6. Integrar CRM, ERP, pagamentos, faturação, stock e analytics.
7. Adicionar CMS headless para blog, portfólio e páginas de campanha.
8. Implementar monitorização de Core Web Vitals, SEO e acessibilidade em CI/CD.
