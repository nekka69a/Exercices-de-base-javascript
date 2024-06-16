// Tu as un tableau de produits avec leurs catégories. Écris une boucle for qui groupe les produits par catégorie dans un nouvel objet.

let produits = [
  { nom: "Produit A", categorie: "Électronique" },
  { nom: "Produit B", categorie: "Maison" },
  { nom: "Produit C", categorie: "Électronique" },
  { nom: "Produit D", categorie: "Jardin" },
  { nom: "Produit E", categorie: "Maison" },
];

let produitsParCategorie = {};

for (let i = 0; i < produits.length; i++) {
  let categorie = produits[i].categorie;
  if (!produitsParCategorie[categorie]) {
    produitsParCategorie[categorie] = [];
  }
  produitsParCategorie[categorie].push(produits[i].nom);
}

console.log(produitsParCategorie);
