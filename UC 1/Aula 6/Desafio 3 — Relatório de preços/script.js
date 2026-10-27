const precos = [49.9, 189.9, 229.9, 159.9, 39.9];

function somar(lista) {
  let total = 0;
  for (const v of lista) total += v;

  return total;
}

function maiorPreco(lista) {
  let maior = lista[0]; // não começar com 0
  for (const v of lista) if (v > maior) maior = v;

  return maior;
}

function media(lista) {
  return somar(lista) / lista.length; // função chamando função
}

function contarAbaixo(lista, limite) {
  let c = 0;
  for (const v of lista) if (v < limite) c++;

  return c;
}

maiorPreco(precos);
media(precos).toFixed(2);
contarAbaixo(precos, 100);
contarAbaixo(precos, 200);
