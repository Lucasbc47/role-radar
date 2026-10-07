import { Component } from "react";
import geoapifyClient from "../utils/geoapifyClient";

import Loading from "./Loading";
import Creditos from "./Creditos";
import Cartao from "./Cartao";
import MeuPonto from "./MeuPonto";
import Busca from "./Busca";

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

  onBuscaRealizada = async (categoria, raio) => {
    const { latitude, longitude } = this.state;
    const resultado = await geoapifyClient.get("/places", {
      params: {
        categories: categoria,
        filter: `circle:${longitude},${latitude},${raio}`,
        bias: `proximity:${longitude},${latitude}`,
        limit: 20,
      },
    });
    console.log(resultado.data.features);
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
          <div>
            <Cartao cabecalho="Você está aqui">
              <MeuPonto
                latitude={this.state.latitude}
                longitude={this.state.longitude}
                horarioLocalizacao={this.state.horarioLocalizacao}
                onAtualizar={this.obterLocalizacao}
              />
            </Cartao>

            <Cartao cabecalho="O que você procura?">
              <Busca onBuscaRealizada={this.onBuscaRealizada} />
            </Cartao>
          </div>
        )}
        <footer>RolêRadar © {obterAno()}</footer>
      </div>
    );
  }

  componentDidMount() {
    this.obterLocalizacao();
  }
}
