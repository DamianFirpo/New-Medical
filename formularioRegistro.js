const nombres = document.getElementById("nombres");
const apellidos = document.getElementById("apellidos");
const correo = document.getElementById("correo");
const dni = document.getElementById("dni");
const telefono = document.getElementById("telefono");

const registrarAfiliado = document.getElementById("registroDeafiliados");
registrarAfiliado.addEventListener("click", () => {
  if (nombres.value === "" || apellidos.value === "" || correo.value === "" || dni.value === "" || telefono.value === "") {
    Swal.fire({
      title: "Por favor, rellena todos los campos",
      icon: "warning"
    });
  } else {
    let afiliadosRegistrados;
    if (localStorage.getItem("afiliadosRegistrados") === null) {
      afiliadosRegistrados = [];
    } else {
      afiliadosRegistrados = JSON.parse(localStorage.getItem("afiliadosRegistrados"));
    }
    afiliadosRegistrados.push({
      nombres: nombres.value,
      apellidos: apellidos.value,
      correo: correo.value,
      dni: dni.value,
      telefono: telefono.value
    });
    localStorage.setItem("afiliadosRegistrados", JSON.stringify(afiliadosRegistrados));
    Swal.fire({
      title: "Afiliado registrado con éxito!",
      icon: "success"
    });
    setTimeout(function() {
      window.location.replace("login.html");
    }, 1000);
  }
});
