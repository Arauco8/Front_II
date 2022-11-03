/* -------------------------------------------------------------------------- */
/*                        [4] FUNCION: marcar favorito                        */
/* -------------------------------------------------------------------------- */
// - buscar el album por id en el array 
// - cambiar el estado del like
// - volver a renderizar
function marcarFavorito() {
    let botonesLike = document.querySelectorAll("i")

    botonesLike.forEach(boton => {
        boton.addEventListener("click", () => {
            console.log(boton.id)
            albumesFamosos.forEach(album => {
                if (album.id === boton.id) {
                    album.like = !album.like
                }
                renderizarAlbumes(albumesFamosos)
                marcarFavorito()
            })
        })
    })
}
marcarFavorito()
//window //devolver el evento
// window.addEventListener("keydown", (e) => {
//     console.log(e.key)
//     if (e.key === 'Enter') {
//         prompt("¿Cual es tu edad?")
//     }
// })

/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                         [5] FUNCION: Eliminar album                        */
/* -------------------------------------------------------------------------- */
// Debemos desarrollar la funcion de eliminar un album. Para esto le vamos a 
// preguntar al usuario cual quiere eliminar.
// Vamos a seguir las indicaciones que nos permiten lograrlo utilizando eventos.
// 1- Hay que escuchar el evento de 'keydown' para detectar cuando el usuario
// presiona la tecla f
// 2- Una vez que detectamos la tecla, debemos mostrarle un prompt al usuario
// para que ingrese el nombre del album que desea eliminar
// 3- Podemos buscar la posicion del almbum buscado en el array con la funcion .findIndex()
// 4- Si la busqueda nos da un resultado válido, procedemos a borrar el objeto del array
// 5- Acto seguido debemos llamar a las funciones de renderizar y marcar favorito para que sean nuevamente aplicadas.

function eliminarAlbum() {
    // desarrollar la función 
    document.addEventListener('keydown', (e) => {
        if (e.key == 'f' || e.key == 'F') {

            let albumEliminar = prompt("Ingrese el nombre del album que desea eliminar")

            const index = albumesFamosos.findIndex(x => x.nombre === albumEliminar)
            if (index != -1) {
                albumesFamosos.splice(index, 1)
                marcarFavorito()
                renderizarAlbumes(albumesFamosos)
            }
        }
    });
}
eliminarAlbum();