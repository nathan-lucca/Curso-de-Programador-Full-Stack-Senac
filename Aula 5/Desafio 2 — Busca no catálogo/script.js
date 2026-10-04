const catalogo = ["Mouse", "Teclado", "Headset", "Webcam", "Monitor", "SSD"];
const busca = "Webcam";
const pos = catalogo.indexOf(busca);

console.log(pos === -1 ? "Não encontrado" : `Encontrado na posição ${pos}`);


// Extensão: ignorando maiúsculas, com for
let achou = -1;

for (let i = 0; i < catalogo.length; i++) {
  if (catalogo[i].toLowerCase() === busca.toLowerCase()) {
    achou = i;
    break;
  }
}
