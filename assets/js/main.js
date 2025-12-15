/**
 * SixSilvas - JavaScript Principal
 * Navegação, Animações, Formulários e Interações
 */

class SixSilvasApp {
  constructor() {
    this.init();
  }

  init() {
    this.setupMobileMenu();
    this.setupScrollEffects();
    this.setupAnimations();
    this.setupForms();
    this.setupActiveLinks();
    this.setupSmoothScroll();
  }

  // === MENU MOBILE === //
  setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
      menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');

        // Animação do ícone hamburguer
        const spans = menuToggle.querySelectorAll('span');
        if (menuToggle.classList.contains('active')) {
          spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
          spans[1].style.opacity = '0';
          spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
          spans[0].style.transform = '';
          spans[1].style.opacity = '1';
          spans[2].style.transform = '';
        }
      });

      // Fechar menu ao clicar em link
      const navLinks = navMenu.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          if (window.innerWidth <= 1024) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '1';
            spans[2].style.transform = '';
          }
        });
      });

      // Fechar menu ao clicar fora
      document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
          navMenu.classList.remove('active');
          menuToggle.classList.remove('active');
        }
      });
    }
  }

  // === EFEITOS DE SCROLL === //
  setupScrollEffects() {
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      // Adicionar sombra ao header no scroll
      if (currentScroll > 50) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }

      lastScroll = currentScroll;
    });
  }

  // === ANIMAÇÕES DE ENTRADA === //
  setupAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.style.opacity = '1';

          // Se for um container de cards, animar cada card
          if (entry.target.classList.contains('grid')) {
            const cards = entry.target.querySelectorAll('.card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
              }, index * 100);
            });
          }
        }
      });
    }, observerOptions);

    // Observar apenas elementos com classes de animação
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up, .slide-in-left, .slide-in-right');
    animatedElements.forEach(el => {
      el.style.opacity = '0';
      observer.observe(el);
    });

    // Preparar grids com cards para animação
    const gridsWithCards = document.querySelectorAll('.grid');
    gridsWithCards.forEach(grid => {
      const cards = grid.querySelectorAll('.card');
      if (cards.length > 0) {
        cards.forEach(card => {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
        observer.observe(grid);
      }
    });
  }

  // === LINKS ATIVOS === //
  setupActiveLinks() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  // === SCROLL SUAVE === //
  setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
          const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
          const targetPosition = target.offsetTop - headerHeight - 20;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // === FORMULÁRIOS === //
  setupForms() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleContactForm(contactForm);
      });
    }
  }

  handleContactForm(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Validação básica
    if (!data.name || !data.email || !data.message) {
      this.showNotification('Por favor, preencha todos os campos obrigatórios.', 'error');
      return;
    }

    if (!this.isValidEmail(data.email)) {
      this.showNotification('Por favor, insira um email válido.', 'error');
      return;
    }

    // Simulação de envio (substituir por API real)
    this.showNotification('A enviar mensagem...', 'info');

    setTimeout(() => {
      // Aqui você integraria com uma API real
      console.log('Dados do formulário:', data);

      this.showNotification('Mensagem enviada com sucesso! Entraremos em contacto em breve.', 'success');
      form.reset();
    }, 1500);
  }

  isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  showNotification(message, type = 'info') {
    // Remover notificação existente
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
      existingNotification.remove();
    }

    // Criar nova notificação
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      padding: 16px 24px;
      background: ${type === 'success' ? '#2E8B57' : type === 'error' ? '#dc3545' : '#56CCF2'};
      color: white;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      z-index: 10000;
      animation: slideInRight 0.3s ease;
      max-width: 400px;
    `;

    document.body.appendChild(notification);

    // Remover após 5 segundos
    setTimeout(() => {
      notification.style.animation = 'slideOutRight 0.3s ease';
      setTimeout(() => notification.remove(), 300);
    }, 5000);
  }
}

// === UTILITÁRIOS === //

// Copiar para clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    window.app?.showNotification('Copiado para a área de transferência!', 'success');
  });
}

// Scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Toggle Theme (exposto globalmente)
function toggleTheme() {
  window.themeManager?.toggleTheme();
}

// === INICIALIZAÇÃO === //
document.addEventListener('DOMContentLoaded', () => {
  window.app = new SixSilvasApp();

  // Adicionar botão scroll to top se necessário
  const scrollBtn = document.createElement('button');
  scrollBtn.innerHTML = '↑';
  scrollBtn.className = 'scroll-to-top';
  scrollBtn.onclick = scrollToTop;
  scrollBtn.setAttribute('aria-label', 'Voltar ao topo');
  scrollBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--gradient-primary);
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: var(--shadow-lg);
  `;

  document.body.appendChild(scrollBtn);

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollBtn.style.opacity = '1';
      scrollBtn.style.visibility = 'visible';
    } else {
      scrollBtn.style.opacity = '0';
      scrollBtn.style.visibility = 'hidden';
    }
  });
});

// Adicionar animações CSS necessárias
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }

  .scroll-to-top:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-hover);
  }

  .header.scrolled {
    box-shadow: var(--shadow-lg);
  }
`;
document.head.appendChild(style);
