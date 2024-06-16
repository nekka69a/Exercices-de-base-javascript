// Tu as un tableau d'utilisateurs avec leurs noms, âges et rôles. Écris une boucle for qui filtre les utilisateurs ayant plus de 30 ans et ajoute une propriété status: 'senior' à ces utilisateurs.

let utilisateurs = [
  { nom: "Alice", age: 25, role: "dev" },
  { nom: "Bob", age: 35, role: "manager" },
  { nom: "Charlie", age: 40, role: "CTO" },
  { nom: "Dave", age: 28, role: "designer" },
];

for (let i = 0; i < utilisateurs.length; i++) {
  if (utilisateurs[i].age > 30) {
    utilisateurs[i].status = "senior";
  }
}
console.log(utilisateurs);
