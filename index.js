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

