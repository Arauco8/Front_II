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

window.addEventListener("keydown", (e) => {
    e.key === "f" && eliminarAlbum(prompt("Cual album queres eliminar?"))
})

function eliminarAlbum(nombreDelAlbum) {
    //const nombreIndex = albumesFamosos.findIndex((e) => e.nombre.toLocaleLowerCase() === nombreDelAlbum.toLocaleLowerCase())
    //albumesFamosos.splice(nombreIndex, nombreIndex+1)
    //renderizarAlbumes(albumesFamosos)
    const nuevoArray =  albumesFamosos.filter(element => element.nombre !== nombreDelAlbum)
    renderizarAlbumes(nuevoArray)
}