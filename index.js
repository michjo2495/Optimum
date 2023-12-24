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
  function showSlide(carouselId, index) {
      const carousel = document.getElementById(carouselId);
      const items = carousel.getElementsByClassName("carousel-item");
      Array.from(items).forEach(item => item.style.display = "none");
      items[index].style.display = "block";
  }

  function nextSlide(carouselId, currentSlide) {
      const carousel = document.getElementById(carouselId);
      const items = carousel.getElementsByClassName("carousel-item");
      currentSlide = (currentSlide + 1) % items.length;
      showSlide(carouselId, currentSlide);
      return currentSlide;
  }

  function startCarousel(carouselId) {
      const items = document.getElementById(carouselId).getElementsByClassName("carousel-item");
      let currentSlide = 0;
      showSlide(carouselId, currentSlide);

      setInterval(function () {
          currentSlide = nextSlide(carouselId, currentSlide);
      }, 4000);
  }

  startCarousel("imageCarousel");
  startCarousel("imageCarousel2");
  startCarousel("imageCarousel3");
  startCarousel("imageCarousel4");
  startCarousel("imageCarousel5");
  startCarousel("imageCarousel6");
  // Repite el mismo patrón para los demás carruseles cambiando los identificadores
});

  