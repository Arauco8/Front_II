/* -------------------------------------------------------------------------- */
/*               [1] FUNCION: capturar los datos del formulario               */
/* -------------------------------------------------------------------------- */
function capturarDatosFormulario(){ 
    // armamos nuestro objeto modelo👇
    const objeto = {
        nombre: "",
        password: "",
        telefono: "",
        hobbies: [],
        nacionalidad: ""
    }

    // capturamos los nodos
    const nombre = document.querySelector('#nom');
    const password = document.querySelector('#pass');
    const telefono = document.querySelector('#tel');
    const checkbox = document.querySelectorAll('[name=hobbies]');
    const radios = document.querySelectorAll('[name=nacionalidad]');

    // rellenamos los valores del objeto👇
    objeto.nombre = nombre.value;
    objeto.password = password.value;
    objeto.telefono = telefono.value;
    checkbox.forEach( hobbie => {
        // si está en true lo sumamos al listado
        if(hobbie.checked){
            // lo sumamos al listado
            objeto.hobbies.push(hobbie.id)
        }
    });
    radios.forEach( radio => {
        if(radio.checked){
            objeto.nacionalidad = radio.id
        }
    })


    // devolvemos la informacion
    return objeto;
};


/* -------------------------------------------------------------------------- */
/*                 [2] FUNCION: escuchamos el submit del form                 */
/* -------------------------------------------------------------------------- */
const formulario = document.querySelector('form');

formulario.addEventListener('submit', function(evento){
    // frenamos el evento por defecto
    evento.preventDefault();

    // objeto con los datos👇
    const datos = capturarDatosFormulario();
    
    console.log("Submitttttt");
    console.log(datos);


    const errores = validarInformacion(datos);
    console.log(errores);

    formulario.reset();
})




/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                         [3] FUNCION: validar datos                         */
/* -------------------------------------------------------------------------- */
// Desarrollar la funcion 3 de validar los datos.
// Esta funcion va a recibir un objeto con la misma estructura de obejetoInformacion
// Entonces dentro de esta función vamos a chequear ciertas validaciones.
// 1- La funcion devuelve un listado de errores según las comprobaciones que hace sobre el objeto.
// 2- Si el nombre no es un texto y tiene menos de 3 caracteres sumar el error: "El nombre debe tener al menos 3 caracteres."
// 3- Si la contraseña tiene menos de 6 caracteres, sin contar espacios al principio, en el medio o final, sumar el error: "La contraseña debe tener al menos 6 caracteres, entre letras y símbolos."
// 4- Si el telefono tiene menos de 10 números, sumar el error: "No es un teléfono válido."
// 5- Si la lista de hobbies tiene más de 4 items, sumar el error: "Sólo es posible seleccionar 4 hobbies."
// 5- Si no hay una nacionalidad definida, sumar el error: "Debe seleccionar una nacionalidad."
function validarInformacion(usuario) {
    let errores = [];
    let name = usuario.nombre;
    let pass = usuario.password.replace(/\s+/g , '');
    let tel = usuario.telefono;
    let hobb = usuario.hobbies;
    let nac = usuario.nacionalidad;
    // 👇 desarrollar aqui la funcion
    if (!isNaN(name) || name.length < 3) {
        errores.push("El nombre debe tener al menos 3 caracteres")
    }
    if (pass.length < 6) {
        console.log(pass)
        errores.push("La contraseña debe tener al menos 6 caracteres, entre letras y símbolos")
    }
    if (tel.length < 10) {
        errores.push("No es un teléfono válido")
    }
    if (hobb.length > 4) {
        errores.push("Sólo es posible seleccionar 4 hobbies")
    }
    if (nac == '') {
        errores.push("Debe seleccionar una nacionalidad")
    }
    return errores;
}

