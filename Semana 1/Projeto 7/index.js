alert("Bem-vindo! A seguir pediremos que informe alguns dados. ");
const nome = prompt("Digite seu nome por favor");
let idade = prompt("Digite sua idade por favor");
const confirmacao = confirm("Sua idade é " + idade + " anos");

if (confirmacao === false) {
  idade = prompt("Digite novamente sua idade!");
}

alert("Seu nome é " + nome + "e sua idade é " + idade);
