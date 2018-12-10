
function Jerry(){
    this.id = "Jerry";
    this.monedas = new Array("R2-D2","","","");
}

Jerry.prototype.speak = function(){
    return "Tengo una colección de monedas antiguas raras!";
}


function singleJerry(){
    const prototipo = new Jerry();

    return {
        get: function(){
            return prototipo;
        }
    }
}

exports.singleJerry = function() {
    return singleJerry();
};