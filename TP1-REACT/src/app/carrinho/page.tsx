'use client';

import { useEffect, useState } from 'react';
import { Produto } from '../../types/produto';

interface ItemCarrinho {
  produto: Produto;
  quantidade: number;
}

export default function CarrinhoPage() {
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([]);

  useEffect(() => {
    const local = localStorage.getItem('carrinho');
    if (local) {
      setCarrinho(JSON.parse(local));
    }
  }, []);

  function remover(id: string) {
  const atualizado = carrinho.map((item) => {
    if (item.produto.id === id) {
      return { ...item, quantidade: item.quantidade - 1 };
    }
    return item;
  }).filter(item => item.quantidade > 0);

  setCarrinho(atualizado);
  localStorage.setItem('carrinho', JSON.stringify(atualizado));
}

  return (
    <div className="card p-3">
      <h5>Produtos selecionados</h5>
      <table className="table table-bordered mt-3">
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
          {carrinho.map((item) => (
            <tr key={item.produto.id}>
              <td>{item.produto.nome}</td>
              <td>R$ {item.produto.preco.toFixed(2)}</td>
              <td>{item.quantidade}</td>
              <td>R$ {(item.produto.preco * item.quantidade).toFixed(2)}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => remover(item.produto.id)}
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
