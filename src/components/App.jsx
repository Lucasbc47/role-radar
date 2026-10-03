const App = () => {
  const estiloSubtitulo = {
    color: "#6c757d",
    fontSize: "1.1rem",
  };

  const obterAno = () => new Date().getFullYear();

  return (
    <div>
      <h1 className="titulo">RolêRadar</h1>
      <p style={estiloSubtitulo}>Descubra o que existe perto de você</p>
      <footer>RolêRadar © {obterAno()}</footer>
    </div>
  );
};

export default App;
