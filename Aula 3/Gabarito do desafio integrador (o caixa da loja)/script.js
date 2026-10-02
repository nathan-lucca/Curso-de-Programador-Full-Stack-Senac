const preco = 899.9;
const quantidade = 4;
const forma = prompt("Digite a forma de pagamento (pix, debito ou credito):");
const parcelas = 1;

const subtotal = preco * quantidade;

let pctQtd;

if (quantidade >= 6) {
  pctQtd = 0.1;
} else if (quantidade >= 3) {
  pctQtd = 0.05;
} else {
  pctQtd = 0;
}

const aposQtd = subtotal - subtotal * pctQtd;

let aposPagamento;

switch (forma) {
  case "pix":
    aposPagamento = aposQtd * 0.95;
    break;
  case "debito":
  case "credito":
    aposPagamento = aposQtd;
    break;
  default:
    aposPagamento = aposQtd;
    console.log("Forma de pagamento inválida");
}

const frete = aposPagamento >= 500 ? 0 : 29.9;
const total = aposPagamento + frete;

console.log(frete === 0 ? "Frete grátis!" : `Frete: R$ ${frete.toFixed(2)}`);
console.log(`TOTAL: R$ ${total.toFixed(2)}`);
