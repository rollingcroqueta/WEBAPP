document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach((carousel) => {
    const images = carousel.querySelectorAll(".carousel-image");
    const prevBtn = carousel.querySelector(".prev");
    const nextBtn = carousel.querySelector(".next");
    let currentIndex = 0;

    function showImage(index) {
      images.forEach((img) => img.classList.remove("active"));
      images[index].classList.add("active");
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }

    function prevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    }

    nextBtn.addEventListener("click", nextImage);
    prevBtn.addEventListener("click", prevImage);
  });
});
