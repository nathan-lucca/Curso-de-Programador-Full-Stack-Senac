const forma = prompt("Digite a forma de pagamento (pix, debito ou credito):");
const valor = 1000;
const parcelas = 10;

let mensagem;

switch (forma) {
  case "pix":
    mensagem = `Pix: R$ ${(valor * 0.95).toFixed(2)} (5% de desconto)`;
    break;
  case "debito":
    mensagem = `Débito: R$ ${valor.toFixed(2)}`;
    break;
  case "credito":
    mensagem =
      parcelas > 6
        ? "Parcelamento máximo: 6x sem juros"
        : `Crédito: ${parcelas}x de R$ ${(valor / parcelas).toFixed(2)}`;
    break;
  default:
    mensagem = "Forma de pagamento inválida";
}
