const nomes = ["Mouse", "Teclado", "Headset", "Webcam", 'Monitor 24"'];
const valores = [49.9, 189.9, 229.9, 159.9, 899.9];

const carrinho = [];
carrinho.push("Headset");
carrinho.push("Mouse");
carrinho.push("Teclado");
carrinho.push("Mouse");
carrinho.push("Impressora");

const pos = carrinho.indexOf("Teclado");
if (pos !== -1) carrinho.splice(pos, 1);

let subtotal = 0;
let itens = 0;

for (const item of carrinho) {
  const p = nomes.indexOf(item);

  if (p === -1) {
    console.log(`Não encontrado: ${item}`);
    continue;
  }

  console.log(`${item} - R$ ${valores[p].toFixed(2)}`);
  subtotal += valores[p];
  itens++;
}

const frete = subtotal >= 500 ? 0 : 29.9;

console.log(`Itens: ${itens} | Subtotal: R$ ${subtotal.toFixed(2)}`);
console.log(`TOTAL: R$ ${(subtotal + frete).toFixed(2)}`);
