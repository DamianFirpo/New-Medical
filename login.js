//REGISTRO

const url = "/New-Medical-DOM-copia/guardar-usuario.php";


const usuariosRegistrados = JSON.parse(localStorage.getItem("usuariosRegistrados")) || [];

const registerButton = document.getElementById('registerDefault');

registerButton.addEventListener('click', () => {
    Swal.fire({
        title: 'Registrarse',
        html: `
        <input type="text" id="usuario" class="swal2-input" placeholder="Usuario">
        <input type="password" class="swal2-input" id="password" placeholder="contraseña">
        <input type="number" id="edad" class="swal2-input" placeholder="Edad">
        <input type="text" id="dni" class="swal2-input" placeholder="DNI">
        <input type="text" id="email" class="swal2-input" placeholder="Email">
        <input type="text" id="celular" class="swal2-input" placeholder="Celular">
        `,
        confirmButtonText: 'Registrarse',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        preConfirm: () => { 
            if (!document.getElementById('usuario').value || !document.getElementById('password').value || !document.getElementById('edad').value || !document.getElementById('dni').value || !document.getElementById('email').value || !document.getElementById('celular').value) {
                Swal.showValidationMessage(`Los campos no pueden estar vacíos`); 
            }
        }
    })
    .then((result) => {
        if (result.value) {
            // si se hace clic en el botón de confirmación
            // obtén el valor del input "usuario"
            const usuario = document.getElementById('usuario').value;
            const password = document.getElementById('password').value;
            const edad = document.getElementById('edad').value;
            const dni = document.getElementById('dni').value;
            const email = document.getElementById('email').value;
            const celular = document.getElementById('celular').value;

            // crea un objeto con los datos del usuario
            const usuarioNuevo = {
                usuario: usuario,
                password: password,
                edad: edad,
                dni: dni,
                email: email,
                celular: celular
            };

            // agrega el usuarioNuevo al array de usuarios registrados
            usuariosRegistrados.push(usuarioNuevo);

            // convierte el array a una cadena de texto con JSON.stringify
            const usuariosRegistradosString = JSON.stringify(usuariosRegistrados);

            // guarda la cadena en el LocalStorage con localStorage.setItem
            localStorage.setItem('usuariosRegistrados', usuariosRegistradosString); 

            // envía los datos del nuevo usuario al servidor
            const xhr = new XMLHttpRequest();
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    console.log(xhr.responseText);
                }
            };
            xhr.send(`usuario=${usuario}&password=${password}&edad=${edad}&dni=${dni}&email=${email}&celular=${celular}`);

            Swal.fire({
                title: `¡Bienvenido/a ${usuario}!`,        
                confirmButtonText: 'Continuar',        
            })    
            .then((result) => {
                if (result.value) {            
                    // si se hace clic en el botón de confirmación
                    Swal.fire({
                      icon: 'success',
                      title: 'Has iniciado sesión',
                      showConfirmButton: false,
                      timer: 1500
                  });
              }
          });
      }
  });
  });

  ///LOGIN


const loginButton = document.querySelector('.login-button');

const usuariosRegistrados2 = JSON.parse(localStorage.getItem("usuariosRegistrados"));

loginButton.addEventListener("click", () => {     
  Swal.fire( {
    title: "login",
    html: `<input type="text" id="usuario" class="swal2-input" placeholder="Usuario">
          <input type="password" class="swal2-input" id="password" placeholder="contraseña">`,

    confirmButtonText: "Iniciar",
    showCancelButton: true,
    cancelButtonText: "Cancelar",
    
  }).then ((result)=> {
    if(result.isConfirmed) {
      const usuario = document.getElementById("usuario").value;
      const password = document.getElementById ("password").value;
      console.log (usuario, password);

      let usuarioValido = false;

      for (let i = 0; i < usuariosRegistrados.length; i++) {
        if (usuariosRegistrados2[i].usuario === usuario && usuariosRegistrados2[i].password === password) {
          usuarioValido = true;
          break;
        }
      }

      if (usuarioValido) {
        setTimeout(function() {
          window.location.href = "./sections/login.html"; 
        }, 2000);
        console.log ("Sesión iniciada con éxito");

        Swal.fire({
          position: 'center',
          icon: 'success', 
          title: 'Bienvenido!',   
          showConfirmButton: false,
          timer: 1500    
        })
      } else {
        event.preventDefault();          
        Swal.fire ( {
          title: "Datos de inicio de sesión erróneos",
          icon: "error",
          confirmButtonText: "Aceptar",            
        })
      }
    } 
  })
})  

























