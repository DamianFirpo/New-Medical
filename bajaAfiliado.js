//   //* baja de afiliado *//

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
         // Eliminar al afiliado del array de afiliados registrados
    afiliadosRegistrados.splice(i, 1);
      // Actualizar el Local Storage con el nuevo array de afiliados
    localStorage.setItem("afiliadosRegistrados", JSON.stringify(afiliadosRegistrados));
        // Mostrar un mensaje de confirmación y permitir modificar los datos del afiliado
        Swal.fire({
        title: "Baja de afiliado exitosa",
        icon: "success",
        });
         // Redirigir a la página "login.html" después de 1 segundo
    setTimeout(function() {
        window.location.href = "login.html";
    }, 1000);        
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