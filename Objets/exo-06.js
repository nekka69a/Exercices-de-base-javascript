// Utilise une boucle for in pour afficher toutes les propriétés et valeurs de personne.

const personne = {
  nom: "Amina",
  age: 40,
};

for (let propriete in personne) {
  console.log(propriete, ":", personne[propriete]);
}
