// Écris une boucle for qui parcourt un tableau d'objets et affiche le nom et l'âge de chaque personne.

let personnes = [
  { nom: "Alice", age: 25 },
  { nom: "Bob", age: 30 },
  { nom: "Charlie", age: 35 },
];

for (key in personnes) {
  console.log(personnes[key]);
}
