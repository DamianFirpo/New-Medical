// INGRESAR NOMBRE



const nombres = [prompt ('Ingrese su nombre y apellido por favor')]


function solicitarNombre () {   
alert ("Bienvenido/a " + "" + nombres)
return "Bienvenido/a " + "" + nombres;
}

solicitarNombre();



//INGRESAR EDAD


for (let i = 9 ; i <= 19; i++) {
        let edades = prompt ('Ingrese su edad por favor');
        alert (" Horario del turno: " + i + "hs." + " Edad: " + edades + " Nombre: " + nombres );
        break;
    }

    let pregunta = prompt ('Es tu primera vez en nuestra web?');


    if (pregunta.toUpperCase() === 'SI')  {
        alert ('Bienvenido/a a New Medical!');
    }


    //PRIMERA VEZ?
    
    
    else if (pregunta.toUpperCase() === 'NO') {
        
        let recoMendar = prompt ('Nos recomendaria como asistente medico?') ;
    
        if (recoMendar.toUpperCase() === 'SI')
        alert ('Muchas gracias!'); 
    
        else if (recoMendar.toUpperCase() === 'NO') {
    
        let mejorAr = prompt ('Comentenos en que podemos mejorar') ;
    
        alert ('Gracias por su valoracion')
        
        
        }}


    //ARRAY


    const clientsData = [
        {
        name: 'Marta',
        from: 'Colombia',
        age: '29',
    },

    {
        name: 'Daniel',
        from: 'Argentina',
        age: '32',
    },

    {
        name: 'Julieta',
        from: 'Colombia',
        age: '29',
    },

    {
        name: 'Julian',
        from: 'Argentina',
        age: '25',
    },

    {
        name: 'Edgardo',
        from: 'Argentina',
        age: '53',
    },

    {
        name: 'Maria',
        from: 'Mexico',
        age: '22',
    },

    'Maria'

    ]    

    //BUSCANDO A TITO

    //console.log (clientsData.includes ('Maria') )

    // //MOSTRANDO TODOS LOS CLIENTES

    //for (const persons of clientsData)
    //console.log (clientsData);

    // //REBANADA DE Julieta, Julian y Jorge.

    //const copiaclientsData = [clientsData.slice(2,5)]
    //console.log (copiaclientsData)



    class Afiliado {
        constructor(nombre, apellido, dni, telefono){
            this.nombre = nombre;
            this.apellido = apellido;
            this.dni = dni;
            this.telefono = telefono;
        }
    }

    const AfiliadoJorge = new Afiliado ("Jorge", "Estuzanga", 40789654, 1154786534);
    const AfiliadoSusana = new Afiliado ("Susana", "Fachi", 20876456, 1131002412);
    const AfiliadoManuel = new Afiliado ("Manuel", "Marchesi", 40873907, 1131087924);
    const AfiliadoNerina = new Afiliado ("Nerina", "Cotta", 4098245321, 1178562135);

    const arrayAfiliado = [];

    arrayAfiliado.push(AfiliadoJorge);
    arrayAfiliado.push(AfiliadoManuel);
    arrayAfiliado.push(AfiliadoNerina);
    arrayAfiliado.push(AfiliadoSusana);

    console.log (arrayAfiliado);

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

    const datosPersonales = document.getElementById("formuLario");   

    function agregarContacto(){
        const nombre = document.getElementById("nomBre").value;
        const email = document.getElementById("tuMail").value;
        const mensaje = document.getElementById ("checkMesagge").value;

        const nuevoContacto = new Contacto (nombre, email, mensaje);
        solicitanTes.push(nuevoContacto);

        console.log (solicitanTes);
        datosPersonales.reset();
        
    }

    datosPersonales.addEventListener("submit" , (e) => {
        e.preventDefault();
        agregarContacto();
    })

    const form = document.getElementById('submitButton');
    form.addEventListener('click', procesarFormulario);
    
    solicitanTes.push(contacto1);
    solicitanTes.push(contacto2);

    const solicitantesJSON = JSON.stringify(solicitanTes); 
    localStorage.setItem("solicitanTes", solicitantesJSON);

    const recuperandoForm = localStorage.getItem("solicitanTes");

    const formObjeto = JSON.parse (recuperandoForm); 


    

    function procesarFormulario (nombre, email , mensaje) {
    
        const nuevoContacto = new Contacto (nombre, email, mensaje);    

        solicitanTes.push(nuevoContacto);        
    }

    localStorage.setItem("Persona", JSON.stringify(solicitanTes));

    formuLario.reset();

    const resultado = document.getElementById("infoUsuarios");
    
    


















