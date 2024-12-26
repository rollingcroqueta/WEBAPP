document.querySelectorAll(".toggle-info").forEach((button) => {
  button.addEventListener("click", () => {
    const details = button.nextElementSibling;
    details.style.display = details.style.display === "none" ? "block" : "none";
    button.textContent = details.style.display === "none" ? "▼" : "▲";
  });
});
