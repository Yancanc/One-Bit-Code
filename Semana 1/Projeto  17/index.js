let spaceshipName = prompt("Qual  o  nome da nave?");
let caracterProibido = prompt("Qual caracter deseja que pare?");
let nomeInvertido = "";

for (let i = spaceshipName.length - 1; i >= 0; i--) {
  if (spaceshipName[i] === caracterProibido) {
    break;
  }
  nomeInvertido += spaceshipName[i];
}

alert("Nome Invertido: " + nomeInvertido);
