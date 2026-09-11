function Cabecalho({ titulo, subtitulo }) {
  return (
    <header className="cabecalho">
      <h1>{titulo}</h1>
      <p>{subtitulo}</p>
    </header>
  );
}

export default Cabecalho;