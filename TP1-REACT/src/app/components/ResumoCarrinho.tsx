interface Props {
  totalItens: number;
  totalPreco: number;
}

export default function ResumoCarrinho({ totalItens, totalPreco }: Props) {
  return (
    <div className="alert alert-info d-flex justify-content-between">
      <span>Itens no carrinho: {totalItens}</span>
      <span>Total: R$ {totalPreco.toFixed(2)}</span>
    </div>
  );
}
