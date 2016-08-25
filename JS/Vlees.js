//"Rug", "Ham", "Achterhiel", "Achterpoot", "Lende", "Varkenshaas", "Ribkarbonade", "Staart", "Buikvlees", "Varkensbuik", 
//"Borstvlees", "Spiering", "Varkensschouder", "Wangvlees", "Kop", "Voorhiel", "Voorpoot", "Oren", "Beenderen", "Nieren"

document.addEventListener("DOMContentLoaded", function () {
    init();
});

function init() {

    var clicks = document.getElementsByClassName("click");



    for (i = 0; i < clicks.length; i++) {

        clicks[i].addEventListener('click', function (e) {
            geefDetials(e);
        });
    }
}

function geefDetials(e)
{
    var sender = (e && e.target) || (window.event && window.event.srcElement);
    var id = sender.id;

    console.log(id);

    var onderdelen = ["rug", "ham", "oren", "beenderen", "bloed", "haar", "darmen", "hart", "neuzen", "nieren", "achterhiel", "achterpoot", "lende", "varkenshaas", "ribkarbonade", "staart", "buikvlees", "varkensbuik", "borstvlees", "spiering", "varkensschouder", "wangvlees", "kop", "voorhiel", "voorpoot"];
	
    if (inarray(id.toLowerCase(), onderdelen))
    {
        console.log("ok");
        document.getElementsByClassName("vleesInfo")[0].innerHTML = geefVarkensdelenInfo(id);
    }
    else
    {
        document.getElementsByClassName("vleesInfo")[0].innerHTML = "";
    }
}

function inarray(naald, hooiberg)
{
    var length = hooiberg.length;

    for(var i = 0; i < length; i++)
    {
        if(hooiberg[i].toLowerCase() == naald)
        {
            return true;
        }
    }
    return false;
}

function varkensdeelVeranderd()
{
    alert("ok");
}

function geefVarkensdelenInfo(deel)
{
	console.log(deel);
	
	switch (deel)
	{
		case "rug":
			return "<h2>Rug</h2>";
			
		case "ham":
			return '<img src="afbeeldingen/Ham.jpg" /><h2>Ham</h2><p>Uit poep van het varken kan men <strong>ham</strong> maken. Er zijn ook nog verschillende andere bereidingen die komen uit de poep van het varken.</p>';
			
		case "achterhiel":
		case "voorhiel":
			return "<h2>Voor- en achterhiel</h2>";
        
        case "achterpoot":
        case "voorpoot":
            return "<h2>Voor- en achterpoten</h2><p>Gevulde varkenspoten is een <strong>oud recept</strong> dat vroeger veel gemaakt werdt door de armen. We vinden daarnaast ook nog varkenspoten terug in een <strong>streekproduct van de Westhoek</strong> nl. <a href='http://www.streekproduct.be/producten/detail.phtml?id=830'>potjesvlees</a>.</p>";
        
        case "lende":
            return "<h2>Lende</h2>";
        
        case "varkenshaas":
            return '<img src="afbeeldingen/Varkenshaas.jpg" /><h2>Varkenshaasje</h2><p>Het varkenshaasje is een <strong>zacht stukje vlees</strong> van het varken. Dit eet je best onbewerkt met uitzondering van bakken en braden om zo zijn smaak en zachtheid te behouden.</p>';
        
        case "ribkarbonade":
            return "<h2>Ribkarbonade</h2><p>Ribkarbonade of ribbetjes is een <strong>zeer smakelijk gerecht</strong> voor op de BBQ en zeer geliefd bij kinderen. Dit komt omdat je dat met de handen mag eten.</p>";
        
        case "staart":
            return "<h2>Staart</h2><p>De staart van de varkens is in Suriname een lekkernij. <strong>Surinaamse varkenstaartjes</strong> wordt vooral gegeten door de arme bevolkingsgroeppen. Naast een recept voor de mens, wordt dit ook in <strong>honden- en kattenavoer</strong> gedaan.</p>";
        
        case "buikvlees":
            return "<h2>Buikvlees</h2>";
        
        case "varkensbuik":
            return "<h2>Varkensbuik</h2>";
        
        case "borstvlees":
            return "<h2>Borstvlees</h2>";
        
        case "spiering":
            return "<h2>Spiering</h2><p>Spiering of halskarbonade is een <strong>taai stukje vlees</strong> van het varken. Dit wordt meestal gebraad of gegrild.</p>";
        
        case "varkensschouder":
            return "<h2>Varkensschouder</h2>";
        
        case "wangvlees":
            return "<h2>Wangvlees</h2><p>De wangen van een varken is niet zo populair en ongewaardeerd om te eten. Toch is het een zeer <strong>lekker en zacht stukje vlees</strong>. Je kan er o.a. lekkere stoofvlees of worst mee maken.</p>";
        
        case "kop":
            return "<h2>De kop</h2><p>De kop van een varken ziet er niet zo mooi uit maar toch wordt dit deel gebruikt voor oa. <strong>dierenavoeding en mensenavoeding</strong> zoals hoofdvlees.</p>";

        case "oren":
            return "<h2>De oren</h2><p>De oren van varkens worden vaak <strong>gedroogd en gezouten</strong>. Dit dient vooral als <strong>dierenavoeding</strong> voor honden en is niet geschikt voor voeding voor de mens. Dit komt doordat varkensoren zeer taai zijn en grotendeels bestaat uit <strong>kraakbeen</strong>.</p>";

        case "nieren":
            return "<h2>Nieren</h2><p>Varkensnieren werdt <strong>vroeger veel gegeten</strong> bij de armen. De dag van vandaag wordt amper gedaan mede door het feit dat er in nieren ureum wordt aangemaakt en ferm stinkt. Volgens sommigen zijn varkensnieren zeer gezond en zitten er <strong>veel vitaminen en mineralen</strong> in zo'n nier. Daarnaast zijn nieren een echte <strong>cholestorolbom</strong>. Een voorbeeld van een recept is varkensnieren met champignons.</p>";

        case "beenderen":
            return '<h2>Beenderen</h2><p>Beenderen worden niet geteten door de mens, maar toch worden ze gebruikt in o.a. <strong>beendermeel</strong>. Beendermeel wordt gebruikt in de tuin als <strong>natuurlijke bron van fosfor en stikstof</strong>. Het hoge fosforgehaalte stimuleert de wortelbloem- en vruchtvorming en zorgt voor stevig ingewortelde planten, een rijke bloei en een overvloedige oogst. Daarnaast zorgt beendermeel ook voor dat de <strong>bodemvruchtbaarheid</strong> op peil blijft. <span class="bron">(Bron: <a href="http://www.dcm-info.be/nl/hobby/producten/groentetuin-meststoffen/dcm-beendermeel/">DCM</a>)</span></p><p>Naast beendermeel worden beenderen ook nog gebruikt in <strong>lijm</strong>.</p>';

        case "haar":
            return "<h2>Het haar</h2><p>Van het haar van de varkens, kan er o.a. <strong>verfborstels</strong> mee gemaakt worden.</p>";

        case "bloed":
            return "<h2>Het Bloed</h2><p>Bloed wordt door veel mensen bedoeld voor vampieren. Maar toch wordt er van bloed, <strong>bloedworst</strong> gemaakt, soms ook zwarte pens genoemd. Dit is een worst met een klein percentage bloed in.</p>";

        case "darmen":
            return "<h2>Darmen</h2><p>De darmen van een varken kan gebruikt worden voor <strong>dierenvoeding</strong> en het pelletje rond een <strong>worst</strong>.</p>";

        case "hart":
            return "<h2>Het hart</h2><p>Dit kan dienen als <strong>dierenavoeding</strong> en ontledingen in de biologie.</p>";
			
		case "neuzen":
			return "<h2>Neuzen</h2><p>Neuzen is net als staarten, poten en nieren een <strong>oud recept</strong> dat vroeger vaak gegeten werdt door de armen. De dag van vandaag, wordt dit ook in <strong>dierenavoeding</strong> gestoken voor honden en katten.</p>";

        default:
            return "";
	}
}

function geefVarkensdelenAfbeelding(deel)
{
    if (deel == "Varkenshaas" || deel == "Ham")
    {
	    return '';
    }
    else
    {
        return "";
    }
}