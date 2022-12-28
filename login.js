

const loginButton = document.querySelector('.login-button');
const loginForm = document.querySelector('.login-form');


const loginActive = document.querySelector('.loginButton');
const loginEmail = document.querySelector('.loginEmail');

const passwordAutorizada = "1234"
const userAutorizado = "alguien@example.com"


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


        /**Quiero redigir a otra pagina**/

        if (usuario === userAutorizado && password === passwordAutorizada) {
          window.location.href = "./sections/login.html"; 
          console.log ("Sesión iniciada con éxito");
          alert ("Sesion iniciada con exito!");          
          
          
          Swal.fire({
            position: 'top-end',
            icon: 'success', 
            title: 'Bienvenido!',   
            showConfirmButton: false,
            timer: 1500    
          })       

        }

        else {
          event.preventDefault();          
          Swal.fire ( {
            title: "Datos de inicio de sesión erroneos",
            icon: "error",
            confirmButtonText: "Aceptar",            
          })
          alert ("Psst.. Intenta con: alguien@example.com y 1234"); 
          
        }
      } 
    })
})  






















// loginActive.addEventListener('click', () => {
// if (loginEmail.value === "alguien@example.com") {
//   window.location.href = "./sections/login.html";
  // Swal.fire({
  //   position: 'top-end',
  //   icon: 'success', 
  //   title: 'Bienvenido!',   
  //   showConfirmButton: false,
  //   timer: 1500    
  // })  
// } else {
//   loginActive.addEventListener ("click" , () => {
//     Swal.fire ({
//       icon: 'error',
//         title: 'Oops...',
//         text: 'Datos de inicio de sesión incorrectos!',
//         html: ` <p> Datos de inicio de sesion incorrectos!</p>
//             <a href= "" class="masterSolution" id="solucionMaestra" class="swal12-footer">Problemas con el inicio de sesión?</a>`        
//     })  
//   } )
//   loginForm.reset();
// }
// });


// // Añade un evento click al enlace o botón "iniciar sesión"
// loginButton.addEventListener('click', function(event) {
//   event.preventDefault(); // Evita que se siga el enlace

//   loginForm.style.display = 'block'; // Muestra el formulario
// });

// Obtiene el botón "cerrar"
// const closeButton = loginForm.querySelector('.close-button');

// // Añade un evento click al botón "cerrar"
// closeButton.addEventListener('click', function() {
//   loginForm.style.display = 'none'; // Oculta el formulario
// });

      














