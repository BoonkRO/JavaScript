var singleRick = require('./rick');

function Morty(){
    this.id = "earthMorty";
    this.ondas = "bajas";
    this.habla = "Oohh man!";
    this.partner = singleRick.singleRick().get();
}

function singleMorty(){
    const prototipo = new Morty();

    return {
        get: function(){
            return prototipo;
        }
    }
}

exports.singleMorty = function() {
    return singleMorty();
};