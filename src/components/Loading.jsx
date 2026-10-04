import { Component } from "react";

export default class Loading extends Component {
  render() {
    return (
      <div className="flex flex-column justify-content-center align-items-center p-3">
        <i
          style={{ fontSize: "2rem" }}
          className="pi pi-spin pi-spinner text-primary"
        />

        <p className="mt-3 text-primary">{this.props.mensagem}</p>
      </div>
    );
  }
}

Loading.defaultProps = {
  mensagem: "Carregando...",
};
