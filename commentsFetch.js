const apiVideo = "https://jsonplaceholder.typicode.com/comments";
const contenedorVideo = document.getElementById("miDatafetch");

fetch(apiVideo)
    .then(respuesta => respuesta.json())
    .then((datos) => {
        console.log (datos);
        //mostrarVideo(datos);
    })
    .catch(error => console.log ("error"))