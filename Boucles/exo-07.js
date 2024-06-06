let nombre;

do {
  nombre = prompt("Saisissez un nombre entre 1 et 10");
} while (nombre < 1 || (nombre > 10 && typeof nombre === "string"));
{
  console.log("Nombre accepté :", nombre);
}
