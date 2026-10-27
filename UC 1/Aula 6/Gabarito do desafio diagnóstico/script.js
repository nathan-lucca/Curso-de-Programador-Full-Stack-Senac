function precoComDesconto(preco, taxa) {
  return preco - preco * taxa;
}

const taxa = 0.15;
console.log(precoComDesconto(49.9, taxa).toFixed(2)); // 42.41
console.log(precoComDesconto(189.9, taxa).toFixed(2)); // 161.42
console.log(precoComDesconto(229.9, taxa).toFixed(2)); // 195.42
