let total = 0;
let acimaDaMeta = 0;
let melhor = vendasMes[0];
let mesMelhor = 1;

for (let i = 0; i < vendasMes.length; i++) {
  total += vendasMes[i];

  if (vendasMes[i] >= 4000) acimaDaMeta++;
  if (vendasMes[i] > melhor) {
    melhor = vendasMes[i];
    mesMelhor = i + 1;
  }
}

console.log(`Total: R$ ${total}`);
console.log(`Média: R$ ${(total / 12).toFixed(2)}`);
console.log(`Meses com R$ 4.000 ou mais: ${acimaDaMeta}`);
console.log(`Melhor mês: ${mesMelhor} (R$ ${melhor})`);
