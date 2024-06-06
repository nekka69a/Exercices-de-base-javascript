// calculatrice simple

const num1 = 4;
const num2 = 10;
let operateur = "*";

if (operateur === "+") {
  console.log(num1 + num2);
} else if (operateur === "-") {
  console.log(num1 - num2);
} else if (operateur === "*") {
  console.log(num1 * num2);
} else if (operateur === "/") {
  console.log(num1 / num2);
} else {
  console.log("Opérateur non valide");
}
