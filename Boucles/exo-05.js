// Compte d'épargne de 100 eur qui croit de 5% chaque année. Utilise une boucle while pour déterminer combien d'années cela prendra pour que le compte atteigne au moins 200 eur.

let solde = 100;
let annee = 0;
while (solde < 200) {
  solde *= 1.05;
  annee++;
}
console.log(
  "Il faudra",
  annee,
  "années pour que le compte atteigne 200 euros."
);
