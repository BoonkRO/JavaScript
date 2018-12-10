var portalGun = require('./portalGun');

function Rick(){
    this.id = "C-137";
    this.ondas = "altas";
    this.habla = "Es Rick-dículo!";
}

Rick.prototype.dispara = function(){
    return portalGun;
}


function singleRick(){
    const prototipo = new Rick();

    return {
        get: function(){
            return prototipo;
        }
    }
}

exports.singleRick = function() {
    return singleRick();
};