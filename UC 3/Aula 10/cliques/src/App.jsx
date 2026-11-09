import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [cliques, setCliques] = useState(0);
  const [nome, setNome] = useState("");
  const [carrinho, setCarrinho] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    fetch("./produtos.json")
      .then((r) => {
        if (!r.ok) {
          throw new Error("Falha ao carregar os dados");
        }

        r.json();
      })
      .then((dados) => setProdutos(dados))
      .catch((erro) =>
        setErro("Ocorreu um erro ao carregar os dados do produtos.json!"),
      )
      .finally(() => setCarregando(false));
  }, []);

  return (
    <>
      <h1>Contador</h1>
      <button onClick={() => setCliques(cliques + 1)}>Cliques {cliques}</button>

      <h1>Meu nome é: {nome}</h1>
      <input onChange={(e) => setNome(e.target.value)}></input>

      <h1>Quantidade de Itens no Carrinho: {carrinho.length}</h1>
      <button onClick={() => setCarrinho([...carrinho, "Teclado Gamer"])}>
        Adicionar Item
      </button>

      <ul>
        {carrinho.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>

      {carregando && <p>Carregando produtos...</p>}
      {erro && <p>Erro: {erro}</p>}

      <ul>
        {produtos.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
