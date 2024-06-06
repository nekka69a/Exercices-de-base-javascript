// Convertir tous les films du tableau en majuscule dans un nouveau tableau avec map

const filmsPreferes = ["Dune", "Titanic", "Forrest Gump"];

const filmsMajuscule = filmsPreferes.map(function (film) {
  return film.toUpperCase();
});
console.log(filmsMajuscule);
