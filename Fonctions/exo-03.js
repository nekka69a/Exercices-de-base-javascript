// Fonction multiplier et calcularice simple

function multiplier(nombre1, nombre2) {
  return nombre1 * nombre2;
}

function calculatriceSimple(nombre1, nombre2, operateur) {
  if (operateur === "*") {
    console.log(multiplier(nombre1, nombre2));
  }
}

calculatriceSimple(5, 7, "*");
