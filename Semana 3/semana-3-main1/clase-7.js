/* --------------------------- listado de almbumes --------------------------- */
const albumesFamosos = [{
    id: "x123",
    nombre: "Nevermind",
    imagen: "https://m.media-amazon.com/images/I/71DQrKpImPL._SL1400_.jpg",
    like: true
},
{
    id: "y456",
    nombre: "Thriller",
    imagen: "https://img.discogs.com/LfnH5tbhcZ4xRMNLAodIyvea9xA=/fit-in/600x600/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-294033-1151290881.jpeg.jpg",
    like: true
},
{
    id: "z789",
    nombre: "The wall",
    imagen: "https://img.discogs.com/EbLYco6R1A-5Z7QJ4t4O1JSzsM8=/fit-in/587x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4620059-1370165707-3841.jpeg.jpg",
    like: false
},
{
    id: "a987",
    nombre: "Abbey Road",
    imagen: "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/RDH5EPH2TNENPI73NBWUWWMLPA.jpg",
    like: false
},
{
    id: "b654",
    nombre: "Origin of Symmetry",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_967206-MLA26105577132_102017-O.webp",
    like: false
},
{
    id: "c321",
    nombre: "Back in Black",
    imagen: "https://i1.wp.com/www.scienceofnoise.net/wp-content/uploads/2020/07/068660474366a63e1263e53ff370eb50.jpg",
    like: false
}
];



/* -------------------------------------------------------------------------- */
/*                  [1] FUNCION: captar el nombre de usuario                  */
/* -------------------------------------------------------------------------- */
//do while, prompt, innerText
function obtenerUsuario() {
    const nombreUsuario = document.querySelector('#nombreUsuario');
    let usuario = "";
    const regex = /\d/; //Las expresiones regulares son patrones que se utilizan para hacer coincidir combinaciones de caracteres en cadenas
    // regex es una secuencia de caracteres que conforma un patrón de búsqueda
    let ValidaSiTieneNumeros = true; // si la cadena contiene al menos un número el método test() devolverá true
    // pedimos el nombre de usuario hasta que sea válido
    do {
        usuario = prompt('Ingrese su nombre de usuario:');
        ValidaSiTieneNumeros =  regex.test(usuario.trim());//$("nombre").val().trim());
    } while (usuario === null || usuario === "" || usuario.length < 3 || ValidaSiTieneNumeros);

    // insertamos el nombre en el HTML
    nombreUsuario.innerText = usuario;
}
obtenerUsuario();

/* -------------------------------------------------------------------------- */
/*                [2] FUNCION: renderizar tarjetas del albumes               */
/* -------------------------------------------------------------------------- */
//forEach, template strings, innerHTML
function renderizarAlbumes(listado) {
    const covers = document.querySelector('.covers');
    // nos aseguramos de vaciar el contenedor antes de insertar nuevos elementos
    let lite = confirm("¿Desea usar la version lite?")
    // recorremos el listado e insertamos en el HTML a traves de las plantillas literales
    listado.forEach((album) => {
        covers.innerHTML += `
        <li data-id="${album.id}">
            <a href="${album.imagen}" ><img src="${album.imagen}" alt="${album.nombre}"></a>
            <p>${album.nombre}</p>
            <i name="like-button" id="${album.id}" class="fa fa-heart ${album.like ? 'favorito' : ''}"></i>
        </li>
        `
    })
    // ☝ importante repasar el operador ternario, en este caso si el album tiene su
    // propiedad like en true, se le agrega la clase "favorito" al elemento
    if (lite) {
        document.querySelectorAll("img").forEach(i => {
            i.removeAttribute("src")
        })
    }

    document.querySelectorAll("a").forEach(link => {
        // target = "_blank"
        link.setAttribute("target", "_blank")
    })

};

renderizarAlbumes(albumesFamosos);



/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                   [3] FUNCION: mostrar datos del usuario                   */
/* -------------------------------------------------------------------------- */
// Dentro del div '.perfil' tenemos un parrafo con 2 span en los que debemos colocar
// correctamente su contenido.
// Para eso debemos hacer ciertos calculos y colocar esa info en el HTML. Debemos:
// 1- contar la cantidad de albumes del array y pintarlo en el span correspondiente
// 2- contar la cantidad de favoritos y pintarlo en el span correspondiente
// 3- tener en cuenta: usar las palabra en plural o en singular, según cuando
// sea necesario ( es decir: 1 album, 1 favorito / 2 albumes, 3 favoritos )
document.getElementById("cant-albums").textContent = albumesFamosos.length + (albumesFamosos.length > 1 ? " álbumes" : " álbum")

function mostrarDatosEnPerfil() {
    // desarrollar la función 👇
    let countLikes = 0
    albumesFamosos.forEach((album) => {
        if(album.like === true) {
            countLikes++
        }
    })
    document.getElementById("cant-favoritos").textContent = countLikes + (countLikes > 1 ? " favoritos" : " favorito")
}
mostrarDatosEnPerfil();

arrayLikesButtons = Array.from(document.getElementsByName("like-button"))

arrayLikesButtons.forEach((likeButton) => {
    likeButton.addEventListener("click", () => {
        likeButton.classList.toggle("favorito")
        
        // Esto no esta bien porque el array de elementos se va extendiendo, revisar la consola
        // const album = albumesFamosos.find((album) => album.id = likeButton.id)
        // album.like = !album.like
        // albumesFamosos.push(album)
        // console.log(albumesFamosos)
        
        // Esto si funciona
        // Hago un .map y retorno un array en el mismo orden pero solo de id's
        let albumsIDs = albumesFamosos.map(element => element.id)
        //Hago un indexOf del array para localizar el indice del id del album en cuestion
        let indexOfAlbum = albumsIDs.indexOf(likeButton.id);
        //con el indice accedo al array y cambio en el objeto la propiedad like de false o true y viseversa
        albumesFamosos[indexOfAlbum].like = !albumesFamosos[indexOfAlbum].like

        mostrarDatosEnPerfil()
    })
})