const pedidos = [450, 620, 520, 1200, 89.9, 499.99, 3599.6];
let faturamento = 0;
let freteGratis = 0;
let maior = pedidos[0];

for (let i = 0; i < pedidos.length; i++) {
  const valor = pedidos[i];
  const frete = valor >= 500 ? 0 : 29.9;

  console.log(
    `Pedido ${i + 1}: R$ ${valor.toFixed(2)} | ${frete === 0 ? "Frete grátis" : "Frete R$ " + frete.toFixed(2)}`,
  );

  faturamento += valor + frete;

  if (frete === 0) freteGratis++;
  if (valor > maior) maior = valor;
}

console.log(`Faturamento: R$ ${faturamento.toFixed(2)}`);
console.log(`Pedidos com frete grátis: ${freteGratis}`);
console.log(`Maior pedido: R$ ${maior.toFixed(2)}`);
