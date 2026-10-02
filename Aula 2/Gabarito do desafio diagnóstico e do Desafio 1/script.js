const produto = "Teclado";
const preco = 189.9;
const quantidade = 3;
const desconto = 10; // em %

const subtotal = preco * quantidade;
const valorDesconto = subtotal * (desconto / 100);
const total = subtotal - valorDesconto;

console.log(
  `Produto: ${produto} | Qtd: ${quantidade} | Total: R$ ${total.toFixed(2)}`,
);
