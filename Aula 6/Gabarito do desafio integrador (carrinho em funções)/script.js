const nomes = ["Mouse", "Teclado", "Headset", "Webcam", 'Monitor 24"'];
const valores = [49.9, 189.9, 229.9, 159.9, 899.9];

function adicionar(carrinho, item) {
  carrinho.push(item);
}

function remover(carrinho, item) {
  const pos = carrinho.indexOf(item);
  if (pos === -1) return false; // não apaga o último por engano

  carrinho.splice(pos, 1);

  return true;
}

function calcularSubtotal(carrinho) {
  let total = 0;

  for (const item of carrinho) {
    const p = nomes.indexOf(item);

    if (p !== -1) total += valores[p]; // ignora o que não está no catálogo
  }

  return total;
}

function calcularFrete(subtotal) {
  return subtotal >= 500 ? 0 : 29.9;
}

const carrinho = [];
for (const item of ["Headset", "Mouse", "Teclado", "Mouse", "Impressora"]) {
  adicionar(carrinho, item);
}

console.log(remover(carrinho, "Teclado")); // true
console.log(remover(carrinho, "Monitor")); // false

const subtotal = calcularSubtotal(carrinho);
const frete = calcularFrete(subtotal);

console.log(`Subtotal: R$ ${subtotal.toFixed(2)}`); // 329.70
console.log(`Frete: R$ ${frete.toFixed(2)}`); // 29.90
console.log(`TOTAL: R$ ${(subtotal + frete).toFixed(2)}`);
