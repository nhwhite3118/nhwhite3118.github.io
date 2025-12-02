// Back to top button functionality
document.addEventListener('DOMContentLoaded', function() {
  var backToTopButton = document.getElementById('back-to-top');
  
  // Show button when user scrolls down 300px
  window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  };
  
  // Scroll to top when button is clicked
  backToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Image carousel functionality
  const carousels = document.querySelectorAll('.imagecarousel');

  carousels.forEach(carousel => {
    const images = carousel.querySelectorAll('img');
    const prevButton = carousel.querySelector('.prev-button');
    const nextButton = carousel.querySelector('.next-button');
    const paginationContainer = carousel.querySelector('.carousel-pagination');
    let currentImageIndex = 0;
    let autoSlideInterval;

    function startAutoSlide() {
      autoSlideInterval = setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateCarousel();
      }, 3000); // Change image every 3 seconds (3000 milliseconds)
    }

    function stopAutoSlide() {
      clearInterval(autoSlideInterval);
    }

    function updateCarousel() {
      images.forEach((img, index) => {
        img.style.display = (index === currentImageIndex) ? 'block' : 'none';
      });
      updatePaginationDots();
    }

    function updatePaginationDots() {
      if (paginationContainer) {
        paginationContainer.innerHTML = '';
        images.forEach((_, index) => {
          const dot = document.createElement('span');
          dot.classList.add('dot');
          if (index === currentImageIndex) {
            dot.classList.add('active');
          }
          dot.addEventListener('click', () => {
            stopAutoSlide();
            currentImageIndex = index;
            updateCarousel();
            startAutoSlide(); // Restart auto-slide after manual interaction
          });
          paginationContainer.appendChild(dot);
        });
      }
    }

    if (prevButton) {
      prevButton.addEventListener('click', () => {
        stopAutoSlide();
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateCarousel();
        startAutoSlide(); // Restart auto-slide after manual interaction
      });
    }

    if (nextButton) {
      nextButton.addEventListener('click', () => {
        stopAutoSlide();
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateCarousel();
        startAutoSlide(); // Restart auto-slide after manual interaction
      });
    }

    // Initialize carousel and start auto-slide
    updateCarousel();
    startAutoSlide();
  });
});
