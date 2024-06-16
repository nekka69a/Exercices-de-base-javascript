// Tu as un tableau d'étudiants avec leurs noms et leurs notes. Écris une boucle for qui calcule la note moyenne, la note la plus élevée et la note la plus basse.

let etudiants = [
  { nom: "Alice", note: 85 },
  { nom: "Bob", note: 92 },
  { nom: "Charlie", note: 78 },
  { nom: "Dave", note: 88 },
  { nom: "Eve", note: 91 },
];

let calculMoyenne = 0;
let noteMin = 0;
let noteMax = 0;
let tab = [];

for (let i = 0; i < etudiants.length; i++) {
  let note = etudiants[i].note;
  calculMoyenne += note / etudiants.length;
  //   console.log(calculMoyenne);

  tab.push(note);
}

noteMin = Math.min(...tab);
noteMax = Math.max(...tab);
console.log(tab);
console.log(calculMoyenne);
console.log(noteMin);
console.log(noteMax);
