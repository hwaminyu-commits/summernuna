document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const group = btn.dataset.group;

      cards.forEach(card => {
        if (group === 'all' || card.dataset.group === group) {
          card.classList.remove('hidden');
          card.style.animation = 'none';
          card.offsetHeight; // trigger reflow
          card.style.animation = '';
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
});
