
function Meesseeks() {
    this.messageOnCreate = "I'm Mr Meeseeks! Look at meeee!";
    this.messageOnRequest = ["Oooh yeah! Can do!", "Yes sireee!", "Oh, yeah!, Yes, ma'am!"];
}

Meesseeks.prototype.speakOnCreate = function() {
    console.log(this.messageOnCreate[Math.floor(Math.random() * this.messageOnRequest.length)]);
}

Meesseeks.prototype.speakOnRequest = function() {
    console.log(this.deseo + ": " + this.request);
}

Meesseeks.prototype.makeRequest = function(deseo, request) {
    let consulta = function(request){
        return deseo + " " + request;
    }
    this.accion = consulta(request);
    //this.speakOnRequest();
}

Meesseeks.prototype.fulfillRequest = function(){
    console.log(this.accion + " " + "All done!");
}

Meesseeks.prototype.learnRequest = function(deseo, objeto) {
    this.accion = deseo(objeto);
};


function singletonMeeseeks(){
    const prototipo = new Meesseeks();

    return {
        get: function(){
            return prototipo;
        }
    }
}

exports.singletonMeeseeks = function() {
    return singletonMeeseeks();
};
