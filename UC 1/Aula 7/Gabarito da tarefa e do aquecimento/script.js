// Tarefa: o caixa da loja em funções
function calcularTroco(total, pago) {
  return pago - total;
}

function aplicarDesconto(valor, pct) {
  return valor - (valor * pct) / 100;
}

function formatarReal(valor) {
  return `R$ ${valor.toFixed(2)}`;
}

formatarReal(calcularTroco(87.5, 100));
formatarReal(aplicarDesconto(200, 15));

// Aquecimento: preço em dólar
function converterParaDolar(valor, cotacao = 5.5) {
  return `US$ ${(valor / cotacao).toFixed(2)}`;
}

converterParaDolar(550, 5.5);
converterParaDolar(899.9, 5.4);
converterParaDolar(229.9);
