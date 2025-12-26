document.addEventListener('DOMContentLoaded', () => {

    // --- 2. SCROLL SUAVE ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

/* --- 3. FUNCIÓN PARA DESPLEGAR DETALLES (ACORDEÓN) --- */
function toggleDetails(button) {
    // 1. Buscamos el contenedor de detalles que está justo después del botón
    const content = button.nextElementSibling;

    // 2. Alternamos la clase 'show' para animar la altura y opacidad
    content.classList.toggle('show');

    // 3. Alternamos la clase 'active' en el botón para rotar la flecha
    button.classList.toggle('active');

    // 4. Cambiamos el texto del botón (Opcional, detalle de calidad)
    const textSpan = button.firstChild; // El nodo de texto
    if (content.classList.contains('show')) {
        // Si quieres cambiar el texto al abrir:
        // button.innerHTML = 'Ocultar info <i class="fa-solid fa-chevron-down"></i>';
    } else {
        // button.innerHTML = 'Ver características <i class="fa-solid fa-chevron-down"></i>';
    }
}