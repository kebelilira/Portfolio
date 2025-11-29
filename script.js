/**
 * script.js
 * Efeito de Digitação (Typing Effect) e Alternância de Tema (Dark/Light Mode)
 */

document.addEventListener('DOMContentLoaded', () => {
    // ====================================================================
    // 1. EFEITO DE DIGITAÇÃO (TYPING EFFECT)
    // ====================================================================
    const targetElement = document.querySelector('header .intro h1');
    if (targetElement) {
        const textToType = "Kebeli Rodrigues";
        let charIndex = 0;
        const typingSpeed = 100;

        targetElement.textContent = '';

        function type() {
            if (charIndex < textToType.length) {
                targetElement.textContent += textToType.charAt(charIndex);
                charIndex++;
                setTimeout(type, typingSpeed);
            }
        }
        type();
    }

    // ====================================================================
    // 2. ALTERNÂNCIA DE TEMA (DARK/LIGHT MODE)
    // ====================================================================
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    // 2.1. Lógica do Menu Hambúrguer
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.innerHTML = navMenu.classList.contains('active') ? '&#10005;' : '&#9776;'; // X ou Hambúrguer
        });

        // Fechar o menu ao clicar em um link (para navegação suave)
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.innerHTML = '&#9776;';
            });
        });
    }

    // ====================================================================
    // 3. ALTERNÂNCIA DE TEMA (DARK/LIGHT MODE)
    // ====================================================================
    const themeToggle = document.getElementById('theme-toggle');
    const root = document.documentElement; // O elemento <html>

    // Função para aplicar o tema
    function applyTheme(theme) {
        if (theme === 'light') {
            root.classList.add('light-theme');
            themeToggle.innerHTML = '&#9788;'; // Ícone do Sol
        } else {
            root.classList.remove('light-theme');
            themeToggle.innerHTML = '&#9790;'; // Ícone da Lua
        }
    }

    // 2.1. Carregar o tema salvo ou usar o padrão (dark)
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);

    // 2.2. Adicionar o listener de clique
    themeToggle.addEventListener('click', () => {
        const currentTheme = root.classList.contains('light-theme') ? 'light' : 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        // Aplicar e salvar o novo tema
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
});
