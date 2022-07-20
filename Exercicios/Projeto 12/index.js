let nome = prompt("Digite seu nome:");
let velo = 0;
let veloGost = prompt("Digite a velocidade desejada para acelereção:");

let confirmacao = confirm(
  "Deseja que a velocidade seja " + veloGost + "km/s mesmo?"
);

if (confirmacao === true) {
  velo = veloGost;
}

if (velo <= 0) {
  alert("Você está parado");
} else if (velo < 40) {
  alert("Você está devagar, aumente mais a velocidade");
} else if (velo >= 40) {
  alert("Otima velocidade, melhor se manter nela");
} else if (velo >= 80) {
  alert("Velocidade alta, considere diminuir");
} else if (velo >= 100) {
  alert("Velocidade  Perigosa, controle automatico forçado");
} else {
  alert("erro");
}

alert("Seu nome é " + nome + " e sua velocidade é de " + velo + "km/s .");
