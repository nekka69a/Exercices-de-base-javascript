//Créer une boucle while qui continue jusqu'à ce qu'un nombre aléatoire généré soit inférieur à 0.1, le nombre de départ est 100

let num = 100;
while (num >= 0.1) {
  console.log(num);
  num = Math.random();
}
