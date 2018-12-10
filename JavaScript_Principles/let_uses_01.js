/**
 * Ejemplos de uso de Let:
 * - Reemplazar var en bucles for
 * - Definicion de variables en un bloque:
 *   block vs lexical scope
 */

function oddsums(n) {

    let total = 0, result = []; 
    
    for(let x = 1; x <= n; x++) {
        let odd = 2*x-1;
        total += odd;
        result.push(total);
    }

    // console.log(x);              // que sucede y por que?
    // console.log(odd);            // que sucede y por que?
    // console.log(total);          // que sucede y por que?
    
    return result;
}

console.log(oddsums(5));            // Returns [1,4,9,16,25]

/**
 * x is not defined(). La variable x no tiene ningun valor fuera del 'for' por que ha sido declarada con 'let'.
 * odd() is not defined. La varible odd esta dentro del 'for' declarada con let, no es visible fuera.
 * Devuelve 25. Total es una variable global, ya que se ha creado sin definir su rango. 
 */