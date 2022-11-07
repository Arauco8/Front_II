// nuevo array con listado de planes
const planesMensuales = [{
    tipo: "Básico",
    costo: 300,
    descripcion: "Podes escuchar música sin límites todo el mes."
},
{
    tipo: "Dúo",
    costo: 450,
    descripcion: "Música ilimitada para vos y alguien más."
},
{
    tipo: "Familiar",
    costo: 600,
    descripcion: "El mejor plan, hasta un total de 5 miembros."
},
];


// Escuchamos el evento de 'carga' de la ventana 👇
window.addEventListener('load', function () {

    const footer = document.querySelector("footer")

    let total = planesMensuales.length
    let contador = 0

    let intervalo = setInterval(() => {

        let posicion = contador % total

        // console.log(contador)
        // console.log("posicion", posicion)

        contador++

        footer.innerHTML = `
            <div>
              <h2>${planesMensuales[posicion].tipo}</h2>
              <p> ${planesMensuales[posicion].costo}</p>
              <p> ${planesMensuales[posicion].descripcion}</p>
             </div>
        `

    }, 4000);

    footer.addEventListener("dblclick", () => {
        clearInterval(intervalo)
    })

})

setTimeout(()=> {
    if(confirm("desea conocer mas musica?")){
        window.open("https://open.spotify.com/", "Search")
    } else {
        const [perfil] = document.getElementsByClassName("perfil")
        perfil.innerHTML += `
        <p id="official-user" style="color: green">Usuario oficial de Spotifront</p>
        `
        document.getElementById("official-user").addEventListener("click", () => {
            alert("Gracias por confiar en nosotros.")
        })

    }
}, 12000)

/* -------------------------------------------------------------------------- */
/*                               MESA DE TRABAJO                              */
/* -------------------------------------------------------------------------- */
// Vamos a utilizar el setTimeout para preguntarle al usuario despues de unos segundos.
// 1- Una vez cargada la página y pasados 12 segundos debemos preguntarle al usuario si desea
// conocer más música (podemos usar un confirm).
// 2- Si el usuario confirma debemos abrir una nueva pestaña en -> https://open.spotify.com/
// 3- Si el usuario cancela debemos agregar un parrafo dentro del div '#perfil'(sin eliminar nada dentro)
// 4- El parrafo agregado debe ser de color verde y decir: "Usuario oficial de Spotifront"
// 5- Por ultimo, si ese parrafo es clickeado, debe mostrar una alerta al usuario que diga: "Gracias por confiar en nosotros."