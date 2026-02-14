// ─── TOGGLE CLARO / ESCURO ───
const toggleBtn = document.getElementById('themeToggle');
const root = document.documentElement;

// Carrega preferência salva
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  root.classList.add('light');
  toggleBtn.textContent = '☀️';
}

toggleBtn.addEventListener('click', () => {
  root.classList.toggle('light');
  const isLight = root.classList.contains('light');
  toggleBtn.textContent = isLight ? '☀️' : '🌙';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// ─── FADE-IN AO SCROLL ───
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ─── NAV LINK ATIVO AO SCROLL ───
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (scrollY >= s.offsetTop - 100) current = s.getAttribute('id');
  });
  navLinks.forEach(l => {
    l.style.color = '';
    if (l.getAttribute('href') === '#' + current) {
      l.style.color = 'var(--purple-400)';
    }
  });
});