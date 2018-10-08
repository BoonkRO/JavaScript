/**
 * global vs local
 * nested scopes
 */

var scope = "global scope";

function checkscope() {
    
    var scope = "local scope";
    
    function nested() {
        
        var scope = "nested scope";
        return scope;
    }

    return nested();
}

console.log(checkscope());              // => "nested scope"
console.log(scope);                     // => "global scope"

/*
El primer console desvuelve 'nested scope' por que es el valor que tiene 'scope' en el momento del return
es el que se le ha dado dentro de la funcion nested() y el return de la funcion checkscope() es la llamada
a nested(). 
El segundo console devuelve 'global scope' por que llama directamente a la varibale global creada fuera
de las funciones.
*/