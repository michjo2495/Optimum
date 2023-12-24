document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.querySelector('nav ul');

    // Agregar un evento de clic al botón de alternar menú
    menuToggle.addEventListener('click', function () {
        // Alternar la visibilidad de la lista de navegación
        navList.style.display = (navList.style.display === 'none' || navList.style.display === '') ? 'flex' : 'none';
    });

    // Ocultar el menú cuando se hace clic en un elemento de la lista
    navList.addEventListener('click', function () {
        navList.style.display = 'none';
    });
});

// JS para carrusel //
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("imageCarousel");
    const items = carousel.getElementsByClassName("carousel-item");
    let currentSlide = 0;
  
    function showSlide(index) {
      // Oculta todas las imágenes
      Array.from(items).forEach(item => item.style.display = "none");
      // Muestra la imagen actual
      items[index].style.display = "block";
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % items.length;
      showSlide(currentSlide);
    }
  
    // Inicia el carrusel
    showSlide(currentSlide);
  
    // Cambia de imagen cada 4 segundos
    setInterval(nextSlide, 4000);
  });
  