/* -------------------------------------------------------------------------- */
/*                       [4] FUNCION: Consulta a la API                       */
/* -------------------------------------------------------------------------- */
// En este caso vamos a consultar a un servidor del cual nos vamos a traer la data.
// Esta API tiene su documentación en: https://jsonplaceholder.typicode.com/
// Vamos a implementar el endpoint que nos devuelve comentarios para mostrarlos en pantalla.

function consultaApi(endpoint) {

    fetch(endpoint)
        .then(objetoRespuesta => {
            console.log(objetoRespuesta);
            const promesaJson = objetoRespuesta.json();
            return promesaJson;
        })
        .then(datosJs => {
            console.log(datosJs);
            renderizarElementos(datosJs);

        })
        .catch(err => {
            mostrarError()
         })
         .finally(() => {
            console.log("Se finalizo la llamada a la API")
         })

}

/* -------------------------------------------------------------------------- */
/*                      [5] FUNCION: Escuchamos el click                      */
/* -------------------------------------------------------------------------- */
// Vamos a reimplementar la escucha del click lanzar las nuevas funciones.

const boton = document.querySelector('button');
const endpoint = 'https://jsonplaceholder.typicode.com/comments';

boton.addEventListener('click', function () {
    console.log("Clink para ver comentarios...");
    consultaApi(endpoint);
})

/* -------------------------------------------------------------------------- */
/*                      [6] FUNCION: renderizar elementos                     */
/* -------------------------------------------------------------------------- */
// Acá vamos a reutilizar la función de renderizar renderizarElementos, implementando
// el .map() y .join() para obtener el resultado esperado.

function renderizarElementos(listado) {
   const comentarios = document.querySelector('.comentarios');

    if (listado.length > 0) {
        let btnMostrar = document.querySelector(".mostrar");
        btnMostrar.setAttribute("style", "display:none;");
    }
    
    comentarios.innerHTML = listado.slice(0,10).map(item => {
        return `<div class="comentario">
                    <h4>${item.email}</h4>
                    <p>${item.body}</p>
                </div>`
    }).join('');
}

function mostrarError() {
    document.body.innerHTML += `
    <div class="error_api">
    <p>No se pudieron traer los datos</p>
    <p>La consulta a la API de comentarios no tuvo exito, intentelo nuevamente mas tarde</p>
</div>`
}

/* ----------------------------- Mesa de trabajo ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                              Mejoras de código                             */
/* -------------------------------------------------------------------------- */
// En este caso no debemos desarrollar una nueva funcionalidad necesariamente. Aunque
// siempre que lo creas necesario va a estar bien modularizar en funciones el código.
// Queda a criterio del grupo generar o no nuevas funciones.
// En este caso deberan cumplir con nuevos requerimientos que necesita la aplicación.
// 1- En el caso de la consulta a la API, si la misma no es satisfactoria, deberá arrojar
// un error que se le muestre al usuario.
// 2- Para lograr ver el error podemos forzarlo modificando el endpoint incorrectamente,
// para detectar y arrojar el error deben implementar el bloque .catch() y finally()
// 3- Si los comentarios llegan y se cargan correctamente, el botón de "Ver comentarios"
// debe desaparecer de la interfaz. Así evitamos que se vuelva a llamar a la API.
// 4- Solo deben cargarse los primeros 10 comentarios que nos llegan.`