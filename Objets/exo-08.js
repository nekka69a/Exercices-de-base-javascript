// Ajouter une méthode enseigneMaths à l'objet professeur qui retourne true si le professeur enseigne les mathématiques.

const professeur = {
  nom: "Madame Morand",
  matières: ["mathématiques", "anglais", "biologie", "svt", "français"],
  enseigneMaths: function () {
    return this.matières.includes("mathématiques");
  },
};

console.log(professeur.enseigneMaths());
