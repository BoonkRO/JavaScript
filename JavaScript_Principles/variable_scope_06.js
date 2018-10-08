/**
 * global vs local
 * function scope and hoisting
 */

 var scope = "global";

function f() {

    var scope;
    console.log(scope);
    scope = "local";
    console.log(scope);
}

f();

console.log(scope);

/*
El primer console nos devuelve 'undefined' por que creamos la variable 'scope' dentro de la funcion pero
no la inicializamos, no le damos un valor.
El segundo console nos devuelve 'local' por que ya está inicializado.
El tercer console devuelve 'global' por que llama directamente a la variable global, fuera de la función.
*/