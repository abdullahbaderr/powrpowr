document.addEventListener("DOMContentLoaded", () => {

  const images = document.querySelectorAll(".food-item img");

  images.forEach(img => {

    img.style.transition = "all 0.3s ease";
    img.style.cursor = "pointer";

    img.addEventListener("mouseenter", () => {
      img.style.transform = "scale(1.2)";
      img.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
      img.style.zIndex = "100";
      img.style.position = "relative";
    });

    img.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1)";
      img.style.boxShadow = "none";
    });

  });

});