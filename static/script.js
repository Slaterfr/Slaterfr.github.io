let currentIndex = 0;
const track = document.querySelector('.carousel-track');
const members = document.querySelectorAll('.team-member');
const totalMembers = members.length;

function moveCarousel(direction) {
    // Calcular cuántos elementos se muestran a la vez
    const memberWidth = members[0].offsetWidth;
    const containerWidth = document.querySelector('.carousel-container').offsetWidth;
    const visibleMembers = Math.floor(containerWidth / (memberWidth + 20)); // 20 es el gap
    
    // Actualizar índice
    currentIndex += direction;
    
    // Limitar el índice
    const maxIndex = totalMembers - visibleMembers;
    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
    }
    
    // Mover el carrusel
    const moveAmount = currentIndex * (memberWidth + 20);
    track.style.transform = `translateX(-${moveAmount}px)`;
}

// Opcional: Auto-play
let autoplayInterval;

function startAutoplay() {
    autoplayInterval = setInterval(() => {
        moveCarousel(1);
        
        // Volver al inicio cuando llega al final
        const memberWidth = members[0].offsetWidth;
        const containerWidth = document.querySelector('.carousel-container').offsetWidth;
        const visibleMembers = Math.floor(containerWidth / (memberWidth + 20));
        
        if (currentIndex >= totalMembers - visibleMembers) {
            currentIndex = -1;
        }
    }, 3000); // Cambia cada 3 segundos
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

// Iniciar autoplay (opcional)
// startAutoplay();

// Detener autoplay al interactuar
document.querySelectorAll('.carousel-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        stopAutoplay();
        // Opcional: reiniciar autoplay después de 5 segundos
        // setTimeout(startAutoplay, 5000);
    });
});