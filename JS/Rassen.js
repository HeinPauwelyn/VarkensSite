document.addEventListener("DOMContentLoaded", function () {
    init();
});

var actiefRas;

function init() {

    wissen();
    bewegingToevoegen();
}

function wissen() {

    var rassen = document.getElementsByTagName("article");
    var tewissen = [];

    for (var index = 0; index < rassen.length; index++) {

        if (rassen[index].className != "active") {
            tewissen.push(rassen[index]);
        }
        else {
            actiefRas = rassen[index];
        }
    }

    for (var index2 = 0; index2 < tewissen.length; index2++) {
        document.getElementsByTagName("form")[0].removeChild(tewissen[index2]);
    }
}

function bewegingToevoegen() {

    var locnavs = document.getElementsByClassName("locnav");

    for (index = 0; index < locnavs.length; index++) {

        locnavs[index].addEventListener("click", function (e) {
            toonInfo(e);
        });
    }
}

function toonInfo(e){

    var sender = (e && e.target) || (window.event && window.event.srcElement);
    var nr;
	var form = document.getElementsByTagName("form")[0];
    var locnav = document.getElementsByClassName("locnav");
	var art = document.getElementsByTagName("article")[0];
	art.innerHTML = "";
		
    for (index = 0; index < locnav.length; index++) {
        locnav[index].classList.remove("actief");
    }

    sender.classList.add("actief");
	
	var h2 = document.createElement("h2");
	var para = document.createElement("p");
	
    switch (sender.innerHTML) {

        case "Berkshire":
            art.innerHTML ='<img src="afbeeldingen/Berkshire.jpg"/><h2>Berkshire</h2><p>Het Berkshire varken word vooral gekweekt in het Verenigd Koninkrijk. Deze varkens zijn <b>volledig zwart met witte poten</b>. Ze hebben een <b>zeer goede vlees kwaliteit</b> en wordt daarom gecommercialiseerd als <b>Duke of Berkshire</b>.</p><p>Dit ras is <b>van kop tot staart zeer kort</b>. Dit leid tot <b>minder tepels</b> en dus <b>minder biggen</b> per zeug.</p>';
            break;

        case "Duroc": 
            art.innerHTML = '<img src="afbeeldingen/Duroc.jpg"/><h2>Duroc</h2><p>Het Duroc varken is ook een populair varkensras in België. Duroc heeft een <b>goede vleeskwaliteit met weinig vet</b>. Het nadeel van Duroc is dat ze <b>minder goede moedereigenschappen</b> hebben. Daarom wordt er soms gekruist met een ander ras.</p>';
            break;

        case "Hangbuikvarkens":
            art.innerHTML = '<img src="afbeeldingen/Hangbuikvarken.jpg"/><h2>Hangbuikvarkens</h2><p>Deze varkens hebben een <b>typische hangende buik</b> en is <b>niet goed qua vlees prodoctie</b>. Dit komt omdat het grootste deel van deze varkens vet is. Deze varkens worden meer gehouden <b>als hobby of een kinderboerderij</b>. Deze varkens hebben wel <b>uitstekende moedereigenschappen</b> voor hun jongen.</p>';
            break;

        case "Landrassen":
            art.innerHTML = '<h2>Landrassen</h2><p>Landrassen is het <b>meest voorkomende ras</b> in de varkenshouderij. Landrassen vershillen (zoals de naam het zegt) van land tot land. Zo heb je het Belgisch landras, Deens landras, Fins landras, Duits landras, enz. Deze komen tot stand door <b>niet noemenswaardige menselijke ingrepen en selectie</b>. Deze dieren zijn dan ook aangepast aan de leefomgeving in hun eigen land. Zo is het <b>Belgisch landras zeer gespierd en met goede moedereigenschappen</b>. Het nadeel is dat het maar een <b>matige vleeskwaliteit</b> heeft.</p>';
            break;

        case "Piétrain":
            art.innerHTML = '<h2>Piétrain</h2><p>Deze varkens zijn <b>goed qua vlees productie</b> en worden vaak gekruist met een ander ras in de landbouw. Dit komt omdat ze <b>minder goede moedereigenschappen</b> hebben. Piétrain varkens kenmerken zich door hun <b>zwarte vlekken</b>. Sommige varkens zijn zelf bijna volledig zwart. </p>'
            break;

        case "Saddleback":
            art.innerHTML = '<img src="afbeeldingen/saddleback%20varkens.jpg"/><h2>Saddleback</h2><p>Een typisch kenmerk van het <b>Engelse ras</b> is de <b>gekleurde witte band</b> in het midden van het varken. Voor de rest zijn deze varkens zwart. Ze hebben <b>hangende oren</b> in tegenstelling tot Hampshire. Volgens traditie werden ze gebruikt als <b>fourageervarken</b>.</p>';
            break;

        case "Wild varken":
            art.innerHTML = '<img src="afbeeldingen/Wild%20varken.jpg"/><h2>Wild varken</h2><p>Het wilde varken wordt gebruikt in sommige bossen voor de <b>omgeving in stand te houden</b>. Daarnaast is er ook nog een <b>jacht</b> op wilde varkens en komt hij hier en daar soms ongewenst te voorschijn.</p><p>De jongen hebben kenmerkend <b>lichter gekleurde strepen</b> en verdwijnen ze naar mate de ouderdom van het varken. Ze hebben een <b>dikke vacht</b> voor het overleven in koude omstandigheden.</p>';
            break;

        case "Yorkshire of Large White":
            art.innerHTML = '<img src="afbeeldingen/LW.jpg"/><h2>Yorkshire of Large White</h2><p>Large White of Yorkshire is een ras <b>afkomstig van Yorkshire</b>, Engelland en werd veelvuldig geïmorteerd in andere landen waaronder België en Nederland. Dit ras wordt veel gebruik voor <b>vernieuwing van de oudere zeugen</b> van een intensief landbouwbedrijf door de <b>goede vruchtbaarheid en moedereigenschappen</b> ervan.</p><p>Zoals de naam Large White het zegt zijn ze van <b>kop tot staart zeer lang</b>. Daardoor zijn er meer tepels op hun buik zijn en zo dus <b>meer biggen</b> kunnen groot brengen. Door deze reden zijn de zeugen goede moeders voor hun biggen.</p><p>Opnieuw een nadeel van goede moedereigenschappen is dat Large White <b>minder goede vleeskwaliteit</b> heeft. Het varken heeft ook, kenmerkend voor het ras, <b>rechtopstaande en grote oren</b> en is volledig wit.</p>';
            break;

        default:
            break;
    }
	
	art.appendChild(h2);
	art.appendChild(para);
}