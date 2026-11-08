// REVISÃO RÁPIDA DA UC1 — veja o resultado no Console (F12)

// 1. Variáveis: const (não muda) e let (pode mudar)
const loja = 'TechCaruaru';
let clientes = 10;
clientes = clientes + 1;
console.log(`A ${loja} atendeu ${clientes} clientes hoje.`);

// 2. Tipos
console.log(typeof 'texto', typeof 42, typeof true, typeof [1, 2], typeof { a: 1 });

// 3. Cuidado: texto + número junta, não soma!
console.log('5' + 3);          // "53"
console.log(Number('5') + 3);  // 8

// 4. Função
function calcularTotal(preco, quantidade) {
  return preco * quantidade;
}
console.log('Total:', calcularTotal(89.9, 2));

// 5. Função de seta (arrow function): o mesmo, escrito mais curto
const comDesconto = (valor) => valor * 0.9;
console.log('Com 10% de desconto:', comDesconto(100));

// 6. Objeto: um "cadastro" com propriedades
const produto = { nome: 'Mouse', preco: 89.9, emEstoque: true };
console.log(produto.nome, produto.preco);

// 7. Array de objetos + percorrer com for...of
const carrinho = [
  { nome: 'Mouse', preco: 89.9 },
  { nome: 'Teclado', preco: 249.9 },
];
let soma = 0;
for (const item of carrinho) {
  soma = soma + item.preco;
}
console.log(`Carrinho: ${carrinho.length} itens, R$ ${soma.toFixed(2)}`);

// EXPERIMENTE: adicione um Monitor de 799 ao carrinho e veja o total mudar.
