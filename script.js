document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel");
  const projectTitles = document.querySelectorAll(".project-title");
  let activeProject = null;

  carousels.forEach((carousel) => {
    const images = carousel.querySelectorAll(".carousel-image");
    const prevBtn = carousel.querySelector(".prev");
    const nextBtn = carousel.querySelector(".next");
    let currentIndex = 0;

    function showImage(index) {
      images[currentIndex].classList.remove("active");
      images[index].classList.add("active");
      currentIndex = index;
    }

    function nextImage() {
      const nextIndex = (currentIndex + 1) % images.length;
      showImage(nextIndex);
    }

    function prevImage() {
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(prevIndex);
    }

    nextBtn.addEventListener("click", nextImage);
    prevBtn.addEventListener("click", prevImage);
  });

  function toggleProjectDetails(projectId) {
    const projectDetails = document.getElementById(projectId);

    if (activeProject === projectId) {
      projectDetails.classList.remove("active");
      setTimeout(() => {
        projectDetails.style.display = "none";
      }, 500);
      activeProject = null;
    } else {
      if (activeProject) {
        const previousProjectDetails = document.getElementById(activeProject);
        previousProjectDetails.classList.remove("active");
        setTimeout(() => {
          previousProjectDetails.style.display = "none";
        }, 500);
      }
      projectDetails.style.display = "block";
      setTimeout(() => {
        projectDetails.classList.add("active");
      }, 10);
      activeProject = projectId;
    }
  }

  projectTitles.forEach((title) => {
    title.addEventListener("click", () => {
      const projectId = title.getAttribute("data-project");
      toggleProjectDetails(projectId);
    });
  });
});
