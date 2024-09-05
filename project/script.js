// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Carregar Header
    fetch('./src/components/Header.html')
        .then(response => response.text())
        .then(html => document.getElementById('header').innerHTML = html);

        // Carregar conteúdo da página inicial
        fetch('./src/pages/Home.html')
        .then(response => response.text())
        .then(html => document.getElementById('main-content').innerHTML = html);

        // Carregar Footer
        fetch('./src/components/Footer.html')
            .then(response => response.text())
            .then(html => document.getElementById('footer').innerHTML = html);
});
