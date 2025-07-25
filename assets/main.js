// Fade-out animation on page navigation
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Only animate if not opening in new tab/window
      if (this.target === '' || this.target === undefined) {
        e.preventDefault();
        document.body.classList.add('page-fade-out');
        setTimeout(() => {
          window.location.href = this.href;
        }, 350);
      }
    });
  });
});
// Simple fade-in animation for sections
window.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section, .cta, form, footer.site-footer');
  sections.forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(40px)';
    setTimeout(() => {
      el.style.transition = 'opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)';
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, 200 + i * 150);
  });
});

// Simple nav underline animation
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.textDecoration = 'underline';
  });
  link.addEventListener('mouseleave', () => {
    link.style.textDecoration = 'none';
  });
});
