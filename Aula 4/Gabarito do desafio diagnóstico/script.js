for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}

const vendasMes = [
  3200, 2800, 4100, 3900, 2500, 3100, 4500, 3800, 2900, 5200, 6100, 7400,
];

let total = 0;

for (let i = 0; i < vendasMes.length; i++) {
  total += vendasMes[i];
}

console.log(total);
