var nome = prompt("Qualo nome da nave?");
var acelerecao = 5;
var velocidade = 0;

menu();

function menu(opcao) {
  var opcao = prompt(
    "Selecione uma das opçães:\n" +
      "1-Acelerar em 5km/s\n" +
      "2-Desacelerar em 5km/s\n" +
      "3-Imprimir os dados de bordo\n" +
      "4-Sair do programa"
  );
  switch (opcao) {
    case "1":
      acelerar();
      break;
    case "2":
      desacelerar();
      break;
    case "3":
      imprimir();
      break;
    case "4":
      sair();
      break;
    default:
      alert("Digite uma opção correta");
      return menu();
  }
  return opcao;
}

function acelerar() {
  velocidade = velocidade + acelerecao;
  alert("Aceleração bem sucedida");
  menu();
}
function desacelerar() {
  if (velocidade <= 0) {
    alert("Você ja esta parado.");
  } else {
    velocidade = velocidade - acelerecao;
    alert("Desaceleração bem sucedida.");
  }
  menu();
}
function imprimir() {
  alert("A nave " + nome + " esta  com a velocidade de " + velocidade + "km/s");
  menu();
}
function sair() {
  alert("Você  saiu do programa.");
}
