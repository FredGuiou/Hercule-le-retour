console.log("test 1...2...1...2");
//Etape 1 Liaison
//La console indique plusieurs erreurs, je vérifie en html la liaison script en bas de page.

//Etape 2 Objet
//Je dois représenter l'Entité Hercule, je crée donc un objet avec ses propriétés.
/*Je remarque un problème d'indentation lors de la mise en forme. Je ne sais pas d'où vient le problème
cependant, cela n'empeche pas la page de tourner et n'entraine pas d'erreur.*/

const Hercule = {
  name: "Hercule",
  job: "Demi-dieu",
  age: 35,
  departement: 75,
  arm: 60.5,
  inRelationship: "Oui",
};

//Place au test, je lance la méthode base.fillProfil en ajoutant l'argument Hercule dans les parenthèses.
base.fillProfil(Hercule);

//Etape 3 Tableau
//Je dois créer un tableau qui contiendra les noms des 4 amis d'Hercule.

let friends = ["Jupiter", "Junon", "Alcmène", "Déjanire"];

//J'execute la méthode printFriends avec pour argument le tableau que je viens de créer

base.printFriends(friends);

/*Je recherche la méthode dans base.js qui permet de déterminer et afficher le meilleur ami
d'Hercule. Il s'agit de setBestFriend. Je lance donc la méthode avec pour argument le tableau 
que je viens de créer et en sélectionnant la première valeur (rang 0) de celui-ci.*/

base.setBestFriend(friends[0]);

//Etape 4 DOM
//Je créé en JS un élément h1.
let title = document.createElement("h1");
//Je lui donne la classe banner__title.
title.classList.add("banner__title");
//Je l'alimente avec le texte demandé.
title.textContent = "Vous consultez le profil de Hercule";
//Je fais adopter l'élément title par celui dont l'Id est header-banner.
var header = document.querySelector("#header-banner");
header.appendChild(title);

//Etape 5 Boucle
//On doit boucler (for) de 0 à 11 (0=1er trv & 11=12eme trv)
//Je crée donc ma boucle dans une fonction loopWorks (en dehors d'un objet) en appelant la méthode fournie dans base.js à chaque tour de boucle.
//J'appelle ma fonction
function loopWorks() {
  for (let number = 0; number < 11; number++) {
    base.displayWork(number);
  }
}
loopWorks();

//Etape 6 Condition
//On doit afficher la disponibilité d'Hercule en fonction de l'heure qu'il est.
//Si l'heure est comprise entre 8h et 20h alors Disponible sinon Non disponible

//On commence par récupérer l'heure dans une variable time.
//On vérifie le retour de l'information
//console.log(time); Check dans la console du navigateur OK.
var availability = document.querySelector("#availability");
var time = base.getHour();

function displayAvailability() {
  if (time >= 8 && time <= 20) {
    availability.textContent = "Disponible";
  } else {
    availability.textContent = "Non disponible";
    availability.classList.add("off");
  }
}
displayAvailability();

//J'appelle ma fonction et je checke. Le texte devient "Disponible" car il est 11h45,
//la pastille est verte.
//je change la valeur de var time en mettant 22.
//la pastille devient rouge, et le texte devient Non disponible. C'est ok !!! :)

//Etape 7 Fonction
//On doit créer une function qui génère un pseudo.

function nickName(firstName, departement) {
  var userNickName = `${firstName}-du-${departement}`;
  return userNickName;
  // return `${Hercule.name}-du-${Hercule.département}`;
}
var idPseudo = nickName(Hercule.name, Hercule.departement);

var profilName = document.querySelector("#profil-name");
profilName.textContent = idPseudo;


// NB : On peut concaténer de façons différentes :

// Méthode classqiue en gérant les espace manuellement.
// var userNickName = firstName + "-du-" + userDepart;

// Méthode des gabaris (gestion automatique par le navigateur des espaces)
// var userNickName2 = `${firstName}-du-${userDepart}`;



// Étape 8 - Event
// On va faire fonctionner le menu en haut à gauche!

var menuToggler = document.querySelector("#menu-toggler");
var headerBanner = document.querySelector("#header-banner");

// Écoute l 'événement click sur l'élement possédant l 'id menu-toggler
// J 'ai déjà prévu une classe banner--open qui ajoute les styles nécessaires pour voir le menu, tu dois l'
// ajouter ou la retirer sur l 'élement ayant l'id header - banner
// Quand l 'élement header-banner a déjà la classe banner--open (lors du click sur menu-toggler), on veut la lui retirer
// Quand l 'élement header-banner n'
// a pas la classe banner--open(toujours au moment d 'un click), on veut la lui ajouter
// Si tout vas bien tu vois apparaître le menu au clic, puis si tu recliques il disparaît\ o /
menuToggler.addEventListener("click", function () {
  headerBanner.classList.toggle("banner--open")
});