const produtos = [
  "Mouse",
  "Teclado",
  "Headset",
  "Webcam",
  "Pen drive",
  "Cabo HDMI",
];

const precos = [49.9, 189.9, 229.9, 159.9, 39.9, 29.9];
const vitrine = [];
let total = 0;

for (let i = 0; i < produtos.length; i++) {
  if (precos[i] < 100) {
    vitrine.push(produtos[i]);
    total += precos[i];
  }
}

console.log(`Vitrine (${vitrine.length}): ${vitrine.join(", ")}`);
console.log(`Total: R$ ${total.toFixed(2)}`);
