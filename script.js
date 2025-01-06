document.addEventListener("DOMContentLoaded", function () {
  const carouselButtons = document.querySelectorAll(".carousel-button");
  const projectTitles = document.querySelectorAll(".project-title");
  const projectDetails = document.querySelectorAll(".project-details");
  const carouselImages = document.querySelectorAll(".carousel-image");

  let currentIndex = 0;

  function updateCarousel(index) {
    // Ocultar todas las imágenes del carrusel
    carouselImages.forEach((img) => img.classList.remove("active"));

    // Mostrar la imagen activa
    carouselImages[index].classList.add("active");

    // Ocultar todos los títulos y detalles
    projectTitles.forEach((title) => (title.style.display = "none"));
    projectDetails.forEach((details) => details.classList.remove("active"));

    // Mostrar el título correspondiente a la imagen activa
    projectTitles[index].style.display = "block";
  }

  // Configurar botones del carrusel
  carouselButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (button.classList.contains("next")) {
        currentIndex = (currentIndex + 1) % carouselImages.length;
      } else {
        currentIndex =
          (currentIndex - 1 + carouselImages.length) % carouselImages.length;
      }
      updateCarousel(currentIndex);
    });
  });

  // Asegurarse de que todo esté cerrado por defecto al cargar la página
  projectDetails.forEach((details) => details.classList.remove("active"));
  projectTitles.forEach((title) => (title.style.display = "none"));

  // Inicializar el carrusel mostrando la primera imagen y su título
  updateCarousel(currentIndex);

  // Agregar eventos de clic a los títulos
  projectTitles.forEach((title, index) => {
    title.addEventListener("click", function () {
      const isActive = projectDetails[index].classList.contains("active");

      // Cerrar todas las secciones
      projectDetails.forEach((details) => details.classList.remove("active"));

      // Alternar visibilidad de la sección correspondiente
      if (!isActive) {
        projectDetails[index].classList.add("active");
      }
    });
  });
});
