import { useState, useEffect } from "react";

const ENDERECO_VAZIO = { rua: "", bairro: "", cidade: "", uf: "" };

function App() {
  // lista de Estados do BR
  const [estados, setEstados] = useState([]);

  // informações
  const [nome, setNome] = useState("");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState(ENDERECO_VAZIO);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");
  const [clientes, setClientes] = useState([]);

  // 1. Carregar os dados do IBGE quando a tela abrir
  useEffect(() => {
    fetch(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome",
    )
      .then((r) => r.json())
      .then((dados) => setEstados(dados))
      .catch(() => setErro("Não foi possível carregar os estados!"));
  }, []);

  // 2. Quando clicar em "Buscar": consultar o CEP no ViaCEP
  function buscarCep() {
    const numeros = cep.replace(/\D/g, ""); // tira traços e espaços

    if (numeros.length !== 8) {
      setErro("O CEP precisa ter 8 números.");
      return;
    }

    setErro("");
    setCarregando(true);

    fetch(`https://viacep.com.br/ws/${numeros}/json/`)
      .then((r) => r.json())
      .then((dados) => {
        if (dados.erro) {
          setErro("CEP não encontrado!");
          return;
        }

        setEndereco({
          rua: dados.logradouro,
          bairro: dados.bairro,
          cidade: dados.localidade,
          uf: dados.uf,
        });
      })
      .catch(() => setErro("Falha no conexão com a API. Tente novamente!"))
      .finally(() => setCarregando(false));
  }

  // 3. Quando enviar o formulário: salvar o cliente na lista de clientes
  function salvar(evento) {
    evento.preventDefault();

    if (nome === "" || endereco.cidade === "") {
      setErro("Preencha o nome e busque um CEP válido");
      return;
    }

    setClientes([...clientes, { nome, cep, ...endereco }]);
    setNome("");
    setCep("");
    setEndereco(ENDERECO_VAZIO);
    setErro("");
  }

  return (
    <main className="pagina">
      <h1>Cadastro de Clientes</h1>

      <form className="form" onSubmit={salvar}>
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        ></input>

        <label htmlFor="cep">CEP</label>
        <div className="linha">
          <input
            id="cep"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            placeholder="55000-000"
            inputMode="numeric"
          ></input>

          <button type="button" onClick={buscarCep} disabled={carregando}>
            {carregando ? "Buscando..." : "Buscar"}
          </button>
        </div>

        <label htmlFor="rua">Rua</label>
        <input
          id="rua"
          value={endereco.rua}
          onChange={(e) => setEndereco({ ...endereco, rua: e.target.value })}
        ></input>

        <label htmlFor="bairro">Bairro</label>
        <input
          id="bairro"
          value={endereco.bairro}
          onChange={(e) => setEndereco({ ...endereco, bairro: e.target.value })}
        ></input>

        <label htmlFor="cidade">Cidade</label>
        <input
          id="cidade"
          value={endereco.cidade}
          onChange={(e) => setEndereco({ ...endereco, cidade: e.target.value })}
        ></input>
      </form>
    </main>
  );
}

export default App;
