# SixSilvas - Website Institucional

Website corporativo moderno para **SixSilvas – Comércio, Serviços & Tecnologias**, desenvolvido com HTML5, CSS3 e JavaScript vanilla.

## 🎨 Identidade Visual

### Paleta de Cores

**Primárias:**
- Azul Escuro: `#0B3558`
- Azul Médio: `#1F5D8F`

**Secundárias:**
- Verde: `#2E8B57`
- Amarelo: `#F2C94C`
- Laranja: `#F2994A`
- Azul Claro: `#56CCF2`

**Neutras:**
- Branco: `#FFFFFF`
- Cinza Claro: `#F5F7FA`
- Cinza Escuro: `#4F4F4F`

### Tipografia
- **Principal:** Inter
- **Secundária:** Poppins
- **Fallback:** system-ui, sans-serif

## 📁 Estrutura do Projeto

```
SixSilvas-Site/
├── index.html              # Página inicial
├── sobre.html              # Quem Somos
├── servicos.html           # Serviços
├── produtos.html           # Produtos
├── portfolio.html          # Portfólio
├── contactos.html          # Contactos
├── assets/
│   ├── css/
│   │   ├── variables.css   # Variáveis CSS (cores, fontes, espaçamentos)
│   │   ├── main.css        # Estilos base e utilitários
│   │   └── components.css  # Componentes reutilizáveis
│   ├── js/
│   │   ├── theme.js        # Gerenciador de tema dark/light
│   │   └── main.js         # Funcionalidades principais
│   └── images/             # Imagens e assets
├── README.md
└── LICENSE
```

## ✨ Funcionalidades

### Páginas

1. **Home**
   - Hero section com CTA
   - Cards de serviços principais
   - Seção de produtos
   - Stack tecnológico
   - Depoimentos de clientes
   - CTA final

2. **Quem Somos**
   - História da empresa
   - Missão, Visão e Valores
   - Áreas de atuação
   - Liderança técnica
   - Diferenciais

3. **Serviços**
   - Desenvolvimento de Software
   - Infraestrutura & Redes
   - DevOps & Cloud
   - Consultoria & Formação
   - Detalhamento completo com tecnologias

4. **Produtos**
   - 6SAcademy (Gestão Académica)
   - Minha Farmácia Online (E-commerce)
   - Soluções ISP/Hotspot
   - Funcionalidades e status de cada produto

5. **Portfólio**
   - Casos de sucesso
   - Projetos concluídos
   - Tecnologias utilizadas
   - Resultados obtidos
   - Estatísticas

6. **Contactos**
   - Formulário de contacto funcional
   - Informações de contacto (Email, WhatsApp, Localização)
   - Horário de atendimento
   - FAQ
   - Redes sociais

### Features Técnicas

- ✅ **Design Responsivo** - Mobile-first, adaptável a todos os dispositivos
- ✅ **Dark Mode / Light Mode** - Alternância de tema com persistência
- ✅ **SEO Otimizado** - Meta tags, Open Graph, estrutura semântica
- ✅ **Acessibilidade** - ARIA labels, navegação por teclado
- ✅ **Performance** - CSS e JS otimizados, lazy loading
- ✅ **Animações** - Transições suaves e animações de entrada
- ✅ **Navegação Mobile** - Menu hamburger responsivo
- ✅ **Formulário Funcional** - Validação client-side
- ✅ **Scroll to Top** - Botão flutuante
- ✅ **Smooth Scroll** - Navegação suave entre seções

## 🚀 Como Usar

### 1. Clone o Repositório

```bash
git clone https://github.com/SixSilvas-Comercio-Servicos-Tecnologias/SixSilvas-Site.git
cd SixSilvas-Site
```

### 2. Abra no Navegador

Simplesmente abra o arquivo `index.html` em qualquer navegador moderno:

```bash
# Linux/Mac
open index.html

# Windows
start index.html
```

### 3. Ou Use um Servidor Local

Para melhor experiência, use um servidor HTTP local:

```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx serve

# PHP
php -S localhost:8000
```

Depois acesse: `http://localhost:8000`

## 🛠️ Customização

### Alterar Cores

Edite o arquivo `assets/css/variables.css` para modificar a paleta de cores:

```css
:root {
  --color-primary-dark: #0B3558;
  --color-primary-medium: #1F5D8F;
  /* ... outras variáveis */
}
```

### Adicionar Conteúdo

- **Produtos:** Edite `produtos.html`
- **Projetos:** Edite `portfolio.html`
- **Serviços:** Edite `servicos.html`

### Configurar Formulário

O formulário em `contactos.html` atualmente simula envio. Para integrar com backend:

1. Edite a função `handleContactForm()` em `assets/js/main.js`
2. Adicione endpoint da API
3. Configure tratamento de resposta

Exemplo:
```javascript
handleContactForm(form) {
  const formData = new FormData(form);

  fetch('https://sua-api.com/contact', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    this.showNotification('Mensagem enviada!', 'success');
  });
}
```

## 🌐 Deploy

### GitHub Pages

1. Faça push do código para o GitHub
2. Vá em Settings > Pages
3. Selecione branch `main` e pasta `/root`
4. Salve e aguarde deploy

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Hosting Tradicional

Faça upload de todos os arquivos via FTP para o servidor web.

## 📱 Compatibilidade

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contacto

**SixSilvas - Comércio, Serviços & Tecnologias**

- 📍 Luanda, Angola
- 📧 info@sixsilvas.com
- 📱 +244 936 981 501
- 🌐 [www.sixsilvas.com](https://www.sixsilvas.com)

## 🙏 Agradecimentos

- Fontes: [Google Fonts](https://fonts.google.com/) (Inter & Poppins)
- Ícones: Emoji Unicode
- Inspiração: Comunidade de desenvolvimento web

---

**Desenvolvido com ❤️ pela equipa SixSilvas**

*Transformando ideias em soluções tecnológicas que impulsionam negócios.*
