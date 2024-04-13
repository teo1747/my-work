/*
function  hellowold(){
    document.body.innerHTML = "<h1>hello world</h1>";
}
hellowold();
*/
function  modifier(){

let h1 = document.querySelector("h1");
h1.innerHTML = "Polytech Dijon";
h1.style.color = "#4691ff"; 

// Sélectionnez l'élément <a> par son ID (dans votre cas, l'ID est "paragraphe")
var lien = document.querySelector(" a");

// Mettez à jour l'attribut href avec la nouvelle URL
lien.href = "https://esirem.u-bourgogne.fr";
}

modifier();

function testerValeur() {
    const champTexte = document.querySelector("input[type='text']");
    const valeurSaisie = champTexte.value;

    // Vérifie si la valeur saisie est un nombre
    if (isNaN(valeurSaisie)) {
        champTexte.style.backgroundColor = "red"; // Arrière-plan rouge
    } else {
        const nombre = parseFloat(valeurSaisie);

        // Vérifie si le nombre est pair
        if (nombre % 2 === 0) {
            champTexte.style.backgroundColor = "yellow"; // Arrière-plan jaune
        } else {
            champTexte.style.backgroundColor = "blue"; // Arrière-plan bleu
        }
    }
}

// Appel de la fonction lorsque l'utilisateur saisit du texte
const champTexte = document.querySelector("input[type='text']");
champTexte.addEventListener("input", testerValeur);


function connectClickEvent() {
    const bouton = document.querySelector("#monBouton"); // Remplacez "#monBouton" par le sélecteur de votre bouton
    bouton.addEventListener("click", testValue);
}

// Appel de la fonction pour connecter l'événement click
connectClickEvent();

