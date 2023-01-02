const registerButton = document.getElementById('registerDefault');

registerButton.addEventListener('click', () => {
Swal.fire({
    title: 'Registrarse',
    html: `
<input type="text" id="usuario" class="swal2-input" placeholder="Usuario/Email">
<input type="password" class="swal2-input" id="password" placeholder="contraseña">
    `,
    confirmButtonText: 'Registrarse',
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    preConfirm: () => { 
        if (!document.getElementById('usuario').value || !document.getElementById('password').value) {
        Swal.showValidationMessage(`Los campos no pueden estar vacíos`); }
    }
})
.then((result) => {
    if (result.value) {
      // si se hace clic en el botón de confirmación
      // obtén el valor del input "usuario"
    const usuario = document.getElementById('usuario').value;

    Swal.fire({
        title: `¡Bienvenido/a ${usuario}!`,
        text: 'Ahora vamos a pedirte algunos datos adicionales.',
        confirmButtonText: 'Continuar',        
    })
    .then((result) => {
        if (result.value) {
        // si se hace clic en el botón de confirmación
    Swal.fire({
        title: 'Ingresa tu edad y DNI',
        html: `
        <input type="number" id="edad" class="swal2-input" placeholder="Edad">
        <input type="text" id="dni" class="swal2-input" placeholder="DNI">
        `,
        confirmButtonText: 'Enviar',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        preConfirm: () => {
        // valida que los campos no estén vacíos
        if (!document.getElementById('edad').value || !document.getElementById('dni').value) {
        Swal.showValidationMessage(`Los campos no pueden estar vacíos`);}}
        })
        .then((result) => {
        if (result.value) {
        // si se hace clic en el botón de confirmación
        Swal.fire({
        icon: 'success',
        title: 'Todo listo!',
        text: 'Procediendo a inicio de sesión',
        })
        .then(() => {
        // programa la redirección a login.html después de 2 segundos
        setTimeout(() => {
        location.replace("./sections/login.html");;
        }, 1000);
        })
        }
        })
        }
    })
    }
})
});
