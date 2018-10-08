/**
 * Variables declaradas por let tienen por alcance el bloque
 * en el que se han definido, así mismo, como en cualquier bloque interno. 
 * De esta manera, let trabaja muy parecido a var. 
 * La más notable diferencia es que el alcance de una variable var es la función contenedora.
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/let
 */


function varTest() {

    var x = 31;

    if (true) {
        var x = 71;             
        console.log(x);         // 71
    }

    console.log(x);             // 71
}


function letTest() {

  var x = 31;
  
  if (true) {
      let x = 71;               
      console.log(x);           // 71
    }
    
    console.log(x);             // 31
}


function hoistingTest() {

    console.log(w);               
    // console.log(z);               // ReferenceError

    var x = 31;
    let y = 91;
    u = 1;                        
    
    if (true) {
        let x = 71;               
        console.log(x);           // 71
        console.log(y);           // 91
        let z = 101;
        var w = 1001;             
    }
      
    console.log(x);               // 31
    // console.log(z);             // ReferenceError
    console.log(w);               // 1001
  }


varTest();

letTest();

hoistingTest();

console.log(u);  

/*
varTest() devuelve 71 por que es una variable global y la modificas.
letTest() devuelve 71 en el primer console por que es el valor que se le asigna con 'let'
dentro del 'if', por lo tanto será una varibale diferente a la creada con 'var'.
hostingTest() devuelve 'ReferenceError' por que no se ha inicializado el valor de 'w'.
El segundo devuelve '71', valor declarado con let dentro del 'if'.
Tercer console devuelve '91' aunque esté declarado fuera del 'if' sigue estando en el mismo ámbito.
Cuarto console devuelve '31' ya que es el valor que tiene 'x' es global declarado con 'var'.
Quinto console devuelve 'ReferenceError' por que el valor 'z' se declaro con 'let' y pertenece a otro ámbito.
Sexto console devuelve '1001', valor global declarado con 'var'.
*/