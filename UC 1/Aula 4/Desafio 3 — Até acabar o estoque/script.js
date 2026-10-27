let estoque = 50;
let pedidos = 0;

while (estoque >= 7) {
  estoque -= 7;
  pedidos++;

  console.log(`Pedido ${pedidos}: restam ${estoque}`); // extensão
}

console.log(`Pedidos atendidos: ${pedidos} | Sobraram: ${estoque}`);
