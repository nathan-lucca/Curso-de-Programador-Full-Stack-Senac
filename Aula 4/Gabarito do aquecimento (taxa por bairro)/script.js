const bairro = prompt("Digite o bairro de entrega (Centro, Maurício de Nassau, Universitário ou Indianópolis):");
let taxa;

switch (bairro) {
  case "Centro":
    taxa = 5;
    break;
  case "Maurício de Nassau":
  case "Universitário":
    taxa = 8;
    break;
  case "Indianópolis":
    taxa = 10;
    break;
  default:
    taxa = 15;
}

console.log(`Taxa de entrega: R$ ${taxa.toFixed(2)}`);
