/**
 * global vs local
 * function scope and hoisting
 */

var scope = "global";

function f() {

    console.log(scope);             // WTF !!
    var scope = "local";
    console.log(scope);             // Prints "local"
}

f();

console.log(scope);                 // Prints "global"

/*
El primer console nos devuelve 'undefined' ya que existe la variable 'scope' dentro de la funcion pero
aun no ha sido declarada cuando se ejecuta el console. El segundo console devuelve 'local' por que la variable
ya ha sido declarada y se le da el valor 'local'.
El tercer console devuelve 'global' por que llamamos directamente a la variable que tenemos fuera de la funcion.
*/