//L'instruction let permet de déclarer une variable dont la portée est celle du bloc courant, éventuellement en initialisant sa valeur.

// Fonctionnalité 1
// let element = document.getElementsByTagName('footer')[0]; //lance la recherche sur un élément spécifique dans l'arbre DOM.
//
// element.addEventListener('click', function() {
//   console.log('Foncionnalité n°1 ==>');//=> Afficher dans la console
//   console.log('CLIQUE');
// });


// Fonctionnalité 1-bis :
let element = document.getElementsByTagName('footer')[0]; //lance la recherche sur un élément spécifique dans l'arbre DOM.
let count = 1;

if (element.addEventListener("click",function() { //mise en place du compteur
  console.log('Fonctionnalité 1-bis');
  console.log('CLIQUE n°'+`${count}`); // rajoute le nombre de clique avec count

  count++;
}));

// Fonctionnalité 2 :
let btn = document.getElementsByClassName("navbar-toggler")[0]; //Sélection du bouton avex l'index
let navHead = document.getElementById("navbarHeader");

btn.addEventListener('click',function() {
	console.log("function 2 :" +" " + `${navHead.classList.toggle("collapse")}`); //Affiche sur le site et en console l'état de collapse, true or false
}); // La méthode toggleAttribute () de l'interface Element bascule un attribut booléen (en le supprimant s'il est présent et en l'ajoutant s'il n'est pas présent) sur l'élément donné.


// Fonctionnalité 3 :
let firstCard = document.getElementsByClassName('card-text')[0]; //Sélection de la première carte avec l'index
let firstEditBtn = document.getElementsByClassName('btn')[3]; //sélection du premier bouton avec l'index

firstEditBtn.addEventListener('click',function(){
	firstCard.style = 'color:red'; //Passe le texte en rouge
});

// Fonctionnalité 4 :
let secondCard = document.getElementsByClassName('card-text')[1]; // changement de l'index pour selectionner la 2ème card
let secondEditBtn = document.getElementsByClassName('btn-outline-secondary')[1];//idem que pour le bouton 1 mais on change l'index pour sélectionner le deuxième

secondEditBtn.addEventListener('click',function(){ //lorsque je clique sur le btn edit alors ::
	if (secondCard.style.color === 'green')
		secondCard.style.color = "";
	else secondCard.style.color = "green";
});

// Fonctionnalité 5 :
let link = document.getElementsByTagName("link")[0];
let header = document.getElementsByTagName("header")[0];

function stopBootstrap() { //On stop boostrap,
	if (link.rel == "none") {
		link.rel = "stylesheet";
	}
	else {
		link.rel = "none";
	}
}
header.addEventListener("dblclick", stopBootstrap); //quand on redouble click ca annule la commande stopboostrap

// Foncionnalité 6 :
