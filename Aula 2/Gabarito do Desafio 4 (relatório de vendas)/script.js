const vendas = [1200, 850, 2100, 950, 1800, 600, 3200];
const dias = vendas.length;
const maior = Math.max(...vendas);
const menor = Math.min(...vendas);
const total =
  vendas[0] +
  vendas[1] +
  vendas[2] +
  vendas[3] +
  vendas[4] +
  vendas[5] +
  vendas[6];
const media = total / dias;
const algumAcima = maior > 2000;
