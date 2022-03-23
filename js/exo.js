const app = {

  consoleTest: console.log("test 1...2...1...2"),
  //Etape 1 Liaison
  //La console indique plusieurs erreurs, je vérifie en html la liaison script en bas de page.

  
    //Etape 2 Objet
    //Je dois représenter l'Entité Hercule, je crée donc un objet avec ses propriétés.
    /*Je remarque un problème d'indentation lors de la mise en forme. Je ne sais pas d'où vient le problème
    cependant, cela n'empeche pas la page de tourner et n'entraine pas d'erreur.*/
    Hercule : {
      name: "Hercule",
      job: "Demi-dieu",
      age: 35,
      department: "75",
      arm: 60.5,
      inRelationship: true,
    },
    //Place au test, je lance la méthode base.fillProfil en ajoutant l'argument Hercule dans les parenthèses.
    
  

  etape3 () {
    //Etape 3 Tableau
    //Je dois créer un tableau qui contiendra les noms des 4 amis d'Hercule.
    let friends = ["Jupiter", "Junon", "Alcmène", "Déjanire"];
    //J'execute la méthode printFriends avec pour argument le tableau que je viens de créer
    base.printFriends(friends);
    /*Je recherche la méthode dans base.js qui permet de déterminer et afficher le meilleur ami
    d'Hercule. Il s'agit de setBestFriend. Je lance donc la méthode avec pour argument le tableau 
    que je viens de créer et en sélectionnant la première valeur (rang 0) de celui-ci.*/
    base.setBestFriend(friends[0]);
  },

  etape4 () {
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
  },

  etape5 () {
    //Etape 5 Boucle
    //On doit boucler (for) de 0 à 11 (0=1er trv & 11=12eme trv)
    //Je crée donc ma boucle dans une fonction loopWorks (en dehors d'un objet) en appelant la méthode fournie dans base.js à chaque tour de boucle.
    //J'appelle ma fonction
    function loopWorks() {
      for (let number = 0; number < 12; number++) {
        base.displayWork(number);
      }
    }
    loopWorks();
  },

  etape6 () {
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
  },

  etape7 () {
    //Etape 7 Fonction
    //On doit créer une function qui génère un pseudo.
    function nickName(firstName, department) {
      var userNickName = `${firstName}-du-${department}`;
      return userNickName;
      // return `${Hercule.name}-du-${Hercule.département}`;
    }
    var idPseudo = nickName(app.Hercule.name, app.Hercule.department);
    var profilName = document.querySelector("#profil-name");
    profilName.textContent = idPseudo;
    // NB : On peut concaténer de façons différentes :
    // Méthode classqiue en gérant les espace manuellement.
    // var userNickName = firstName + "-du-" + userDepart;
    // Méthode des gabaris (gestion automatique par le navigateur des espaces)
    // var userNickName2 = `${firstName}-du-${userDepart}`;
  },

  etape8 () {
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
  },

  etape9 () {
    // Étape 9 - Event bis
    // Cette fois - ci on va réagir à la soumission du formulaire en haut à droite qui possède l 'id contact
    var contact = document.querySelector("#contact");
    // Je ne veux pas que la page s 'actualise lorsqu'on valide le formulaire
    // Empêche la soumission du formulaire
    contact.addEventListener('submit', function (event) {
      event.preventDefault();
      alert("Hercule ne souhaite pas être dérangé !");
    });
    // A la place il faut afficher une boîte de dialogue en alerte qui dit Hercule ne souhaite pas être dérangé
    //Challenge de base terminé !!
    //Place aux bonus ! ;)
  },

  etape10 () {
    // Bonus Étape 10 - Algo
    // La programmation c'est comme une recette de cuisine, il faut décrire nos étapes une par une pour faire un bon résultat
    // On veut afficher le pourcentage de votes pour Hercule et pour César sur la droite
    // Le nombre de vote de chacun est accéssible via la propriété vote de l'objet base
    var HerculeVote = base.vote.hercule;
    var CesarVote = base.vote.cesar;
    var totalVote = HerculeVote + CesarVote;
    // La formule pour calculer un pourcentage est valeurRelative / valeurTotale * 100
    var herculePercent = Math.round(HerculeVote / totalVote * 100);
    var cesarPercent = Math.round(CesarVote / totalVote * 100);
    // Tu pourras afficher tes calculs dans les 2 élements possédant la classe people__popularity présents
    // pour Hercule dans l'élement avec l'id #trends-hercule et pour César dans l'élement avec l'id #trends-cesar
    var popHercule = document.querySelector("#trends-hercule .people__popularity");
    var popCesar = document.querySelector("#trends-cesar .people__popularity");
    popHercule.innerText = herculePercent + " %";
    popCesar.innerText = cesarPercent + " %";
    // La cerise sur le gateau serait de donner une largeur aux 2 élements qui ont la classe people__bar,
    // ce sont les 2 petites barres oranges, si on utilise le pourcentage calculé comme largeur ça devrait être chouette
    // A toi d'assembler les morceaux thinking
    var herculePeopleBar = document.querySelector("#trends-hercule .people__bar");
    herculePeopleBar.style.width = herculePercent + "%";
    var cesarPeopleBar = document.querySelector("#trends-cesar .people__bar");
    cesarPeopleBar.style.width = cesarPercent + "%";
  },

  etape12 () {
    //Bonus Etape 12
    //On crée une variable qu'on appelle en DOM #activities
    var activities = document.querySelector("#activities");
    //On remarque dans le html et CSS que l'Id activities a une classe hidden display none.
    //On supprime cette classe hidden à la variable activities dans Js pour afficher dans le Dom.
    activities.classList.remove("hidden");
    //On crée une variable activitiesLenght pour reprendre le nombre d'occurence dans
    //le tableau activities.
    const activitiesLength = base.activities.length
    //On boucle de 0 à Max la longueur du tableau avec for.
    for (i = 0; i < activitiesLength; i++) {
      //La condition à boucler
      //Si l'auteur de chaque occurence du tableau activities est égal
      //à Hercule et que le finished de chaque occurence est true
      //alors :
      if (base.activities[i].author === "Hercule" && base.activities[i].finished === true) {
        //On crée un li dans le DOM
        const liOfActivities = document.createElement("li");
        //On lui ajoute la classe tasks__info pour reprendre le style css
        liOfActivities.classList.add("tasks__info");
        //On récupère l'élémént ul par sa classe tasks qui existe dans le html
        const taskClass = document.getElementsByClassName("tasks");
        //On ajoute la classe tasks item à la variable taskClass (ul)
        //On Doit lui préciser la position taskClass qu'on doit sélectionner.
        taskClass[0].classList.add("tasks__item")
        //On met en place l'adoption du li (liOfActivities) par le ul (taskClass)
        taskClass[0].appendChild(liOfActivities);
        //On fait apparaitre le titre de chque activités terminées
        liOfActivities.innerText = base.activities[i].title;
      };
    };
  },
};
//Fin de l'app

function init () {
  base.fillProfil(app.Hercule);
  app.etape3();
  app.etape4();
  app.etape5();
  app.etape6();
  app.etape7();
  app.etape8();
  app.etape9();
  app.etape10();
  app.etape12();
};

init();