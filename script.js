/**
 * Global JavaScript for LiRx Website
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize navigation highlighting
  highlightCurrentPage();

  // Add micro-animations on scroll
  initScrollAnimations();
});

/**
 * Highlights the current page in the main navigation
 */
function highlightCurrentPage() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    // Basic matching for index.html or empty path mapping to Home, etc.
    const href = link.getAttribute('href');
    if (!href) return;

    if (currentPath.endsWith(href) || (currentPath.endsWith('/') && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/**
 * Basic Intersection Observer to fade in elements as they scroll into view
 */
function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Add 'animate-on-scroll' class to elements in HTML to enable this
  const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
  elementsToAnimate.forEach(el => {
    // Initial state: hide
    el.style.opacity = '0';
    observer.observe(el);
  });
}

// Mobile menu toggle logic
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('nav-open');
    });
  }

  // Mobile shop filter toggle logic
  const filterToggle = document.querySelector('.mobile-filter-toggle');
  const sidebar = document.querySelector('.sidebar');
  if (filterToggle && sidebar) {
    filterToggle.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });
  }

  // Dynamic Price Slider
  const priceSlider = document.getElementById('price-slider');
  const priceDisplay = document.getElementById('price-display');

  if (priceSlider && priceDisplay) {
    priceSlider.addEventListener('input', (e) => {
      priceDisplay.textContent = `$${e.target.value}`;
    });
  }
});
