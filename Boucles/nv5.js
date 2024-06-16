// Écris une boucle for qui parcourt un tableau de nombres et double chaque valeur, en stockant les résultats dans un nouveau tableau.

let nombres = [1, 2, 3, 4, 5];
let result = [];

//parcourir le tableau nombre

nombres.forEach((nombre) => {
  result.push(nombre * 2);
});

console.log(result);

//sortie result= [2,4,6,8,10]

const resultWithMap = nombres.map((nombre) => nombre * 2);
console.log("with map", resultWithMap);
