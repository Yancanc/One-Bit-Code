let data = prompt("Digite a data de partida: (formatação DD/MM/YYYY)");
let dataConverter = moment(data, "DD/MM/YYYY");
let hoje = moment();

let dataDif = hoje - dataConverter;

let escolhaOpcao = prompt(
  "Escolha como gostaria de exibir o tempo de partida\n1-Segundos\n2-Minutos\n3-Horas\n4-Dias"
);

if (escolhaOpcao == 1) {
  let seg = Math.round(dataDif / 1000);
  alert("O tempo de partida são " + seg + " segundos");
} else if (escolhaOpcao == 2) {
  let min = Math.round(dataDif / 1000 / 60);
  alert("O tempo de partida são " + min + " minutos");
} else if (escolhaOpcao == 3) {
  let hrs = Math.round(dataDif / 1000 / 3600);
  alert("O tempo de partida são " + hrs + " horas");
} else if (escolhaOpcao == 4) {
  let dias = Math.round(dataDif / 1000 / 3600 / 24);
  alert("O tempo de partida são " + dias + " dias");
}
