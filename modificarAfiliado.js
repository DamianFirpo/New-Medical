  

//   //* modificar datos afiliado *//

document.getElementById("registroDeafiliados").addEventListener("click", function() {
  // Obtener el valor del input del DNI
  let dni = document.getElementById("telefono").value;
  // Obtener el array de afiliados registrados del Local Storage
  let afiliadosRegistrados = JSON.parse(localStorage.getItem("afiliadosRegistrados"));
  // Inicializar la bandera en false
  let afiliadoEncontrado = false;
  // Recorrer el array de afiliados registrados
  for (let i = 0; i < afiliadosRegistrados.length; i++) {
    // Si el DNI ingresado coincide con el DNI de algún afiliado registrado
    if (afiliadosRegistrados[i].dni == dni) {
      // Mostrar un mensaje de confirmación y permitir modificar los datos del afiliado
      Swal.fire({
        title: "Afiliado encontrado, puede modificar sus datos",
        icon: "success",
      });
      // Mostrar los inputs para modificar los datos del afiliado
      let inputsModificacion = document.getElementById("inputsModificacion");
      inputsModificacion.style.display = "block";
      // Código para modificar los datos del afiliado...
      // Cambiar el valor de la bandera a true
      afiliadoEncontrado = true;
      // Salir del bucle for
      break;
    }
  }
  // Si no se encontró al afiliado
  if (!afiliadoEncontrado) {
    Swal.fire({
      title: "Afiliado no encontrado, verifique el DNI",
      icon: "error",
    });
  }
});

document.getElementById("guardarCambios").addEventListener("click", function() {
  // Obtener el nuevo valor de cada input
  let nuevoNombre = document.getElementById("nuevoNombre").value;
  let nuevoApellido = document.getElementById("nuevoApellido").value;
  let nuevoDni = document.getElementById("nuevoDni").value;
  let nuevoEmail = document.getElementById("nuevoEmail").value;
  let nuevoCelular = document.getElementById("nuevoCelular").value;
  // Obtener el DNI del afiliado a modificar
  let dni = document.getElementById("telefono").value;
  // Obtener el array de afiliados registrados del Local Storage
  let afiliadosRegistrados = JSON.parse(localStorage.getItem("afiliadosRegistrados"));
  // Recorrer el array de afiliados registrados
  for (let i = 0; i < afiliadosRegistrados.length; i++) {
    // Si el DNI coincide con el DNI de algún afiliado registrado
    if (afiliadosRegistrados[i].dni == dni) {
    // Actualizar los datos del afiliado con los nuevos valores
    afiliadosRegistrados[i].nombre = nuevoNombre;
    afiliadosRegistrados[i].apellido = nuevoApellido;
    afiliadosRegistrados[i].dni = nuevoDni;
    afiliadosRegistrados[i].email = nuevoEmail;
    afiliadosRegistrados[i].celular = nuevoCelular;
    // Eliminar el afiliado anterior del array
    afiliadosRegistrados.splice(i, 1);
    // Agregar el afiliado nuevo al array
    afiliadosRegistrados.push({
    nombre: nuevoNombre,
    apellido: nuevoApellido,
    dni: nuevoDni,
    email: nuevoEmail,
    celular: nuevoCelular
    });
    // Guardar el array actualizado en el Local Storage
    localStorage.setItem("afiliadosRegistrados", JSON.stringify(afiliadosRegistrados));
    
    // Mostrar una alerta de "Afiliado modificado con éxito"
  Swal.fire({
    title: "Afiliado modificado con éxito!",
    icon: "success",
  });
  setTimeout(function() {
    window.location.href = "login.html";
  }, 1000);  
    // Salir del bucle for
    break;
    }
    
  }
});



  