import Titulo from "./components/Titulo.jsx";
import "./App.css";
import { equipe } from "./dados.js";
import MembroCard from "./components/MembroCard.jsx";

function App() {
  return (
    <>
      <Titulo
        texto="Nossa equipe"
        subtitulo="Grupo do Projeto Integrador · Programador Full Stack"
      />

      <main className="grade">
        {equipe.map((m) => (
          <MembroCard
            key={m.id}
            nome={m.nome}
            papel={m.papel}
            habilidades={m.habilidades}
            lider={m.lider}
          ></MembroCard>
        ))}
      </main>
    </>
  );
}

export default App;
