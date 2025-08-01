// Example JS from original file
console.log("Portfolio JS Loaded");

// Smooth scroll animation for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const navHeight = document.querySelector('nav') ? document.querySelector('nav').offsetHeight : 0;
    const targetPosition = targetElement ? targetElement.getBoundingClientRect().top + window.pageYOffset : 0;
    const offsetPosition = targetPosition - navHeight - 20;

    setTimeout(() => {
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }, 100);
  });
});
