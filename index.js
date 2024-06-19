const prompt = require('prompt-sync')();
const title = "DESAFIO - CALCULADORA DE PARTIDAS RANKEADAS "
console.log(title)
console.log("----------------------------------")

function winningBalance(victories, defeats) {
  return victories - defeats
}

function validateInputs(input) {
  if (isNaN(input) || input < 0) {
    return true
  } else { return false}
}

while (true) {

  console.log(" ")
  let victories = parseInt(prompt("Vitórias: "))
  
  if (validateInputs(victories)) {
    console.log("Valor incorreto. Tente novamente")
    continue;
  }
  let defeats;
  while(true) {
    defeats = parseInt(prompt("Derrotas: "));

    if (validateInputs(defeats)) {
      console.log("Valor incorreto. Tente novamente")
      continue;
    }
    break;
  }
  let rank = "Imortal"

  switch (Math.ceil(victories/10)) {

    case 0:
    case 1:
      rank = "Ferro";
      break;

    case 2:
      rank = "Bronze";
      break;

    case 3:
    case 4:
    case 5:
      rank = "Prata";
      break;

    case 6:
    case 7:
    case 8:
      rank = "Ouro";
      break;

    case 9:
      rank = "Diamante";
      break;

    case 10:
      rank = "Lendário";
      break;
  }

  console.log("O Herói tem de saldo " + winningBalance(victories, defeats) + " está no rank " + rank);

  let willContinue = prompt("Desejas continuar? (S ou N) ");
  if (willContinue.toLowerCase() == "n") {
    break;
  }
}

