import { Component } from "react";
import { Button } from "@primereact/ui/button";
import { GEOAPIFY_KEY } from "../utils/chaves.js";

export default class MeuPonto extends Component {
  state = {
    agora: Date.now(),
  };
  timer = null;

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        agora: Date.now(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("MeuPonto removido");
  }

  obterUrl = (latitude, longitude) => {
    return `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=300&center=lonlat:${longitude},${latitude}&zoom=16&marker=lonlat:${longitude},${latitude};color:%23d32f2f;size:48&apiKey=${GEOAPIFY_KEY}`;
  };

  render() {
    const { longitude, latitude, horarioLocalizacao, onAtualizar } = this.props;
    const segundos = Math.floor((this.state.agora - horarioLocalizacao) / 1000);

    return (
      <div className="flex flex-column gap-3">
        <img
          src={this.obterUrl(latitude, longitude)}
          alt="Mapa da sua localização"
          className="w-full border-round-lg shadow-1"
        />
        <p className="m-0 font-semibold text-800">
          Latitude: {latitude.toFixed(4)} | Longitude: {longitude.toFixed(4)}
        </p>
        <p className="m-0 text-700">
          {latitude < 0 ? "Hemisfério Sul" : "Hemisfério Norte"}
        </p>
        <p className="m-0 text-sm text-600">
          Localização obtida há {segundos} s
        </p>
        <Button onClick={onAtualizar} className="mt-1 w-full">
          <i className="pi pi-refresh mr-2" />
          Atualizar localização
        </Button>
      </div>
    );
  }
}
