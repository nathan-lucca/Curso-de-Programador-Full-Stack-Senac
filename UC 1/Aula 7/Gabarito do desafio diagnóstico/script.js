const nomes = ["Mouse", "Teclado", "Headset", "Webcam"];
const valores = [49.9, 189.9, 229.9, 159.9];
const estoques = [15, 8, 4, 0];

// 1. Ficha do Headset
const i = nomes.indexOf("Headset");
console.log(nomes[i], valores[i], estoques[i]); // Headset 229.9 4

// 2. Cadastrar: um push em cada array
nomes.push("SSD 480GB");
valores.push(279.9);
estoques.push(7);

// 3. Remover: o splice precisa ser feito nos TRÊS arrays
const p = nomes.indexOf("Teclado");

if (p !== -1) {
  nomes.splice(p, 1);
  valores.splice(p, 1);
  estoques.splice(p, 1);
}
// Armadilha: removendo só de nomes, o Headset passa para a posição 1
// e aparece com o preço do Teclado (189.9).

// 4. Um produto numa variável só
const produto = { nome: "Headset", preco: 229.9, estoque: 4 };
