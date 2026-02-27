const loader = document.getElementById('loader');
const mainContent = document.getElementById('main-content');

// Espera 4 segundos exatos
setTimeout(() => {

    // Fade out do loader
    loader.style.opacity = '0';

    setTimeout(() => {
        loader.style.display = 'none';

        // Ativa conteúdo
        mainContent.classList.add('show');
        document.body.style.overflow = 'auto';

    }, 1000); // tempo da transição

}, 4000);