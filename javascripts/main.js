console.log('This would be the main JS file.');

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
});
