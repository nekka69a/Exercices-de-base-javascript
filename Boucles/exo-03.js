// Factorielle: boucle for qui calcule la factorielle d'un nombre donné (5!=5*4*3*2*1)

let nombre = 5;
let factorielle = 1;

for (let i = 1; i <= nombre; i++) {
  factorielle *= i;
}
console.log("la factorielle du nombre", nombre, "vaut :", factorielle);
