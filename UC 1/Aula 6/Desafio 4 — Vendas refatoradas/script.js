const lojas = ["Centro", "Universitário", "Shopping"];
const vendas = [
  [1200, 1500, 1100, 1800],
  [900, 950, 1300, 1250],
  [2100, 1900, 2400, 2600],
];

function totalDaLoja(linha) {
  return somar(linha);
}

function totalGeral(vendas) {
  let t = 0;
  for (const linha of vendas) t += totalDaLoja(linha);

  return t;
}

function melhorLoja(vendas, lojas) {
  let melhor = 0;

  for (let i = 1; i < vendas.length; i++) {
    if (totalDaLoja(vendas[i]) > totalDaLoja(vendas[melhor])) melhor = i;
  }

  return lojas[melhor];
}
