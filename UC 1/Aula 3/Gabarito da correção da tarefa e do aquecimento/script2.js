const valor = 1299;
const parcela6x = valor / 6;
const taxa = 0.0199;
const total10x = valor * (1 + taxa * 10);
const parcela10x = total10x / 10;

console.log(`6x de R$ ${parcela6x.toFixed(2)}`);
console.log(`10x de R$ ${parcela10x.toFixed(2)}`);
