window.onscroll = function () {
    const scrollTopButton = document.getElementById('scrollTopButton');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
};

// Función para desplazarse hacia arriba con animación suave
function scrollToTop() {
    const scrollToTopButton = document.getElementById('scrollTopButton');

    // Desplazarse hacia arriba con animación suave
    const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 8);
        }
    };

    scrollToTop(); // Llama a la función de desplazamiento suave

    // Puedes agregar más animaciones aquí, como cambiar el color o el ícono del botón
    scrollToTopButton.style.backgroundColor = '#333';
}
