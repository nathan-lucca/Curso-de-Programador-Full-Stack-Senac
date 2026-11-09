function Titulo({ texto, subtitulo }) {
  return (
    <header className="titulo">
      <h1>{texto}</h1>
      <p>{subtitulo}</p>
    </header>
  );
}

export default Titulo;
