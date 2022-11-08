/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

const nombreLabel1= document.getElementById('nombre');
const edadLabel = document.getElementById('edad');
const ciudadLabel = document.getElementById('ciudad');
const javascriptLabel = document.getElementById('javascript');
const listaMateariasConteiner = document.getElementById('fila');
const sobreMiLabel = document.getElementById('sobre-mi');

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
    const regex = /\d/; 
    let ValidaSiTieneNumeros = true;

    do {
        datosPersona.nombre = prompt('Ingrese su nombre:');
        ValidaSiTieneNumeros =  regex.test(datosPersona.nombre.trim());//$("nombre").val().trim());
    } while (datosPersona.nombre === null || datosPersona.nombre === "" || (datosPersona.nombre).length < 3 || ValidaSiTieneNumeros);
    
    datosPersona.nombre = prompt('Ingrese su nombre:');
    const date = new Date()
    datosPersona.edad = date.getFullYear() - parseInt(prompt('Ingrese su año de Nacimiento'));
    datosPersona.ciudad = prompt('Ingrese su Ciudad');
    datosPersona.interesPorJs = prompt('Ingrese su Interese por JS')
    console.log(datosPersona)  
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  nombreLabel1.textContent = datosPersona.nombre
  edadLabel.textContent = datosPersona.edad
  ciudadLabel.textContent = datosPersona.ciudad
  javascriptLabel.textContent = datosPersona.interesPorJs ? "Si" : "No"
}


function recorrerListadoYRenderizarTarjetas(e) {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  e.target.removeEventListener(e.type, recorrerListadoYRenderizarTarjetas);
  listado.forEach((elemento) => {
      listaMateariasConteiner.innerHTML += `
      <div class="caja">
      <img src= "${elemento.imgUrl}"/>
      <p class="lenguajes">${elemento.lenguajes} </h6>
      <p class="bimestre">${elemento.bimestre} </p>
      </div>
      `
  })
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  document.body.classList.toggle("dark")

}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
let b = true;
window.addEventListener("keypress", (e) => {
  if(e.key === 'f' && b == true){
      sobreMiLabel.classList.toggle('oculto')
      b = false;
  }

})