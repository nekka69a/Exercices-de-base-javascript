// Écris une boucle while qui affiche les nombres de 1 à 20, mais qui s'arrête si un multiple de 7 est rencontré.

let nb = 1;

while (nb < 20) {
  if (nb % 7 === 0) {
    console.log(nb);
  }
  nb++;
}
