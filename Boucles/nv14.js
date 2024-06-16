// Tu as un tableau de ventes avec des dates et des montants. Écris une boucle for qui transforme ce tableau en un objet où les clés sont les dates et les valeurs sont les montants totaux des ventes pour chaque date.

let ventes = [
  { date: "2024-05-01", montant: 150 },
  { date: "2024-05-01", montant: 200 },
  { date: "2024-05-02", montant: 100 },
  { date: "2024-05-03", montant: 250 },
  { date: "2024-05-03", montant: 300 },
];

let ventesParDate = {};

for (let i = 0; i < ventes.length; i++) {
  let date = ventes[i].date;
  let montant = ventes[i].montant;
  if (!ventesParDate[date]) {
    ventesParDate[date] = 0;
  }
  ventesParDate[date] += montant;
}

console.log(ventesParDate);
