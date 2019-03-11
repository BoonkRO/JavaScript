var shoe = {
    "model": "Sacai x Nike LDV Waffle",
    "colour": "Varsity Blue/Del Sol/Varsity Red",
    "code": "BV0073-400",
    "avaliable": "07/03/19",
    "price": "180$"
};

var raffles = {

    "Antonia Milano": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/AntoniaMilano.jpg",
        "country": "Italy",
        "purchase": "Online Raffle",
        "collection": "Postage Available",
        "Sizes": "4 to 12 US",
        "Opens": "live",
        "Closes": "06/03 @ 11AM CET",
        "url": "https://www.antonia.it/164-shoes"
    },

    "END": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/End.jpg",
        "country": "UK",
        "purchase": "Online Raffle",
        "collection": "Postage Available",
        "Sizes": "5 to 12 UK",
        "Opens": "live",
        "Closes": "07/03 @ 12AM GMT",
        "url": "https://launches.endclothing.com/"
    },

    "Foot Patrol": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/FootPatrol.png",
        "country": "France",
        "purchase": "Online Raffle",
        "collection": "Collection Only",
        "Sizes": "36.5 to 47.5 EU",
        "Opens": "live",
        "Closes": "04/02 @ 10AM CET",
        "url": "https://www.footpatrol.com/customer-service/raffle-fr/"
    },

    "Holypop": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/HolyPop.png",
        "country": "Italy",
        "purchase": "Online FCFS",
        "collection": "Postage Available",
        "Sizes": "TBC",
        "Opens": "announced",
        "Closes": "07/02 @ 12AM CET",
        "url": "https://www.holypopstore.com/en/footwear"
    },

    "Offspring": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/OffSpring.jpg",
        "country": "UK",
        "purchase": "Online Raffle",
        "collection": "Collection Only",
        "Sizes": "3.5 to 7 UK",
        "Opens": "live",
        "Closes": "closed",
        "url": "https://www.offspring.co.uk/release-dates"
    },

    "SNS": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/SNS.jpg",
        "country": "Swe, UK, Ger, Fr",
        "purchase": "Online Raffle",
        "collection": "Post and Collect",
        "Sizes": "4 to 13 US",
        "Opens": "live",
        "Closes": "06/03 @ 11AM CET",
        "url": "https://www.sneakersnstuff.com/en/937/sns-raffles"
    },

    "Solebox": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/SoleBox.jpg",
        "country": "Germany",
        "purchase": "In-Store/Online",
        "collection": "Post and Collect",
        "Sizes": "41 to 46 EU",
        "Opens": "announced",
        "Closes": "When sold out",
        "url": "https://www.solebox.com/en/Footwear/"
    },

};

// exports.sole = {
//     "shoe": shoe,
//     "raffles": raffles
// };

var jsonRifas = JSON.stringify(raffles);
var rifas = JSON.parse(jsonRifas);

function documentReady() {
    loadProducto();
    cargarRifas();
    estilosBoton();
}


function loadProducto() {
    document.getElementById("modelo").innerHTML = shoe["model"];
    document.getElementById("color").innerHTML = shoe["colour"];
    document.getElementById("codigo").innerHTML = shoe["code"];
    document.getElementById("disponibilidad").innerHTML = shoe["avaliable"];
    document.getElementById("precio").innerHTML = shoe["price"];
}


function cargarRifas() {
    let i = 0;
    for (rifa in rifas) {
        var divRifa = document.getElementsByClassName("rifa")[i];
        divRifa.style.fontSize = "200%";

        document.getElementsByClassName("shopName")[i].innerHTML = rifa;
        document.getElementsByClassName("logo")[i].src = rifas[rifa].logo;
        document.getElementsByClassName("country")[i].innerHTML = rifas[rifa].country;
        document.getElementsByClassName("purchase")[i].innerHTML = rifas[rifa].purchase;
        document.getElementsByClassName("collection")[i].innerHTML = rifas[rifa].collection;
        document.getElementsByClassName("sized")[i].innerHTML = rifas[rifa].Sizes;
        document.getElementsByClassName("opens")[i].innerHTML = rifas[rifa].Opens;
        document.getElementsByClassName("closes")[i].innerHTML = rifas[rifa].Closes;
        var url = document.getElementsByClassName("url")[i];
        url.setAttribute("value", "ENTER RAFFLE");
        

        i++;
    }
}

function estilosBoton() {
    let i = 0;
    for (rifa in rifas) {
        var buton = document.getElementsByClassName("url")[i];
        var url = document.getElementsByClassName("url")[i];
        var shopName = document.getElementsByClassName("shopName")[i];

        shopName.style.fontWeight = "600";

        url.style.width = "400px";
        url.style.height = "50px";
        url.style.fontSize = "30px";

        if (rifas[rifa].Opens == "live" && rifas[rifa].Closes != "closed") {
            buton.style.backgroundColor = "green";
        } else if (rifas[rifa].Closes == "closed") {
            buton.style.backgroundColor = "red";
            buton.value = "CLOSED";
        } else {
            buton.style.backgroundColor = "grey";
            buton.value = "ANNOUNCED";
        }

        i++;
    }
}