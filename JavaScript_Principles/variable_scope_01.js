/**
 * global vs local
 */

var scope = "global";

function checkscope() {
    var scope = "local";
    return scope;
}

console.log(checkscope());      // => "local"

/*
Al llamar a la funcion el orden de busqueda de variables es 'de dentro a fuera',
por lo tanto, primero buscara el valor de la variable que le pasamos al return
dentro del ámbito de la función y, si no la encuentra dentro, entonces la buscará
en el ámbito fuera de la función.
*/
