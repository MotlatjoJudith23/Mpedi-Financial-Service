
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});


const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();

  alert('Thank you for contacting MPEDI Financial Services! We’ll get back to you soon.');
  form.reset();
});
