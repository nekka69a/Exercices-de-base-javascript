// Ajoute une méthode afficherLivre à l'objet livre qui imprime tous les détails du livre.

const livre = {
  titre: "Le petit prince",
  auteur: "Antoine de Saint-Exupéry",
  année: 1943,
  afficherLivre: function () {
    console.log(
      "Titre: ",
      this.titre,
      "Auteur: ",
      this.auteur,
      "Année: ",
      this.année
    );
  },
};

console.log(livre.afficherLivre());
