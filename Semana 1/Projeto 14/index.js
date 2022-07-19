let distanciaLy = prompt("Digite a distancia em anos-luz:");
let opcaoDistancia = prompt(
  "Escolha uma opcao de conversao valida:\n1-Parsec (pc);\n2-Unidade astronômica(AU);\n3-Quilômetros (km);"
);
let conversao;
let valorConvertido;
switch (opcaoDistancia) {
  case "1":
    conversao = "Parsec";
    valorConvertido = distanciaLy * 0.306601;
    break;
  case "2":
    conversao = "Unidade astronômica";
    valorConvertido = distanciaLy * 63241.1;
    break;
  case "3":
    conversao = "Quilômetro";
    valorConvertido = distanciaLy * Math.pow(10, 12) * 9.5;
    break;
  default:
    conversao = "Não identificada";
    valorConvertido = "Conversão fora do escopo";
}

alert(
  "Distancia em Anos-luz: " +
    distanciaLy +
    "\n" +
    conversao +
    ": " +
    valorConvertido
);
