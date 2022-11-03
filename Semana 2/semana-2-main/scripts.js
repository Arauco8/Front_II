const listadoNoticias = [{
    titulo: "La emoción de Lisandro Martínez",
    epigrafe: "La increíble ovación de los hinchas de Manchester United al defensor argentino: 'Quise llorar'.",
    categorias: "Deporte",
    foto: "./img/futbol.webp"
},
{
    titulo: "La renuncia de Liz Truss",
    epigrafe: "Boris Johnson interrumpió sus vacaciones y vuelve a sonar fuerte entre los posibles sucesores.",
    categorias: "Politica",
    foto: "./img/boris.webp"
},
{
    titulo: "Los motivos",
    epigrafe: "Una escuela argentina fue elegida entre las diez mejores del mundo.",
    categorias: "Economia",
    foto: "./img/escuela.webp"
}
]

// Vamos a trabajar con nodos de manera dinámica, sobre todo crearlos desde JS en vez de que estén estáticos en el HTML
// Para eso vamos a valernos de array listadoNoticias que tenemos más arriba
// ¿Cual es la idea? utilizar la información que nos llega del listado para presentarla en pantalla.

{/*
    <nav>
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </nav>
*/
}

let nav = document.createElement("nav")
let ul = document.createElement("ul")


// padre > hijo

nav.appendChild(ul)

let categorias = ["Politica","Economia", "Deporte"];

categorias.forEach(categoria => {

        let li = document.createElement("li")  
        let text = document.createTextNode(categoria)
        li.appendChild(text)    
        ul.appendChild(li)

})

document.querySelector("body").appendChild(nav)
console.log(nav)

//2


/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// Antes de comenzar vamos a comentar la parte de PRACTICANDO ATRIBUTOS y PRACTICANDO CREACION DE NODOS.
// Una vez que solo tenemos el código comentado podemos empezar la practica.
// 1- Debemos reutilizar el "listadoNoticias" para lograr el mismo resultado de crear los nodos dinamicamente.

let filtros = document.querySelector("#filtros")

let li = filtros.childNodes

function getCard(categoria) {
    listadoNoticias.forEach(noticia => {
        if (noticia.categorias === categoria){
            document.querySelector(".noticias").innerHTML = `
            <article>
                <h2>${noticia.titulo}</h2>
                <img src="${noticia.foto}"alt=""></img>
                <p>${noticia.epigrafe}</p>
            </article>
            `
        }
        
    })
}

li.forEach(l => {
    l.addEventListener('click', () => {
        getCard(l.textContent)
    })
})