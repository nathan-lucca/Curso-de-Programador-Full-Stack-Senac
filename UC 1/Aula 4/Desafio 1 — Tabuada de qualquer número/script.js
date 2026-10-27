const numero = 9;

for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}

// Extensão 1 (só pares, com continue):
for (let i = 1; i <= 10; i++) {
  if ((numero * i) % 2 !== 0) continue;

  console.log(`${numero} x ${i} = ${numero * i}`);
}

// Extensão 2 (tabuadas de 1 a 10, laço aninhado):
for (let n = 1; n <= 10; n++) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}
