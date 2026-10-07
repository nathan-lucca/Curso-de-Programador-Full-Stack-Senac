function classificarEstoque(qtd) {
  if (qtd < 0) return "Inválido"; // extensão: vem primeiro
  if (qtd === 0) return "Esgotado";
  if (qtd <= 5) return "Baixo";

  return "Normal";
}

for (const q of [0, 3, 5, 6, 40]) {
  console.log(`${q}: ${classificarEstoque(q)}`);
}
