// Objet qui définit une personne, qui affiche son nom et son âge et qui met à jour son âge

const personne = {
  nom: "Amina",
  age: 40,
  afficherIdentite: function () {
    console.log("Nom:", this.nom, ", Age:", this.age);
  },
  miseAJourAge: function (nouvelAge) {
    this.age = nouvelAge;
    this.afficherIdentite();
  },
};

personne.miseAJourAge(41);
console.log(personne.age);
