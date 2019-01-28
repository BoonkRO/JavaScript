window.onload = function () {
    !document.getElementsByTagName("TOC")[0] ? init() : null;
};


function init() {

    createBox();
    getTags();

}

function createBox() {
    let body = document.getElementsByTagName("body")[0];
    let contenido = document.createElement("TOC");
    contenido.id = "TOC";
    body.insertBefore(contenido, document.body.firstChild);

}


function getTags() {

    var headings = document.querySelectorAll("h1, h2, h3");



    for (let i = 0; i < headings.length; i++) {
        let TOC = document.getElementsByTagName("TOC")[0];
        let contenido = document.createElement("a");
        headings[i].id = "heading"+i;
        contenido.setAttribute("href","#heading"+i);
        contenido.innerHTML += "-" + headings[i].innerHTML + "<br>";
        TOC.appendChild(contenido);
    }


}
