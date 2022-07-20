let nomeMv = prompt("Digite a seu nome. (Mais Velho)");
let idadeMv = prompt("Digite a sua idade. (Mais Velho)");
let nomeMn = prompt("Digite o seu nome. (Mais Novo)");
let idadeMn = prompt("Digite a sua idade.(Mais Novo)");

let dif = idadeMv - idadeMn;

alert(
  "O nome da pessoa mais velha é " +
    nomeMv +
    " e sua respectiva idade é " +
    idadeMv +
    " anos.\nO nome da pessoa mais nova é " +
    nomeMn +
    " e sua  respectiva idade é " +
    idadeMn +
    " anos.\nA diferença de idade entre ambos é de " +
    dif +
    " anos"
);
