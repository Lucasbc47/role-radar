import { Component } from "react";
import Loading from "./Loading";
import Creditos from "./Creditos";

export default class App extends Component {
  state = {
    latitude: null,
    longitude: null,
    horarioLocalizacao: null,
    mensagemDeErro: null,
  };

  obterLocalizacao = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          horarioLocalizacao: Date.now(),
          mensagemDeErro: null,
        });
      },
      (erro) => {
        console.log(erro);
        this.setState({
          mensagemDeErro:
            "Não foi possível obter sua localização. Libere o acesso no navegador e atualize a página.",
        });
      },
    );
  };

  render() {
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

        {this.state.mensagemDeErro ? (
          <p>{this.state.mensagemDeErro}</p>
        ) : !this.state.latitude ? (
          <Loading mensagem="Aguardando permissão de localização..." />
        ) : (
          <p>
            Localização obtida: {this.state.latitude},{" "}
            {this.state.longitude}
          </p>
        )}
        <footer>RolêRadar © {obterAno()}</footer>
      </div>
    );
  }

  componentDidMount() {
    this.obterLocalizacao();
  }
}
