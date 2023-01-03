const usuario = document.getElementById("nombres");
const apellidos = document.getElementById("apellidos");
const email = document.getElementById("correo");
const dni = document.getElementById("dni");
const celular = document.getElementById("telefono");

const registrarAfiliado = document.getElementById("registroDeafiliados");
registrarAfiliado.addEventListener("click", () => {
  if (usuario.value === "" || apellidos.value === "" || email.value === "" || dni.value === "" || celular.value === "") {
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
      usuario: usuario.value,
      apellidos: apellidos.value,
      email: email.value,
      dni: dni.value,
      celular: celular.value
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
