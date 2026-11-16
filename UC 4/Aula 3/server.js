import express from "express";
import { Catalogo } from "./models/Catalogo.js";

const app = express();
const PORTA = 3000;

app.use(express.json()); // permite ler o conteúdo do req.body

// criar um novo catálogo
const catalogo = new Catalogo();
catalogo.adicionar("X-Tudo", 39.9, "Hamburguer", 10);
catalogo.adicionar("Coxinha", 19.9, "Salgados", 0);

// método GET
app.get("/", (req, res) => {
  res.send("API do Cardápio funcionando!");
});

// rota de listar produtos
app.get("/produtos", (req, res) => {
  res.json(catalogo.listar());
});

// rota de listar produtos disponíveis
app.get("/produtos/disponiveis", (req, res) => {
  res.json(catalogo.disponiveis());
});

// rota para buscar produto pelo id
app.get("/produtos/:id", (req, res) => {
  const produto = catalogo.buscarPorId(Number(req.params.id));

  if (!produto) {
    // 404 = NOT_FOUND (Não Encontrado)
    return res.status(404).json({ erro: "Produto não encontrado!" });
  }

  res.json(produto);
});

app.listen(PORTA, () => {
  console.log(`Servidor rodando na URL: http://localhost:${PORTA}`);
});
