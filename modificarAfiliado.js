// Asociar el evento "click" al botón "Buscar afiliado"
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
        alert("Afiliado encontrado. Puedes modificar sus datos.");
        // Código para modificar los datos del afiliado...
  
        // Cambiar el valor de la bandera a true
        afiliadoEncontrado = true;
        
        // Salir del bucle for
        break;
      }
    }
  
    // Si no se encontró al afiliado
    if (!afiliadoEncontrado) {
      alert("Afiliado no encontrado. Verifique el DNI ingresado.");
    }
  });
  