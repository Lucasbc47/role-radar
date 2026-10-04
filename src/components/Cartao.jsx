const Cartao = (props) => {
  return (
    <div className="border-1 surface-border border-round mb-3">
      <div className="text-sm text-500 border-bottom-1 surface-border p-2">
        {props.cabecalho}
      </div>
      <div className="p-3">{props.children}</div>
    </div>
  );
};
export default Cartao;
