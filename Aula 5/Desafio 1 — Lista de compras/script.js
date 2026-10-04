const lista = [];

lista.push("Pen drive 64GB");
lista.push("Cabo HDMI");
lista.push("Mousepad");
lista.pop();
lista.push("Hub USB");

console.log(`Itens: ${lista.length}`);

for (let i = 0; i < lista.length; i++) {
  console.log(`${i + 1}. ${lista[i]}`);
}
