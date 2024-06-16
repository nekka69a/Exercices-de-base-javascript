// Utilise la méthode reduce pour calculer la somme de tous les nombres dans un tableau.

let nombres = [1, 2, 3, 4, 5];

const sommeNombres = nombres.reduce((a, b) => {
  return a + b;
});

console.log(sommeNombres);
