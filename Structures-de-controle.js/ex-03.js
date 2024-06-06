let annee = 2020;

if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
  console.log("Année bisextile");
} else {
  console.log("Année non bisextile");
}

annee = 2015;

if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
  console.log("Année bisextile");
} else {
  console.log("Année non bisextile");
}
