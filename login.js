
// Obtiene el enlace o botón "iniciar sesión" y el formulario
const loginButton = document.querySelector('.login-button');
const loginForm = document.querySelector('.login-form');

// Añade un evento click al enlace o botón "iniciar sesión"
loginButton.addEventListener('click', function(event) {
  event.preventDefault(); // Evita que se siga el enlace

  loginForm.style.display = 'block'; // Muestra el formulario
});

// Obtiene el botón "cerrar"
const closeButton = loginForm.querySelector('.close-button');

// Añade un evento click al botón "cerrar"
closeButton.addEventListener('click', function() {
  loginForm.style.display = 'none'; // Oculta el formulario
});


const loginActive = document.querySelector('.loginButton');

// Agrega un manejador de eventos click al botón
loginActive.addEventListener('click', function() {
  // Redirige a la nueva URL
  event.preventDefault();
  window.location.href = '/sections/login.html';
});