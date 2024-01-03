document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const menuLinks = document.querySelectorAll('.navbar-nav .nav-item .nav-link');
  
    function onScroll() {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  

      menuLinks.forEach((link) => {
        link.parentElement.classList.remove('active');
      });

      if (scrollPosition < sections[0].offsetTop) {
        document.querySelector('.navbar-nav .nav-item a[href="index.html"]').parentElement.classList.add('active');
      }
  
      sections.forEach((section) => {
        if (section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
          menuLinks.forEach((link) => {
            if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
              link.parentElement.classList.add('active');
            }
          });
        }
      });
    }
  
    window.addEventListener('scroll', onScroll);
  });