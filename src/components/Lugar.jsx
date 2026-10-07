import Cartao from "./Cartao";

const formatarDistancia = (distancia) => {
  if (distancia < 1000) {
    return `a ${Math.round(distancia)} m`;
  }
  distancia = distancia / 1000;
  return `a ${distancia.toFixed(1).replace(".", ",")} km`;
};

const estiloCirculo = {
  width: "2.5rem",
  height: "2.5rem",
  borderRadius: "50%",
  backgroundColor: "#1565c0",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  flexShrink: 0,
};

const Lugar = ({ numero, nome, endereco, distancia }) => {
  return (
    <Cartao cabecalho={formatarDistancia(distancia)}>
      <div className="flex align-items-center gap-3">
        <div style={estiloCirculo}>{numero}</div>
        <div>
          <div className="font-bold">{nome ? nome : "Sem nome"}</div>
          <div className="text-sm text-600">{endereco}</div>
        </div>
      </div>
    </Cartao>
  );
};

export default Lugar;
