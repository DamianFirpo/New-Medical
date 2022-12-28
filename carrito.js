/** CARRITO DE COMPRAS **/

//¿Qué funcionalidad debe tener un carrito de compras?

//1) Mostrar productos en el HTML de forma dinámica. 
//2) Agregar productos al carrito. 
//3) Evitar la carga de productos repetidos en el carrito. 
//4) Mostrar el carrito en el HTML de forma dinámica. 
//5) Eliminar productos del carrito. 
//6) Calcular el total de la compra. 
//7) Vaciar el carrito. 
//8) Guardar el carrito en el localStorage.

//////////////////////////////



class Producto {
    constructor(id, nombre, img) {
        this.id = id;
        this.nombre = nombre;      
        this.img = img;
        this.cantidad = 1; 
    }
}

const arroz = new Producto(1, "Estudio 1", "/img/estudios/estudio1.png"); 
const azucar = new Producto(2, "Estudio 2", "/img/estudios/estudio2.png");
const fideos = new Producto(3, "Estudio 3", "/img/estudios/estudio3.png");
const mermelada = new Producto(4, "Estudio 4", "/img/estudios/estudio4.png");
const queso = new Producto(5, "Estudio 5", "/img/estudios/estudio5.png");
const sal = new Producto(6, "Estudio 6", "/img/estudios/estudio6.png");
const tomate = new Producto(7, "Estudio 7", "/img/estudios/estudio7.png");
const yerba = new Producto(8, "Estudio 8", "/img/estudios/estudio8.png");


//Crear un Array con todo nuestro catálogo de productos: 

const productos = [arroz, azucar, fideos, mermelada, queso, sal, tomate, yerba];

//Creamos el array del Carrito de compras: 

let carrito = [];

//console.log(productos);

/** CARGAR CARRITO DESDE EL LOCALSTORAGE: **/
//Si hay algo en el localStorage, lo cargamos en el carrito. 

if(localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

//Creamos una función que me muestra los productos: 

const contenedorProductos = document.getElementById("contenedorProductos");


const mostrarProductos = () => {
    productos.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
                        <div class = "card">
                            <img src = "${producto.img}" class = "card-img-top imgProductos" alt = " ${producto.nombre}">
                            <div class ="card-body">
                                <h5 class = "centrandoTexto"> ${producto.nombre} </h5>                               
                                <button class= "btn colorBoton" id = "boton${producto.id}" >Autorizar estudio</button>
                            </div>
                        </div>`                        

        contenedorProductos.appendChild(card);

        //Agregar productos al carrito: 

        const boton = document.getElementById(`boton${producto.id}`);

        boton.addEventListener("click", () => {
            Toastify({
                text: "Estudio agredado",
            }).showToast();
        })


        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id)
        })
    }) 
}






//Función agregar al carrito: 

const agregarAlCarrito = (id) => {
    const productoEnCarrito = carrito.find(producto => producto.id === id);
    if(productoEnCarrito) {
        productoEnCarrito.cantidad++;
        
    } else {
        const producto = productos.find(producto => producto.id === id);
        carrito.push(producto);
        //Trabajamos con el localStorage: 
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
    calcularTotal();
}

mostrarProductos();

//MOSTRAR EL CARRITO DE COMPRAS. 

const contenedorCarrito = document.getElementById("contenedorCarrito");

const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click",  () => {
    mostrarCarrito();
})

//Función para mostar el carrillllooo:

const mostrarCarrito = () => {
    //que trucazo!
    contenedorCarrito.innerHTML = "";

    carrito.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
                        <div class = "card">
                            <img src = "${producto.img}" class = "card-img-top imgProductos" alt = " ${producto.nombre}">
                            <div class ="card-body">
                                <h5> ${producto.nombre} </h5>
                                <p> ${producto.precio} </p>
                                <p> ${producto.cantidad} </p>
                                <button class= "btn colorBoton" id ="eliminar${producto.id}" >Eliminar</button>
                            </div>
                        </div>`

        contenedorCarrito.appendChild(card);

        const borrarEstudio = document.getElementById(`eliminar${producto.id}`);

        borrarEstudio.addEventListener("click", () => {
            Toastify({
                text: "Estudio eliminado",
                style:
                {
                    background: "rgb(252,69,94)",
                    
                }                
            }).showToast();
        })

        //Eliminar productos del carrito:

        const boton = document.getElementById(`eliminar${producto.id}`);
        boton.addEventListener("click", () => {
            eliminarDelCarrito(producto.id);
        })
    })
    calcularTotal();
}

//Función que elimina el producto del carrito: 

const eliminarDelCarrito = (id) => {
    const producto = carrito.find( producto => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);

    mostrarCarrito();

    //localStorage: 
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

//VACIAMOS TODO EL CARRITO DE COMPRAS: 

const vaciarCarrito = document.getElementById("vaciarCarrito");

const vaciarPeticion = document.getElementById("vaciarCarrito");

        vaciarPeticion.addEventListener("click", () => {
            Toastify({
                text: "Peticiones eliminadas",
                style:
                {
                    background: "green",
                    
                }                
            }).showToast();
        })

vaciarCarrito.addEventListener("click", () => {
    eliminarTodoElCarrito();
})

const eliminarTodoElCarrito = () => {
    carrito = [];
    mostrarCarrito();

    //localStorage: 
    localStorage.clear();
}


//Mostramos mensaje con el total de la compra: 

const total = document.getElementById("total");

const calcularTotal = () => {
    let totalCompra = 0;
    carrito.forEach(producto => {
        totalCompra += producto.precio * producto.cantidad;
    })
    total.innerHTML = `Total: $${totalCompra}`;
}



    