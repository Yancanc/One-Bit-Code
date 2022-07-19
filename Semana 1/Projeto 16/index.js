let nomeNave = prompt("Qual o nome  da  sua nave?");
let novoNomeNave = "";
let caracterAlterado = prompt("Qual o caracter que deseja substituir?");
let caracterSubstitutivel = prompt(
  "Qual o caracter que deseja sobrepor ao outro?"
);

for (let i = 0; i < nomeNave.length; i++) {
  if (nomeNave[-i] == caracterAlterado) {
    novoNomeNave += caracterSubstitutivel;
  } else {
    novoNomeNave += nomeNave[-i];
  }
}

alert(
  "Nome  da sua nave é " + nomeNave + " e  seu nome alterado  é " + novoNomeNave
);
