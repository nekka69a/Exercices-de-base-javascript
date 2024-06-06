// Fonction qui calcule le périmètre d'un rectangle

function calculerPerimetreRectangle(longueur, largeur) {
  return 2 * (longueur + largeur);
}

function afficherResultat() {
  console.log(
    "Le périmètre du rectangle est de",
    calculerPerimetreRectangle(10, 8),
    "m2"
  );
}

afficherResultat();
