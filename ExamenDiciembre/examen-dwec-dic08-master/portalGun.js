
function portalGun(){
    this.dimension = [];
    this.historial = [];
}



function singleGun(){
    const gunInstance = new portalGun();

    return {
        get: function(){
            return gunInstance;
        }
    }
}

exports.singleGun = function() {
    return singleGun();
};