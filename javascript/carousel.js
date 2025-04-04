document.addEventListener("DOMContentLoaded", () => {
  const imagesContainer = document.querySelector(".carousel-images");
  const images = document.querySelectorAll(".carousel-images img");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const dots = document.querySelectorAll(".dot");

  let currentIndex = 0;
  let isAnimating = false;

  // Duplicate images for seamless scroll
  function cloneImages() {
    images.forEach((image) => {
      const clone = image.cloneNode(true);
      imagesContainer.appendChild(clone);
    });
  }
  cloneImages();

  const totalImages = imagesContainer.children.length;

  // Function to update the carousel view
  function updateCarousel() {
    const width = images[0].clientWidth;
    imagesContainer.style.transform = `translateX(-${currentIndex * width}px)`;

    // Update active dot
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex % images.length);
    });
  }

  // Smoothly jump back to start when reaching the duplicated set
  function checkReset() {
    const width = images[0].clientWidth;
    if (currentIndex >= images.length) {
      isAnimating = true;
      imagesContainer.style.transition = "none"; // Disable animation
      currentIndex = 0;
      imagesContainer.style.transform = `translateX(-${
        currentIndex * width
      }px)`;
      setTimeout(() => {
        isAnimating = false;
        imagesContainer.style.transition = "transform 0.5s ease-in-out"; // Re-enable animation
      });
    }
  }

  // Next button click
  nextBtn.addEventListener("click", () => {
    if (!isAnimating) {
      currentIndex = (currentIndex + 1) % totalImages;
      updateCarousel();
      checkReset();
    }
  });

  // Previous button click
  prevBtn.addEventListener("click", () => {
    if (!isAnimating) {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      updateCarousel();
    }
  });

  // Clickable dots
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      currentIndex = parseInt(dot.dataset.index, 10);
      updateCarousel();
    });
  });

  // Auto-play: Transition to the next image every 1 second
  setInterval(() => {
    if (!isAnimating) {
      currentIndex++;
      updateCarousel();
      checkReset();
    }
  }, 2200); // 1000 ms = 1 second

  // Adjust carousel on window resize
  window.addEventListener("resize", updateCarousel);
});
