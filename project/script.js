document.addEventListener('DOMContentLoaded', () => {
    // Carregar Header
    fetch('./src/components/Header.html')
        .then(response => response.text())
        .then(html => document.getElementById('header').innerHTML = html);

    // Carregar conteúdo da página inicial
    fetch('./src/pages/Home.html')
        .then(response => response.text())
        .then(html => {
            const mainContent = document.getElementById('main-content');
            mainContent.innerHTML = html;

            // Carregar o componente "pan" dentro do "Home.html"
            fetch('./src/components/Pan.html')
                .then(response => response.text())
                .then(panHtml => {
                    const panContainer = document.querySelector('.pan');
                    panContainer.innerHTML = panHtml;
                });
        });

    // Carregar Footer
    fetch('./src/components/Footer.html')
        .then(response => response.text())
        .then(html => document.getElementById('footer').innerHTML = html);
});
