function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Listen for scroll events
  window.addEventListener('scroll', function() {
    // Select all elements you want to animate
    document.querySelectorAll('.slider_section .detail-box h1, .slider_section .detail-box h2, .slider_section .detail-box h3, .slider_section .detail-box p').forEach(function(item) {
      if (isInViewport(item)) {
        // Add the animation class
        item.classList.add('fadeInUp');
      }
    });
  });