
function DoofusRick(){
    this.id = "J-19-Z7";
    this.monedas = new Array("R2-D2","","","");
    this.ondas = "altas";
}

DoofusRick.prototype.speak = function(){
    return "Tengo una colección de monedas antiguas raras!";
}

DoofusRick.prototype.dispara = function(){
    return portalGun();
}


function singleDoofusRick(){
    const prototipo = new DoofusRick();

    return {
        get: function(){
            return prototipo;
        }
    }
}

exports.singleDoofusRick = function() {
    return singleDoofusRick();
};