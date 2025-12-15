/**
 * SixSilvas - Gerenciador de Tema (Dark/Light Mode)
 */

class ThemeManager {
  constructor() {
    this.storageKey = 'sixsilvas-theme';
    this.darkIcon = '🌙';
    this.lightIcon = '☀️';
    this.init();
  }

  init() {
    // Carregar tema salvo ou usar preferência do sistema
    const savedTheme = localStorage.getItem(this.storageKey);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    this.setTheme(theme, false);

    // Escutar mudanças na preferência do sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(this.storageKey)) {
        this.setTheme(e.matches ? 'dark' : 'light', false);
      }
    });
  }

  setTheme(theme, save = true) {
    document.documentElement.setAttribute('data-theme', theme);

    if (save) {
      localStorage.setItem(this.storageKey, theme);
    }

    this.updateToggleButton(theme);
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  updateToggleButton(theme) {
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      toggleBtn.textContent = theme === 'light' ? this.darkIcon : this.lightIcon;
      toggleBtn.setAttribute('aria-label', `Mudar para tema ${theme === 'light' ? 'escuro' : 'claro'}`);
    }
  }

  getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') || 'light';
  }
}

// Inicializar quando o DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.themeManager = new ThemeManager();
  });
} else {
  window.themeManager = new ThemeManager();
}
