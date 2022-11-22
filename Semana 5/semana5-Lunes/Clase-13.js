/* -------------------------- estado por defecto ------------------------- */
const estadoUsuario = {
    email: "",
    password: "",
    rol: "",
    terminos: false
};

// ponemos en true solo cuando estén correctos
const estadoErroresOK = {
    email: false,
    password: false,
    rol: false,
    terminos: false
};


// Capturamos el evento del formulario
const formulario = document.querySelector('form');
formulario.addEventListener('change', () => {
    const inputEmail = document.querySelector('#email');
    estadoErroresOK.email = isValidEmail(inputEmail.value);

    const inputPassword = document.querySelector('#password');
    estadoErroresOK.password = isValidPassword(inputPassword.value);

    const inputRol = document.querySelector('#rol');
    estadoErroresOK.rol = isValidRol(inputRol.value);

    const inputTerminos = document.querySelector('#terminos');
    estadoErroresOK.terminos = isValidTerminos(inputTerminos.checked);

    mostrasMensajesDeError(estadoErroresOK);
    // Llamamos a la API
});

// Creamos las funciones que van a validar los datos
function isValidEmail(email) {
    let regexEmail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    return regexEmail.test(email);
}

function isValidPassword(password) {
    return password.length > 3;
}

function isValidRol(rol) {
    return rol === 'frontend' || rol === 'backend';
}

function isValidTerminos(terminos) {
    return terminos === true;
}

// Creamos la función que muestra los errores
function mostrasMensajesDeError(estadoErrores) {
    if (estadoErrores.email) {
        document.querySelector('#emailError').classList.remove('visible');
    } else {
        document.querySelector('#emailError').classList.add('visible');
    }

    if (estadoErrores.password) {
        document.querySelector('#passwordError').classList.remove('visible');
    } else {
        document.querySelector('#passwordError').classList.add('visible');
    }

    if (estadoErrores.rol) {
        document.querySelector('#rolError').classList.remove('visible');
    } else {
        document.querySelector('#rolError').classList.add('visible');
    }

    if (estadoErrores.terminos) {
        document.querySelector('#terminosError').classList.remove('visible');
    } else {
        document.querySelector('#terminosError').classList.add('visible');
    }
}

const inputEmail = document.querySelector('#email');
inputEmail.addEventListener('keypress', (e) => {
    const caractersInvalidos = [',', '!', '#'];
    const caractersInvalidos1 = ',!';
    if (caractersInvalidos.includes(e.key)) {
        // Prevenimos la continuación del evento y no se escribe la tecla oprimida
        e.preventDefault();
    }
});


/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                [5] FUNCION: Formulario completado con éxito                */
/* -------------------------------------------------------------------------- */
// Esta funcion se va a encargar de realizar la redirección cuando el formulario se complete correctamente.
// Para eso debera cumplir con los siguientes requerimientos.
// 1 - Deshabilitar el boton del formulario.
// 2 - Esperar 3 segundos para redireccionar a la página 'usuario.html'
// 3 - Durante ese tiempo el boton deshabilitado debe mostrar el texto: "Cargando..."
// 4 - Cuando vaya a la página de 'usuario.html' NO se debe permitir que mediante el botón de "Atrás"(la flechita del navegador) el usuario vuelva a index.
// 5- Separar el evento 'change' del formulario en eventos individuales para cada elementos
// 6- Re-escribir de una manera mas resumida la función 'mostrasMensajesDeError()'
function navegarPaginaExito() {
    //   desarrollar la funcion aqui

}