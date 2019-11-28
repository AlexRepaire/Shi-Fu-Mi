            /*VARIABLE MENU*/

let onePlayer = document.getElementById("player1");
let twoPlayer = document.getElementById("player2");

            /*VARIABLE DU JOUEUR*/
let joueur = document.getElementById("joueur");
let joueur2 = document.getElementById("joueur2");

            /*VARIABLE GENERAL*/

let pierre = document.getElementById("pierre");
let papier = document.getElementById("papier");
let ciseaux = document.getElementById("ciseaux");
let mainMenu = document.getElementById("main-menu");
let menu = document.getElementById("menu");
let h2 = document.getElementById("h2");
let Ordi = ["pierre", "papier", "ciseaux"];
var choixOrdi = Ordi[Math.floor(Math.random()*Ordi.length)];
let resultat = document.getElementById("resultat");

            /*VARIABLE COMPTEURS*/

let nbGame = document.getElementById("nbGame");
let player1 = 0;
let player2 = 1;
let nombreGame= 1;

let nbVictoire = document.getElementById("nbVictoire");
let nombreVictoire = 1;

let nbDefaite = document.getElementById("nbDefaite");
let nombreDefaite = 1;

let nbEgalite = document.getElementById("nbEgalite");
let nombreEgalite = 1;


            /*MODE UN JOUEUR*/

onePlayer.addEventListener("click", function () {
            /*MENU*/

    h2.innerHTML = "Mode 1 joueur";
    mainMenu.style.display = "none";

            /*REFRESH*/

    function refresh(){
        choixOrdi = Ordi[Math.floor(Math.random()*Ordi.length)];
    };

            /*FONCTIONS PIERRE/PAPIER/CISEAU*/

    pierre.addEventListener("click", function () {
        if (choixOrdi === "pierre"){
            resultat.innerHTML = "Egalité";
            nbGame.innerHTML= "Parties joués "+ nombreGame++;
            nbEgalite.innerHTML = "Egalité "+ nombreEgalite++;
            refresh();
        }else if (choixOrdi === "ciseaux"){
            resultat.innerHTML = "Bravo, vous avez gagné.";
            nbGame.innerHTML= "Parties joués "+ nombreGame++;
            nbVictoire.innerHTML = "Victoire: "+ nombreVictoire++;
            refresh();
        }else{
            resultat.innerHTML = "Dommage vous avez perdu.";
            nbGame.innerHTML= "Parties joués "+ nombreGame++;
            nbDefaite.innerHTML = "Défaite: "+ nombreDefaite++;
            refresh();
        }
    });

    papier.addEventListener("click", function () {
        if (choixOrdi === "papier"){
            resultat.innerHTML = "Egalité";
            nbGame.innerHTML= "Parties joués "+ nombreGame++;
            nbEgalite.innerHTML = "Egalité "+ nombreEgalite++;
            refresh();
        }else if (choixOrdi === "pierre"){
            resultat.innerHTML = "Bravo, vous avez gagné.";
            nbGame.innerHTML= "Parties joués "+ nombreGame++;
            nbVictoire.innerHTML = "Victoire: "+ nombreVictoire++;
            refresh();
        }else{
            resultat.innerHTML = "Dommage vous avez perdu.";
            nbGame.innerHTML= "Parties joués "+ nombreGame++;
            nbDefaite.innerHTML = "Défaite: "+ nombreDefaite++;
            refresh();
        }
    });

    ciseaux.addEventListener("click", function () {
        if (choixOrdi === "ciseaux"){
            resultat.innerHTML = "Egalité";
            nbGame.innerHTML= "Parties joués "+ nombreGame++;
            nbEgalite.innerHTML = "Egalité "+ nombreEgalite++;
            refresh();
        }else if (choixOrdi === "papier"){
            resultat.innerHTML = "Bravo, vous avez gagné.";
            nbGame.innerHTML= "Parties joués "+ nombreGame++;
            nbVictoire.innerHTML= "Victoire: "+ nombreVictoire++;
            refresh();
        }else {
            resultat.innerHTML = "Dommage vous avez perdu.";
            nbGame.innerHTML= "Parties joués "+ nombreGame++;
            nbDefaite.innerHTML = "Défaite: "+ nombreDefaite++;
            refresh();
        }
    });
});

            /* MODE 2 JOUEURS*/

twoPlayer.addEventListener("click", function () {
            /*MENU*/

    h2.innerHTML = "Mode 2 joueurs";
    mainMenu.style.display = "none";
    joueur.style.display = "inline-block";
    joueur2.style.display = "inline-block";

});

