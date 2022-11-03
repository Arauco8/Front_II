/* -------------------------------------------------------------------------- */
/*                                  FUNCION 1                                 */
/* -------------------------------------------------------------------------- */

function iniciarJuego() {
    
    // saludamos al usuario
    alert("Bienvenido al piedra papel o tijera de Frontend II.");
    // guardamos en una variable en nombre ingresado
    const nombre = prompt("Ingrese su nombre por favor:")
        
        //Las expresiones regulares son patrones que se utilizan para hacer coincidir combinaciones de caracteres en cadenas
        // si la cadena contiene al menos un número el método test() devolverá true
        // regex es una secuencia de caracteres que conforma un patrón de búsqueda
        const regex = /\d/;
        const ValidaSiTieneNumeros =  regex.test(nombre.trim());//$("nombre").val().trim());
        let caracteres = nombre.length;
        console.log(caracteres);
        if (caracteres == 0 || caracteres < 3) {
            alert("Ingrese su nombre de vuelta");
            iniciarJuego();
        } else if ( ValidaSiTieneNumeros ) {
            alert("No se permite numeros dentro del nombre");
            iniciarJuego();
        } else {
            
            alert("Gracias por jugar " + nombre.toUpperCase() + ". ¡Mucha suerte!");
            return nombre.toUpperCase();
            
        }
        
    // mostramos los datos por consola
    console.log("----------------------------");
    console.log("El jugador es:")
    console.log(nombre.toUpperCase());
    console.log("----------------------------");

    
}

// creamos una variable a nivel global para guardar el nombre del jugador que nos devuelve la función
const nombreJugador = iniciarJuego();
console.log(nombreJugador);
/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Modificar la funcion de iniciarJuego(), validar si ingresa un dato válido como nombre.
// 2- Si no ingresa un texto, o tiene menos de 3 caracteres debemos volverle a pedir que lo ingrese.
// 3- Finalmente el nombre devuelto debe estar todo en mayúsculas.


