document.addEventListener("DOMContentLoaded", function () {
    init();
});

function init(){

    document.getElementsByTagName("button")[0].addEventListener("click", function(e){
        if (!zendEmail()) {
            e.preventDefault();
        }
    });
}

function zendEmail() {

    var bericht = controleerInput();
    var errorblok = document.getElementById("boodschapblok");

    if (bericht === "") {

        var link = "mailto://hein.pauwelyn-vandewielle@student.howest.be?cc=" + document.getElementById("email").value.trim() + "&subject="
            + document.getElementById("titel").value.trim() + "&body=" + document.getElementById("bericht").value.trim();

        window.location.href = link;

        errorblok.className = "noerror";
        bericht = "Uw bericht werd verzonden!";
    }
    else {

        errorblok.className = "error";
    }

    errorblok.style.visibility = "visible";
    errorblok.style.height = "46px";
    document.getElementById("boodschap").innerHTML = bericht;

    return false;
 }

function controleerInput(){

    var velden = document.getElementsByTagName("input");

    for (i = 0; i < velden.length; i++){

        if (velden[i].id == "naam" || velden[i].id == "titel"){

            if (velden[i].value.trim().length <= 2) {
                return "Vul a.u.b. alle verplichte velden in.";
            }
        }
        else if (velden[i].id == "email") {

            var pattern = /[a-zA-Z0-9.-_]+@[a-zA-Z0-9-]+[.][a-zA-Z]{2,10}/;

            if (pattern.test(velden[i].value) == false) {
                return "Gelieve een correct e-mail adres in te voeren.";
            }
        }
        else if (velden[i].id == "verbodenveld") {

            if (velden[i].value.trim().length != 0){
                return "U bent een computer en verstuurt spam!";
            }
        }
    }

    if (document.getElementsByTagName("textarea")[0].value.trim().length <= 10) {
        return "Uw bericht moet minimaal 10 karakters bevatten.";
    }

    return "";
}