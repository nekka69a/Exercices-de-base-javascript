// Utilise la méthode map pour créer un nouveau tableau où chaque nombre est élevé au carré.

let nombres = [1, 2, 3, 4, 5];

const nombreCarre = nombres.map((nombre) => {
  return nombre * nombre;
});

console.log(nombreCarre);
