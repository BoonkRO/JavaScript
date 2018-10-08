/**
 * global vs local
 * function scope and hoisting
 */

function test(o) {
    
    var i = 0;
    
    if (typeof o == "object") {
        
        var j = 0;
    
        for(var k=0; k < 10; k++) {
            console.log(k);             // print numbers 0 through 9
        }
    
        console.log(k);                 // prints 10
    }
    
    console.log(j);                     // j is defined, but may not be initialized
}

o = {};
test(o);

/*
El primer console nos irá devolviendo numeros del 0 al 9, por que inicializa la variable 'k'
en 0 y le va cambiando el valor hasta 9 en el bucle 'for'. El segundo console devuelve 10 por
que es la última posición del bucle anterior. Al ser definida la variable como 'var', la 
variable será global. El tercer console devuelve 0 por que ha sido inicializada a 0 y no ha sido modificada.
*/