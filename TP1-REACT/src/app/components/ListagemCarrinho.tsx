import { ItemCarrinho } from "../../types/itemCarrinho";

interface Props {
  itens: ItemCarrinho[];
  onRemove: (id: string) => void;
}

export default function ListagemCarrinho({ itens, onRemove }: Props) {
  return (
    <div className="card p-3">
      <h5>Produtos selecionados</h5>
      <table className="table table-bordered table-hover mt-3">
        <thead className="table-light">
          <tr>
            <th>Produto</th>
            <th>Valor Unitário</th>
            <th>Quantidade</th>
            <th>Valor Total</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {itens.map((item) => (
            <tr key={item.id}>
              <td>{item.produto.nome}</td>
              <td>R$ {item.produto.preco.toFixed(2)}</td>
              <td>{item.quantidade}</td>
              <td>R$ {(item.produto.preco * item.quantidade).toFixed(2)}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onRemove(item.id)}
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
