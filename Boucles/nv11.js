// Tu as un tableau d'objets représentant des commandes, chaque commande ayant un tableau de produits. Calcule le montant total de chaque commande et ajoute-le en tant que nouvelle propriété total.

let commandes = [
  {
    id: 1,
    produits: [
      { nom: "Produit A", prix: 30 },
      { nom: "Produit B", prix: 20 },
    ],
  },
  {
    id: 2,
    produits: [
      { nom: "Produit C", prix: 50 },
      { nom: "Produit D", prix: 70 },
    ],
  },
  {
    id: 3,
    produits: [
      { nom: "Produit E", prix: 40 },
      { nom: "Produit F", prix: 60 },
    ],
  },
];
let sommeProduits = 0;
for (let i = 0; i < commandes.length; i++) {
  for (let p = 0; p < commandes[i].produits.length; p++) {
    sommeProduits += commandes[i].produits[p].prix;
  }
}
console.log(sommeProduits);
