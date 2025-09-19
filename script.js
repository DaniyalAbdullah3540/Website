/* script.js - common site JS */

document.addEventListener('DOMContentLoaded', function () {
  // footer year
  const y = new Date().getFullYear();
  const yEl = document.getElementById('year');
  if (yEl) yEl.textContent = y;

  // mobile nav toggle
  const toggle = document.getElementById('nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  
  window.addEventListener("scroll", function() {
  const header = document.querySelector(".site-header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


  // close mobile nav on link click
  document.querySelectorAll('.site-nav a').forEach(a => {
    a.addEventListener('click', () => nav && nav.classList.remove('open'));
  });

  // contact form handling (works on contact page and index if it has the form)
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      status && (status.textContent = '');
      const fd = new FormData(form);
      const name = (fd.get('name') || '').trim();
      const email = (fd.get('email') || '').trim();
      const message = (fd.get('message') || '').trim();

      if (!name || !email || !message) {
        status.textContent = 'Please fill required fields.';
        return;
      }
      const re = /^\S+@\S+\.\S+$/;
      if (!re.test(email)) {
        status.textContent = 'Please enter a valid email.';
        return;
      }

      status.textContent = 'Sending…';

      
      // Simulate success for demo
      setTimeout(() => {
        status.textContent = 'Thanks — your message has been received.';
        form.reset();
      }, 900);

    });
  }
});
