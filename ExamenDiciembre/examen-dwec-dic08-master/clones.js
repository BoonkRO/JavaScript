var singleRick = require('./rick');
var singleMorty = require('./morty');

function clones(){
    this.clonRick = null;
    this.clonMorty = null;
}

clones.prototype.createClonRick = function(){
    if(! this.clonRick){
        this.clonRick = singleRick.singleRick().get();
    }
    return Object.create(this.clonRick);
}

clones.prototype.createClonMorty = function(){
    if(! this.clonMorty){
        this.clonMorty = singleMorty.singleMorty().get();
    }
    return Object.create(this.clonMorty);
}


function singleClones(){
    const prototipo = new clones();

    return {
        getClon: function(){
            return prototipo;
        }
    }
}

exports.singleClones = function() {
    return singleClones();
};