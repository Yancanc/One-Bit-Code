let contagemDobra = 0;
let opcaoEscolhida = "";

let nave = prompt("Qual o nome da sua nave?");

opcaoEscolhida = confirm("Deseja fazer uma dobra espacial?");

while (opcaoEscolhida == true) {
  contagemDobra += 1;
  opcaoEscolhida = confirm("Deseja realizar outra dobra?");
}
alert("Sua nave se chama " + nave + " e ela fez " + contagemDobra + " dobras.");
