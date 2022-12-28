const submitButton = document.getElementById("submitButton");

// sendForm.addEventListener("click", ()=> {
// alert ("Formulario de contacto enviado exitosamente!");    
// console.log ("Formulario enviado!");
// });

// const sendForm = document.getElementById("sendForm");

// sendForm.onclick = ()=>{
//     alert ("Formulario de contacto enviado exitosamente");
//     console.log ("Formulario enviado exitosamente!");
// };

function validateForm() {
  // Obtener el valor del campo "nomBre"
  var inputField = document.getElementById("nomBre").value;

  // Comprobar si el campo está vacío
  if (inputField === "") {
    // Mostrar un mensaje de error
    alert("Por favor, rellena el campo *NOMBRE antes de enviar el formulario");

    // Evitar que se envíe el formulario
    return false;
  } else {
    // Si el campo no está vacío, permitir que el formulario se envíe normalmente
    return true;    
  }
}

function validateForm2() {
  // Obtener el valor del campo "tuMail"
  var inputField = document.getElementById("tuMail").value;

  // Comprobar si el campo está vacío
  if (inputField === "") {
    // Mostrar un mensaje de error
    alert("Por favor, rellena el campo *E-MAIL antes de enviar el formulario");

    // Evitar que se envíe el formulario
    return false;
  } else {
    // Si el campo no está vacío, permitir que el formulario se envíe normalmente
    return true;
  }
}

function submitForm(event) {
  event.preventDefault();
  if (validateForm() && validateForm2()) {
    document.getElementById("submitButton").scrollIntoView();
    setTimeout(function() {
    // Si ambas funciones devuelven true, entonces se muestra el mensaje de éxito
    Swal.fire({
      position: 'center',
      icon: 'success', 
      title: 'Formulario enviado',
      text: 'Muchas gracias!',   
      showConfirmButton: false,
      timer: 1500    
    })
    
  }, 500);
  
  } else {
    // Si alguna de ellas devuelve false, se muestra el mensaje de error
    
  }
}

class Contactado {
    constructor (nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

const arrayContactados = [];

const formulario = document.getElementById ("formuLario");


submitButton.addEventListener("click", (e)=>{
    e.preventDefault();
    const nomBre = document.getElementById("nomBre");
    const tuMail = document.getElementById("tuMail");    
    console.log("El nombre ingresado es : " + nomBre.value);
    console.log ("El mail ingresado es : " + tuMail.value);
    console.log ("El mensaje ingresado es : " + checkMesagge.value);
    console.log ("Formulario enviado");
  

    const contactados = new Contactado (nomBre.value , tuMail.value);
    arrayContactados.push (contactados);
    
    console.log(arrayContactados);
    
    formulario.reset ();
    
})

//RECORRIENDO LOCALSTORAGE CON CICLO FOR

for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  let value = localStorage.getItem(key);
  console.log(key + ": " + value);
}

const contratarBoton = document.getElementById ("contractSub");

contratarBoton.addEventListener("click" , (e)=>{
  e.preventDefault();
  Swal.fire ( {
    title: "Debe iniciar sesion para poder contratar",
    icon: "error",
    confirmButtonText: "Aceptar",            
  })
})

const contratarBoton2 = document.getElementById ("contractSub2");

contratarBoton2.addEventListener("click" , (e)=>{
  e.preventDefault();
  Swal.fire ( {
    title: "Debe iniciar sesion para poder contratar",
    icon: "error",
    confirmButtonText: "Aceptar",            
  })
})

const contratarBoton3 = document.getElementById ("contractSub3");

contratarBoton3.addEventListener("click" , (e)=>{
  e.preventDefault();
  Swal.fire ( {
    title: "Debe iniciar sesion para poder contratar",
    icon: "error",
    confirmButtonText: "Aceptar",            
  })
})







  