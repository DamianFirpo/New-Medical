const registerButton = document.getElementById ("register-button")

registerButton.addEventListener("click", () => {

    Swal.fire({
        title: "Menu de opciones",
        html: "Selecciona una opción:",
        input: "radio",
        inputOptions: {
          "agregar-afiliado": "Agregar afiliado",
          "modificar-afiliado": "Modificar afiliado",
          "baja-afiliado": "Baja de afiliado",
          "busqueda-afiliado": "Busqueda de afiliado"
        },
        showCancelButton: true,
        confirmButtonText: "Aceptar",
        cancelButtonText: "Cerrar",
        showCloseButton: true,
        reverseButtons: true,
        focusConfirm: false,
        allowEnterKey: false,
        allowEscapeKey: false
      }).then((result) => {
        if (result.value) {
          // El usuario ha seleccionado una opción
          const opcionSeleccionada = result.value;
          switch (opcionSeleccionada) {
            case "agregar-afiliado":
                window.location.replace("registro.html");
                break;              
            case "modificar-afiliado":
              window.location.replace("modificarAfiliado.html");
              break;
            case "baja-afiliado":
              // Aquí puedes poner el código que quieres ejecutar cuando el usuario seleccione esta opción
              break;
            case "busqueda-afiliado":
              // Aquí puedes poner el código que quieres ejecutar cuando el usuario seleccione esta opción
              break;
            default:
              // El usuario ha seleccionado una opción inválida
              break;
          }
        }
      });
    });



   

