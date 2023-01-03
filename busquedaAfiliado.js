const buscarButton = document.getElementById('registroDeafiliados');

buscarButton.addEventListener('click', () => {
  // Obtén el valor del input "telefono"
  const telefono = document.getElementById('telefono').value;

  // Obtén el array de afiliados registrados y usuarios registrados del LocalStorage y conviértelos a arrays de objetos
  const afiliadosRegistradosString = localStorage.getItem('afiliadosRegistrados');
  const afiliadosRegistrados = JSON.parse(afiliadosRegistradosString);
  const usuariosRegistradosString = localStorage.getItem('usuariosRegistrados');
  const usuariosRegistrados = JSON.parse(usuariosRegistradosString);

  // Combina los dos arrays en uno solo
  const registrados = afiliadosRegistrados.concat(usuariosRegistrados);

  // Busca al afiliado o usuario con el DNI ingresado
  const registradoEncontrado = registrados.find((registrado) => registrado.dni === telefono);

  if (registradoEncontrado) {
    // Si se encuentra el afiliado o usuario, muestra los datos en una alerta de SweetAlert
    Swal.fire({
      title: `Datos del registrado`,
      html: `
        <p>Usuario: ${registradoEncontrado.usuario}</p>
        <p>Edad: ${registradoEncontrado.edad}</p>
        <p>DNI: ${registradoEncontrado.dni}</p>
        <p>Email: ${registradoEncontrado.email}</p>
        <p>Celular: ${registradoEncontrado.celular}</p>
      `,
    });
  } else {
    // Si no se encuentra el afiliado o usuario, muestra una alerta de error
    Swal.fire({
      icon: 'error',
      title: 'Registrado no encontrado',
      text: 'Verifique el DNI ingresado',
    });
  }
});
