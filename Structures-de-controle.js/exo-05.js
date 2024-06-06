const montantAchat = 150;

if (montantAchat > 50 && montantAchat <= 100) {
  console.log("Réduction de 5%");
} else if (montantAchat > 100 && montantAchat <= 200) {
  console.log("Réduction de 10%");
} else if (montantAchat > 200) {
  console.log("Réduction de 20%");
} else {
  console.log("Pas de réduction");
}
