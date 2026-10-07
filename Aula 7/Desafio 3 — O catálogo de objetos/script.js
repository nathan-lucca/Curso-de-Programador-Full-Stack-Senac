const catalogo = [
  new Produto("Mouse", 49.9, 15),
  new Produto("Teclado", 189.9, 8),
  new Produto("Headset", 229.9, 4),
  new Produto("Webcam", 159.9, 0),
  new Produto('Monitor 24"', 899.9, 3),
];

function buscarPorNome(lista, nome) {
  for (const p of lista) if (p.nome === nome) return p;

  return null;
}

function contarDisponiveis(lista) {
  let c = 0;
  for (const p of lista) if (p.estaDisponivel()) c++;

  return c;
}

function valorEmEstoque(lista) {
  let t = 0;
  for (const p of lista) t += p.preco * p.estoque;

  return t;
}

buscarPorNome(catalogo, "Webcam").preco;
buscarPorNome(catalogo, "SSD");
contarDisponiveis(catalogo);
valorEmEstoque(catalogo).toFixed(2);
