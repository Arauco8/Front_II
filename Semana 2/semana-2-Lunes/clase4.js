// 👇Acá vemos que el document nos dá acceso a todo el DOM, ese arbol que contiene todos los nodos de nuestro sitio
// console.log(document);

// Ahora vamos a utilizar 2 métodos propios de document que nos facilitan "pescar" elementos en el sitio:
// - querySelector()
// - querySelectorAll()

// Obtenemos el titulo principal
const titulo = document.querySelector('h1');
// Ahora vayamos a la consola y despleguemos la flecha que nos muestra todas las propiedades del nodo
// console.log(titulo);

// nos traemos ahora un listado de nodos 👇
const itemsMenu = document.querySelectorAll('li');
// console.log(itemsMenu);

// hacemos un selector más específico👇
 //const infoExtra = document.querySelector('.info .clima')

// console.log(infoExtra);
const div = document.querySelector("div.info#info2")
console.log(111, div)
/* ------------------------------- Practicando ------------------------------ */
// Seleccionamos la lista de noticias y revisamos su informacion interna.
// Aprovechamos que la NodeList es un ITERABLE, entonces podemos recorrerla.
// 🚩 No es un Array.
const articulos = document.querySelectorAll('article');

// for (let articulo in articulos) {
//     console.log(articulos[articulo])
// }

let contenedor = document.querySelector(".noticias")

let usuario = {
    nombre: "Pepe",
    edad: 23,
    ciudad: "Cordoba"
}

for (let campo in usuario) {
    console.log(usuario[campo])
}

// contenedor.innerHTML += `
// <article>
// <h2>${usuario.nombre}</h2>
// <p>${usuario.edad} </p>
// <p>${usuario.ciudad}</p>
// </article>
// `
// for (let i = 0; i < articulos.length; i++) {
//     console.log(articulos[i]);
// }

// Ahora hacemos la misma practica pero con ForEach, y accedemos a propiedades de los nodos.
articulos.forEach(articulo => {
    const titulo = articulo.querySelector('h2').innerText;
    console.log(titulo);
    // 💡 si quisieramos,acá podemos mutar los nodos, o cambiar algunas de sus propiedades
});

let articulosASD = [
    `
    <article>
        <h2> La renuncia de Liz Truss</h2>
        <img src="./img/boris.webp" alt="">
        <p>Boris Johnson interrumpió sus vacaciones y vuelve a sonar fuerte entre los posibles sucesores.</p>
    </article>
    `,
    `
    <article>
        <h2>Los motivos</h2>
        <img src="./img/escuela.webp" alt="">
        <p>Una escuela argentina fue elegida entre las diez mejores del mundo.</p>
    </article>
    `,
    `
    <article>
        <h2>La emoción de Lisandro Martínez</h2>
        <img src="./img/futbol.webp" alt="">
        <p>La increíble ovación de los hinchas de Manchester United al defensor argentino: "Quise llorar".</p>
    </article>
    `
    ]
    
    document.getElementById("next").addEventListener("click", () => {
        contenedor.innerHTML += articulosASD[1]
    })
            
    
    document.getElementById("cambiar-tema-button").addEventListener("click", () => {
        const [mainNode] = Array.from(document.getElementsByTagName("main"))
        mainNode.style.backgroundColor = "red"
        console.log(window)
    })
    
/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1 - Escribir un selector para cada elemento del sitio.
// 2 - Plasmarlo en un diagrama de árbol como la consigna: https://docs.google.com/document/d/15nGvKkEcbrRgwqV50ISh0QYZ_TO67vmWQaLfNpUxqjs/preview


