/**
 * Nada nuevo: hoisting de variables
 * 
 * Programming JavaScript Applications. Eric Elliott.
 */

var x = 1;
function f() {
    console.log(x);
    var x = 2;
};

f();

/**
 * En el momento de la llamada el valor de x es undefined, existe x pero no tiene valor.
 */