
//FUNCION

let nombreIngresado = prompt ('Ingrese su nombre por favor')

function solicitarNombre () {   
    alert ("Bienvenido/a " + "" + nombreIngresado)
    return "Bienvenido/a " + "" + nombreIngresado;
}

solicitarNombre();

//CONDICION FOR 'DESDE'

for (let i = 9 ; i <= 19; i++) {
    let ingreseEdad = prompt ('Ingrese su edad por favor');
    alert (" Horario del turno: " + i + "hs." + " Edad: " + ingreseEdad + " Nombre: " + nombreIngresado );
    break;
}

//CONDICION IF


let pregunta = prompt ('Es tu primera vez en nuestra web?');


if (pregunta === 'Si') {
    alert ('Bienvenido/a a New Medical!');
}


else if (pregunta === 'No') {
    let recoMendar = prompt ('Nos recomendaria como asistente medico?') ;

    if (recoMendar === 'Si')
    alert ('Muchas gracias!'); 

    else if (recoMendar === 'No') {

    let mejorAr = prompt ('Comentenos en que podemos mejorar') ;

    alert ('Gracias por su valoracion')
    
    }}
















