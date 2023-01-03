const registroButton = document.getElementById("registerInit");
registroButton.addEventListener ("click" ,  () =>{
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
            alert ("Afiliado ingresado con exito!")
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
    
}) 


