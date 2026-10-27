const cliente = "TechSolutions Ltda";
const qtdMaquinas = 5;
const processador = 899.9;
const ram = 289.9;
const ssd = 349.9;
const fonte = 279.9;
const gabinete = 199.9;
const descontoAcima3 = 0.08;
const frete = 150.0;

const custoPorMaquina = processador + ram + ssd + fonte + gabinete;
const subtotal = custoPorMaquina * qtdMaquinas;
const temDesconto = qtdMaquinas > 3;
const valorDesconto = subtotal * descontoAcima3 * Number(temDesconto);
const totalFinal = subtotal - valorDesconto + frete;

console.log(`ORÇAMENTO — ${cliente}`);
console.log(`Custo por máquina: R$ ${custoPorMaquina.toFixed(2)}`);
console.log(`Subtotal: R$ ${subtotal.toFixed(2)}`);
console.log(`Desconto (8%): -R$ ${valorDesconto.toFixed(2)}`);
console.log(`Frete: +R$ ${frete.toFixed(2)}`);
console.log(`TOTAL FINAL: R$ ${totalFinal.toFixed(2)}`);
