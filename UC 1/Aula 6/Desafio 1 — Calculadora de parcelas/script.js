function parcelar(valor, vezes) {
  return `${vezes}x de R$ ${(valor / vezes).toFixed(2)}`;
}

parcelar(1200, 10);
parcelar(899.9, 3);
parcelar(1200, 12);

// Extensão: 5% de juros no total acima de 6x
function parcelarComJuros(valor, vezes) {
  const total = vezes > 6 ? valor * 1.05 : valor;

  return `${vezes}x de R$ ${(total / vezes).toFixed(2)}`;
}

parcelarComJuros(1200, 12);
parcelarComJuros(1200, 6);
