
for (let i = 9 ; i <= 19; i++) {
    let ingresarNombre = prompt ('Ingresar nombre');
    alert (" Horario del turno: " + i + "hs." +  " Nombre: "  + ingresarNombre);
    break;
}


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
















