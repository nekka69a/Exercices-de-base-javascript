// Utiliser map pour créer un tableau de nombres au carré puis utilisez forEach pour imprimer chaque nombre (chaînage des méthodes=mettre une méthode après l'autre)

const nombres = [4, 9, 3, 5];

const nombresAuCarre = nombres
  .map((nbre) => nbre * nbre)
  .forEach((nbre) => console.log(nbre));
