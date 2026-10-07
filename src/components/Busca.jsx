import { Component } from "react";
import { Button } from "@primereact/ui/button";
import { InputText } from "@primereact/ui/inputtext";

const categorias = [
  { rotulo: "Cafés", chave: "catering.cafe" },
  { rotulo: "Restaurantes", chave: "catering.restaurant" },
  { rotulo: "Parques", chave: "leisure.park" },
  { rotulo: "Farmácias", chave: "healthcare.pharmacy" },
  { rotulo: "Supermercados", chave: "commercial.supermarket" },
  { rotulo: "Museus", chave: "entertainment.museum" },
];
export default class Busca extends Component {
  state = {
    categoria: null,
    raio: "1000",
    erro: null,
  };

  onRaioAlterado = (evento) => {
    this.setState({ raio: evento.target.value });
  };

  onFormSubmit = (evento) => {
    this.setState({ erro: null });
    evento.preventDefault();
    if (!this.state.categoria) {
      this.setState({ erro: "Escolha uma categoria." });
      return;
    }
    const raio = Number(this.state.raio);

    if (!Number.isInteger(raio) || raio < 100 || raio > 5000) {
      this.setState({
        erro: "Informe um raio inteiro entre 100 e 5000 metros.",
      });
      return;
    }
    this.props.onBuscaRealizada(this.state.categoria, raio);
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="flex flex-column">
          <div className="flex flex-wrap gap-2">
            {categorias.map((categoria) => (
              <Button
                type="button"
                key={categoria.chave}
                className={
                  this.state.categoria === categoria.chave
                    ? ""
                    : "bg-transparent text-primary"
                }
                onClick={() => this.setState({ categoria: categoria.chave })}
              >
                {categoria.rotulo}
              </Button>
            ))}
          </div>
          <InputText
            value={this.state.raio}
            pt-root-onChange={this.onRaioAlterado}
            className="w-full mt-3"
            pt-root-placeholder={this.props.dica}
          />
          <Button type="submit" className="mt-3">
            <i className="pi pi-search mr-2" />
            Buscar
          </Button>
          {this.state.erro && <p className="text-red-500">{this.state.erro}</p>}
        </div>
      </form>
    );
  }
}

Busca.defaultProps = {
  dica: "Raio em metros (100 a 5000)",
};
