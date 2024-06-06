// Objet personne avec propriétés nom et âge et une méthode bonAnniversaire qui augmente l'âge de la personne de 1 année et affiche un message.

const personne = {
  nom: "Amina",
  age: 40,

  bonAnniversaire: function () {
    this.age += 1;
    console.log(
      "Joyeux anniversaire",
      personne.nom,
      "pour tes",
      personne.age,
      "ans"
    );
  },
};

personne.bonAnniversaire();
