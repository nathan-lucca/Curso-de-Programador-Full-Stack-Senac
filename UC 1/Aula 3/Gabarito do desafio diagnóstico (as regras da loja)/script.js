const valorCompra = 520;
const pagamento = "pix";

let valorFinal = valorCompra;

if (pagamento === "pix") {
  valorFinal = valorFinal * 0.95;
}

const frete = valorFinal >= 500 ? 0 : 29.9;
console.log(`Total: R$ ${(valorFinal + frete).toFixed(2)}`);
