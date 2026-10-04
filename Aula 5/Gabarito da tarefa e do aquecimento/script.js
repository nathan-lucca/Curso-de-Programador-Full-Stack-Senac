// Contagem regressiva
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

console.log("Feliz Ano Novo!");

// Soma de 1 a 100
let soma = 0;
for (let n = 1; n <= 100; n++) soma += n;
console.log(soma); // 5050  (atalho: 50 pares de 101 → 50 × 101)

// Aquecimento: produtos abaixo de R$ 100
const precos = [89.9, 149.9, 59.9, 249.9, 99.9, 35.0, 100.0];
let baratos = 0;

for (const p of precos) {
  if (p < 100) baratos++;
}

console.log(baratos);
