/**
 * Archivo para la clase Box que crea los Mr Meesseeks
 */

 var singletonMeeseeks = require('./meesseeks');

function singletonBox() {
    this.name = "Rick's Box";
    this.mrMeeseeks = null;
}

singletonBox.prototype.createMrMeeseeks = function(){
    if(! this.mrMeeseeks){
        this.mrMeeseeks = singletonMeeseeks.singletonMeeseeks().get();
    }
    return Object.create(this.mrMeeseeks);
}

singletonBox.prototype.pressButton = function(reality){
    let mrMee = this.createMrMeeseeks();
    mrMee.speakOnCreate();
    reality.push(mrMee);
}

singletonBox.prototype.getProtoMeeseeks = function(){
    return this.mrMeeseeks;
}

function singleBox() {
    const boxInstance = new singletonBox();

    return {
        getBox : function getBox(){
            return boxInstance;
        }
    };
}

exports.singletonBox = function(){
    return singleBox();
};