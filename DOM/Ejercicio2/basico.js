window.onload = function () {
    HTTPtoHTTPS();
    renameClass();
    addAttribute();
}

function HTTPtoHTTPS() {
    let allHref = document.getElementsByTagName("a");
    for (let i = 0; i < allHref.length; i++) {
        allHref[i].href = allHref[i].href.replace("http", "https");
    }
}

function renameClass() {
    var getClass = document.getElementsByTagName("p");
    for (let i = 0; i < getClass.length; i++) {
        let clase = getClass[i];
        clase.className == "importante" ? clase.className = "resaltar" : clase.className = "normal"
    }
}

function addAttribute() {
    var sumante = 0;
    var getAttribute = document.getElementsByTagName("a");
    for (let i = 0; i < getAttribute.length; i++) {
        let enlace = getAttribute[i];
        if(enlace == "importante"){
            enlace.setAttribute("name", "importante" + sumante);
            sumante++;
        }
    }
}