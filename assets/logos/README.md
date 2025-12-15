# Logos SixSilvas

Esta pasta contém todos os logotipos utilizados no website da SixSilvas e suas marcas associadas.

## Estrutura de Arquivos

```
/assets/logos/
├── sixsilvas-logo.svg          # Logo principal (colorido)
├── sixsilvas-logo-white.svg    # Logo branco (para fundos escuros)
├── sixsilvas-logo-black.svg    # Logo preto (para fundos claros)
├── aksanet-logo.svg            # Logo AksaNet (colorido)
├── mfo-logo.svg                # Logo MinhaFarmaciaOnline (colorido)
├── sixacademy-logo.svg         # Logo SixAcademy (colorido)
└── README.md                   # Este arquivo
```

## Especificações dos Logos

### Logo Principal - SixSilvas
- **Arquivos:** `sixsilvas-logo.svg`, `sixsilvas-logo-white.svg`, `sixsilvas-logo-black.svg`
- **Uso:** Header, Footer, Hero sections
- **Cores:** Círculo com gradiente (amarelo #F2C94C, laranja #F2994A, verde #2E8B57, azul #1F5D8F)
- **Variantes:**
  - **Colorido:** Usar em fundos brancos/claros
  - **Branco:** Usar em fundos escuros (header, footer)
  - **Preto:** Usar em fundos claros quando necessário alto contraste

### Logo AksaNet
- **Arquivo:** `aksanet-logo.svg`
- **Uso:** Seção de Produtos, cards de serviços
- **Cores:** Mesma paleta do logo principal + elementos de conectividade

### Logo MinhaFarmaciaOnline (MFO)
- **Arquivo:** `mfo-logo.svg`
- **Uso:** Seção de Produtos
- **Cores:** Teal (#1F9D8F) + Laranja (#F2994A) + ícone de cápsula/carrinho

### Logo SixAcademy
- **Arquivo:** `sixacademy-logo.svg`
- **Uso:** Seção de Produtos
- **Cores:** Gradiente azul (#1F5D8F) para verde (#2E8B57) + hexágono + capelo

## Como Adicionar/Atualizar Logos

1. **Salvar arquivos SVG** nesta pasta com os nomes especificados acima
2. **Otimizar SVGs** (remover metadados desnecessários, simplificar paths)
3. **Verificar acessibilidade:**
   - Adicionar `<title>` dentro do SVG
   - Adicionar `role="img"` na tag `<svg>`
   - Adicionar `aria-label` descritivo

### Exemplo de SVG acessível:
```svg
<svg role="img" aria-label="Logo SixSilvas" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60">
  <title>SixSilvas - Comércio, Serviços & Tecnologias</title>
  <!-- conteúdo do SVG -->
</svg>
```

## Uso no Código HTML

### Header (logo branco em fundo escuro):
```html
<a href="/" class="logo" aria-label="SixSilvas - Ir para página inicial">
  <img src="assets/logos/sixsilvas-logo-white.svg" alt="SixSilvas" class="company-logo" />
</a>
```

### Footer (logo branco em fundo escuro):
```html
<img src="assets/logos/sixsilvas-logo-white.svg" alt="SixSilvas" class="footer-logo" />
```

### Produtos (logos coloridos):
```html
<img src="assets/logos/aksanet-logo.svg" alt="AksaNet" class="product-logo" />
<img src="assets/logos/mfo-logo.svg" alt="MinhaFarmaciaOnline" class="product-logo" />
<img src="assets/logos/sixacademy-logo.svg" alt="SixAcademy" class="product-logo" />
```

## Fallback com CSS Filter (Alternativa)

Caso só exista a versão colorida, pode-se usar CSS filters para criar variantes:

```css
/* Versão branca */
.logo-white {
  filter: brightness(0) invert(1);
}

/* Versão preta */
.logo-black {
  filter: brightness(0);
}
```

**Nota:** Esta abordagem funciona mas não é ideal. Prefira sempre criar versões separadas dos logos.

## Dimensões Recomendadas

- **Header Desktop:** altura máxima 50px
- **Header Mobile:** altura máxima 40px
- **Footer:** altura máxima 60px
- **Produtos:** largura máxima 200px, altura automática

## Manutenção

Ao atualizar logos:
1. Fazer backup das versões anteriores
2. Testar em todos os contextos (header, footer, produtos, fundos claros/escuros)
3. Verificar contraste mínimo WCAG AA (4.5:1 para texto, 3:1 para elementos gráficos)
4. Testar responsividade em mobile, tablet e desktop
5. Limpar cache do navegador para ver mudanças

---

**Última atualização:** 2025-12-15
**Responsável:** Equipe de Desenvolvimento SixSilvas
