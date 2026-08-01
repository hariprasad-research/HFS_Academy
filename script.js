document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card, .division-card, .grade-card, .gallery-item');

  const reveal = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(reveal, { threshold: 0.1 });
  cards.forEach((card) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(18px)';
    card.style.transition = 'opacity 600ms ease, transform 600ms ease';
    observer.observe(card);
  });

  const style = document.createElement('style');
  style.innerHTML = `.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
  document.head.appendChild(style);
});
