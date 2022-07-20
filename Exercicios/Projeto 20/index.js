let defNaves = [
  ["Golias", 9, true],
  ["Atlas", 5, true],
  ["Arquimedes", 2, false],
  ["Manain", 15, true],
  ["Marccielo", 2, false],
];

let tripulantes = defNaves
  .filter((nave) => {
    return nave[1] >= 9;
  })
  .map((nave) => {
    return nave[0];
  });

let engate = defNaves.findIndex((element) => {
  return element[2] == false;
});

let caps = defNaves.map((nave) => {
  return nave[0].toUpperCase();
});

console.log(
  "Espaçonaves com 9 ou mais tripulantes: " +
    tripulantes +
    "\nPlataforma com processo de engate:  " +
    engate +
    "\nEspaçonaves destacadas: " +
    caps
);
