/**
 * global vs local
 * var to declare local variables
 */

scope = "global";

function checkscope2() {
    
    scope = "local";
    myscope = "local";

    return [scope, myscope];
}

console.log(checkscope2());

console.log(scope);
console.log(myscope);           // => WTF ¿?

/*
El primer console nos devuelve un array ['local, local'], ya que son los valores de ambas
variables dentro del ámbito de la función.
El segundo y tercer console devuelven 'local' por que las variables creadas dentro del ámbito
de la función han sido declaradas sin especificar el alcance de la variable. Entonces,
por defecto, la declara con var y será de ámbito global. En conclusión, las variables de la función
han cambiado el valor de la variable 'scope' creada fuera de la función.
*/