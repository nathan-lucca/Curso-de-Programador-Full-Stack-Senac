const totalGasto = 4999.99;
let nivel;

if (totalGasto < 0) {
  nivel = "Valor inválido";
} else if (totalGasto >= 5000) {
  nivel = "Ouro";
} else if (totalGasto >= 1000) {
  nivel = "Prata";
} else {
  nivel = "Bronze";
}
