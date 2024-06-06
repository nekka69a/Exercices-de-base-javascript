// Boucle do while pour générer des nombres aléatoires entre 1 et 10 jusqu'à générer le nombre 5. Compter et afficher le nombre d'essais nécessaires.

let nombre = 0;
let essais = 0;

do {
  nombre = Math.floor(Math.random() * 10) + 1;
  essais++;
} while (nombre !== 5);

console.log("Nombre d'essais nécessaires pour obtenir 5 :", essais);
