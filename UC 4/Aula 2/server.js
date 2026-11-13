import express from "express";

const app = express(); // criando a aplicação
const PORTA = 3000; // definindo o número da porta

// nossa primeira rota
app.get("/", (req, res) => {
  res.send("Olá, Mundo do Back-End!");
});

const produtos = [
  {
    id: 1,
    nome: "Monitor",
    preco: 1599.99,
    categoria: "Monitores",
  },
  {
    id: 2,
    nome: "Mouse",
    preco: 89.9,
    categoria: "Perifericos",
  },
  {
    id: 3,
    nome: "Teclado",
    preco: 129.99,
    categoria: "Perifericos",
  },
];

// listar produtos
app.get("/produtos", (req, res) => {
  const categoria = req.query.categoria;

  if (categoria.toLowerCase() === "todos") {
    return res.json(produtos);
  }

  const novaLista = produtos.filter(
    (p) => p.categoria.toLowerCase() === categoria.toLowerCase(),
  );

  if (novaLista.length === 0) {
    return res
      .status(404)
      .json({ erro: `Produtos da categoria ${categoria} não encontrados!` });
  }

  return res.json(novaLista);
});

// informações de um produto específico
app.get("/produtos/:id", (req, res) => {
  const id = Number(req.params.id);
  const produto = produtos.find((p) => p.id === id);

  // se não encontrar o produto
  if (!produto) {
    return res.status(404).json({ erro: "Produto não encontrado!" });
  }

  // retornando o produto encontrado
  res.json(produto);
});

const listaHorarios = ["08:00", "08:30", "09:00", "09:30", "10:00"];

app.get("/sobre", (req, res) => {
  res.json({
    nome: "Bartolomias Convertido Store",
    cidade: "Caruaru",
    horarios: listaHorarios,
  });
});

// ouvir nosso servidor
app.listen(PORTA, () => {
  console.log(`Servidor ligado em http://localhost:${PORTA}`);
});
