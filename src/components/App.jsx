import Cartao from "./Cartao";
import Creditos from "./Creditos";

const App = () => {
  const estiloSubtitulo = {
    color: "#6c757d",
    fontSize: "1.1rem",
  };

  const obterAno = () => new Date().getFullYear();

  return (
    <div>
      <h1 className="titulo">
        <i className="pi pi-map-marker mr-2" />
        RolêRadar
      </h1>
      <p style={estiloSubtitulo}>Descubra o que existe perto de você</p>
      <Creditos />
      <Cartao cabecalho="Teste">
        <p>Conteúdo do cartão</p>
      </Cartao>
      <footer>RolêRadar © {obterAno()}</footer>
    </div>
  );
};

export default App;
