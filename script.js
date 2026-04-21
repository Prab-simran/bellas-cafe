// Toggle mobile nav
function toggleMenu() {
  document.getElementById('menu').classList.toggle('open');
}

// Switch menu tabs
function showTab(id, btn) {
  document.querySelectorAll('.grid').forEach(g => g.classList.add('hide'));
  document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.remove('hide');
  btn.classList.add('active');
}

// Form validation
function validateForm(e) {
  e.preventDefault();
  const name  = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg   = document.getElementById('msg').value.trim();
  let valid = true;

  document.getElementById('nameErr').textContent  = name  ? '' : '⚠ Name is required.';
  document.getElementById('emailErr').textContent = /\S+@\S+\.\S+/.test(email) ? '' : '⚠ Valid email required.';
  document.getElementById('msgErr').textContent   = msg   ? '' : '⚠ Message is required.';

  if (!name || !/\S+@\S+\.\S+/.test(email) || !msg) return;

  document.getElementById('ok').classList.remove('hide');
  e.target.reset();
  setTimeout(() => document.getElementById('ok').classList.add('hide'), 3000);
}