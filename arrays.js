

    function welcome() {
    alert("Bienvenido/a al sistema de registros de New Medical!");    
    let option = parseInt(prompt("Ingrese la opcion deseada: \n 1) Dar de alta nuevo afiliado \n 2) Modificar afiliado \n 3) Dar de baja afiliado \n 4) Consultar Afiliado \n 5) Salir del menú de resgistros"));
    return option; 
}

    function altaAfiliado () {
        let nombre = prompt ("Ingrese el nombre del afiliado: " );
        let apellido = prompt ("Ingrese el apellido del afiliado: ");
        let dni = parseInt (prompt("Ingrese el DNI del afiliado "));
        let telefono = parseInt (prompt("Ingrese el numero de celular "));
        let afiliado = new Afiliado(nombre, apellido, dni, telefono);
        arrayAfiliado.push (afiliado);
        console.log (arrayAfiliado);
    }

    function bajaAfiliado () {
        let dni = parseInt (prompt("Ingrese el DNI del afiliado: "));    
        let afiliado = arrayAfiliado.find (afiliado => afiliado.dni === dni);
        let indice = arrayAfiliado.indexOf(afiliado);
        arrayAfiliado.splice(indice, 1);
        console.log (arrayAfiliado);
    }

    function modificarAfiliado () {
        let dni = parseInt (prompt("Ingrese el DNI del afiliado: "));
        let afiliado = arrayAfiliado.find (afiliado => afiliado.dni === dni);
        let indice = arrayAfiliado.indexOf (afiliado);
        let nombre = prompt("Ingrese el nombre del afiliado");
        let apellido = prompt ("Ingrese el apellido del afiliado");
        let telefono = parseInt(prompt("Ingrese el celular del afiliado"));
        let afiliadoModificado = new afiliado(nombre, apellido, dni, telefono);
        arrayAfiliado.splice (indice, 1 , afiliadoModificado);
        console.log (arrayAfiliado);
    }

    function consultarAfiliado () {
        let dni = parseInt (prompt("Ingrese el DNI del afiliado"));
        let afiliado = arrayAfiliado.find (afiliado.dni === dni);
        console.log (afiliado);
    }

    function salirRegistro () {
        alert ("Hasta la próxima!");
    }

    let option = welcome();
    switch (option) {
        case 1:
            altaAfiliado ();
            break;
        case 2:
            bajaAfiliado ();
            break;
        case 3:
            modificarAfiliado();
            break;
        case 4:
            consultarAfiliado();
            break;
        case 5:
            break;
    }











    

    //ALMACENANDO LOS DATOS DEL FORMULARIO EN LOCALSTORAGE

    class Contacto {
        constructor(nombre, email, mensaje) {
            this.nombre = nombre;
            this.email = email;
            this.mensaje = mensaje;
        }

        adjuntarDatos(){
            let resultado = this.nombre;
            let resultado2 = this.email;
            let resultado3 = this.mensaje;
            return resultado;
        }
    }   

    const solicitanTes = [];

    const contacto1 = new Contacto("Jorge" , "jorge@gmail.com");
    const contacto2 = new Contacto("Paulina" , "paulina@gmail.com")

    const datosPersonales = document.getElementById('submitButton');   

    function agregarContacto(){
        const nombre = document.getElementById("nomBre").value;
        const email = document.getElementById("tuMail").value;
        const mensaje = document.getElementById ("checkMesagge").value;

        const nuevoContacto = new Contacto (nombre, email, mensaje);
        solicitanTes.push(nuevoContacto);

        console.log (solicitanTes);
        datosPersonales.reset();
        
    }

    function procesarFormulario (nombre, email , mensaje) {
    
        const nuevoContacto = new Contacto (nombre, email, mensaje);    

        solicitanTes.push(nuevoContacto);        
    }


    const form = document.getElementById('submitButton');
    form.addEventListener('click', procesarFormulario);
    
    solicitanTes.push(contacto1);
    solicitanTes.push(contacto2);

    const solicitantesJSON = JSON.stringify(solicitanTes); 
    localStorage.setItem("solicitanTes", solicitantesJSON);

    const recuperandoForm = localStorage.getItem("solicitanTes");

    const formObjeto = JSON.parse (recuperandoForm); 

    datosPersonales.addEventListener("submit" , (e) => {
        e.preventDefault();
        agregarContacto();
        procesarFormulario ();
    })  
    
    localStorage.setItem("Persona", JSON.stringify(solicitanTes));

    formuLario.reset();

    
    


















