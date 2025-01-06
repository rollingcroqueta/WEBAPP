document.addEventListener("DOMContentLoaded", function () {
  const carouselButtons = document.querySelectorAll(".carousel-button");
  const projectTitles = document.querySelectorAll(".project-title");
  const projectDetails = document.querySelectorAll(".project-details");

  let currentIndex = 0;

  function updateCarousel(index) {
    const carouselImages = document.querySelectorAll(".carousel-image");

    // Ocultar todas las imágenes del carrusel
    carouselImages.forEach((img) => {
      img.classList.remove("active");
    });

    // Mostrar la imagen activa
    carouselImages[index].classList.add("active");

    // Actualizar el texto y las imágenes adicionales
    projectTitles.forEach((title) => {
      title.style.display = "none"; // Ocultar todos los títulos
    });

    projectDetails.forEach((details) => {
      details.classList.remove("active"); // Ocultar todos los detalles
    });

    projectTitles[index].style.display = "block"; // Mostrar el título activo
    projectDetails[index].classList.add("active"); // Mostrar los detalles activos
  }

  carouselButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (button.classList.contains("next")) {
        currentIndex =
          (currentIndex + 1) %
          document.querySelectorAll(".carousel-image").length;
      } else {
        currentIndex =
          (currentIndex -
            1 +
            document.querySelectorAll(".carousel-image").length) %
          document.querySelectorAll(".carousel-image").length;
      }
      updateCarousel(currentIndex);
    });
  });

  // Añadir funcionalidad de despliegue/colapso con animación para los títulos
  projectTitles.forEach((title, index) => {
    title.addEventListener("click", function () {
      const details = projectDetails[index];
      if (details.classList.contains("active")) {
        // Cerrar los detalles si están abiertos
        details.style.maxHeight = "0";
        details.style.opacity = "0";
        setTimeout(() => details.classList.remove("active"), 500); // Esperar a que termine la animación
      } else {
        // Abrir los detalles
        details.classList.add("active");
        details.style.maxHeight = details.scrollHeight + "px";
        details.style.opacity = "1";
      }
    });
  });

  // Inicializar el carrusel mostrando la primera imagen y detalles
  updateCarousel(currentIndex);
});
