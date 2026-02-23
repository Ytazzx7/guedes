const countdownElement = document.getElementById('countdown');
const loader = document.getElementById('loader');
const mainContent = document.getElementById('main-content');

let timeLeft = 5;

// Função do Cronômetro
const timer = setInterval(() => {
    timeLeft--;
    countdownElement.innerText = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(timer);
        startSite();
    }
}, 1000);

// Função para iniciar o site com Fade In
function startSite() {
    // Esconde o loader com fade out
    loader.style.opacity = '0';
    
    setTimeout(() => {
        loader.classList.add('hidden');
        
        // Mostra o conteúdo principal
        mainContent.classList.remove('hidden');
        
        // Pequeno delay para garantir que o navegador processe o display:block
        setTimeout(() => {
            mainContent.classList.add('visible');
            document.body.style.overflow = 'auto'; // Reativa o scroll
        }, 50);
        
    }, 1000); // Espera 1s do fade out do loader
}
