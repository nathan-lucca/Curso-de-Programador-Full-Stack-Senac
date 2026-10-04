const lojas = ["Centro", "Universitário", "Shopping"];
const vendas = [
  [1200, 1500, 1100, 1800],
  [900, 950, 1300, 1250],
  [2100, 1900, 2400, 2600],
];

let totalGeral = 0;
let melhorLoja = "";
let melhorTotal = 0;

for (let l = 0; l < vendas.length; l++) {
  let totalLoja = 0; // zera a cada loja

  for (let s = 0; s < vendas[l].length; s++) {
    totalLoja += vendas[l][s];
  }

  console.log(`${lojas[l]}: R$ ${totalLoja}`);

  totalGeral += totalLoja;

  if (totalLoja > melhorTotal) {
    melhorTotal = totalLoja;
    melhorLoja = lojas[l];
  }
}
