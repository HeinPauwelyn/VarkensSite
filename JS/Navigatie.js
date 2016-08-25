document.addEventListener("DOMContentLoaded", function () {
    init();
});

function init() {

    document.getElementsByClassName("kleinMenu")[0].addEventListener("click", function () {
        toonMenu();
    });
}

function toonMenu() {

    var menu = document.getElementsByClassName("grootMenu")[0];

    if (menu.id === "") {

        menu.id = "kleineNav";
    }
    else{

        menu.id = "";
    }
}

