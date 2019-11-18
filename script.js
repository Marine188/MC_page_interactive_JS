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

var btn = document.getElementsByClassName("navbar-toggler")[0]; //Sélection du bouton avex l'index
var navHead = document.getElementById("navbarHeader");

btn.addEventListener('click',function() {
	console.log("function 2 :" +" " + `${navHead.classList.toggle("collapse")}`); //Affiche sur le site et en console l'état de collapse, true or false
}); // La méthode toggleAttribute () de l'interface Element bascule un attribut booléen (en le supprimant s'il est présent et en l'ajoutant s'il n'est pas présent) sur l'élément donné.

// Fonctionnalité 3 :
