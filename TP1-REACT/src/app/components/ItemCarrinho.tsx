'use client';

import { ItemCarrinho } from "../../types/itemCarrinho";


interface Props {
  item: ItemCarrinho;
  onRemove: (id: string) => void;
}

export default function ItemCarrinhoComponent({ item, onRemove }: Props) {
  return (
    <div className="card mb-3" style={{ maxWidth: '500px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={item.produto.foto}
            className="img-fluid rounded-start"
            alt={item.produto.nome}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.produto.nome}</h5>
            <p className="card-text">Quantidade: {item.quantidade}</p>
            <p className="card-text">
              Subtotal: R$ {(item.quantidade * item.produto.preco).toFixed(2)}
            </p>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => onRemove(item.id)}
            >
              Remover
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
