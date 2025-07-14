'use client';

import { Produto } from "../../types/produto";


interface Props {
  produto: Produto;
  onAdd: (produto: Produto) => void;
  jaSelecionado: boolean;
}

export default function CardProduto({ produto, onAdd, jaSelecionado }: Props) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={produto.fotos[0]} className="card-img-top" alt={produto.nome} />
      <div className="card-body">
        <h5 className="card-title">{produto.nome}</h5>
        <p className="card-text fw-bold">R$ {produto.preco.toFixed(2)}</p>
        <button
          className="btn btn-primary"
          onClick={() => onAdd(produto)}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}
