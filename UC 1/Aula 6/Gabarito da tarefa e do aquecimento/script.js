// Tarefa: playlist
const lista = ["Lofi", "Rock"];
lista.push("Forró");

const pos = lista.indexOf("Lofi");
if (pos !== -1) lista.splice(pos, 1);

lista.includes("Rock");

for (let i = 0; i < lista.length; i++) {
  console.log(`${i + 1}. ${lista[i]}`);
}

// Aquecimento: fila da assistência técnica
const fila = ["Ana", "Bruno", "Carla"];
fila.push("Diego");

const atendido = fila.shift();
console.log(`Atendido: ${atendido}`);

const p = fila.indexOf("Carla");
if (p !== -1) fila.splice(p, 1);

for (let i = 0; i < fila.length; i++) {
  console.log(`${i + 1}. ${fila[i]}`);
}
