const valorCompra = 499.99;
let frete;

if (valorCompra >= 500) {
  frete = 0;
} else {
  frete = 29.9;
}

console.log(
  `Compra: R$ ${valorCompra} | Frete: R$ ${frete} | Total: R$ ${(valorCompra + frete).toFixed(2)}`,
);
