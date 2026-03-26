const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const roleTarget = document.querySelector('.title-switch');

if (roleTarget) {
  const roles = (roleTarget.dataset.roles || '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

  let roleIndex = 0;

  if (roles.length > 0) {
    roleTarget.textContent = roles[0];
    setInterval(() => {
      roleIndex = (roleIndex + 1) % roles.length;
      roleTarget.textContent = roles[roleIndex];
    }, 2200);
  }
}
