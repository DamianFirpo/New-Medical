

const loginButton = document.querySelector('.login-button');

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



































