'use client';

import { useEffect, useState } from 'react';
import { Produto } from '../types/produto';
import { produtos } from '../mocks/produtos';
import ListagemProdutos from './components/ListagemProdutos';
import ResumoCarrinho from './components/ResumoCarrinho';

interface ItemCarrinho {
  produto: Produto;
  quantidade: number;
}

export default function HomePage() {
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([]);

  useEffect(() => {
    const local = localStorage.getItem('carrinho');
    if (local) {
      try {
        const carrinhoSalvo = JSON.parse(local);
        setCarrinho(carrinhoSalvo);
      } catch (error) {
        console.error("Erro ao ler localStorage:", error);
        setCarrinho([]);
      }
    }
  }, []); 

  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  }, [carrinho]);

  function adicionarAoCarrinho(produto: Produto) {
    setCarrinho((prev) => {
      const existente = prev.find((p) => p.produto.id === produto.id);
      if (existente) {
        return prev.map((p) =>
          p.produto.id === produto.id
            ? { ...p, quantidade: p.quantidade + 1 }
            : p
        );
      } else {
        return [...prev, { produto, quantidade: 1 }];
      }
    });
  }

  const totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
  const totalPreco = carrinho.reduce((acc, item) => acc + item.quantidade * item.produto.preco, 0);
  const produtosSelecionadosIds = carrinho.map((item) => item.produto.id);

  return (
    <div>
      <ResumoCarrinho totalItens={totalItens} totalPreco={totalPreco} />
      <ListagemProdutos
        produtos={produtos}
        onAdd={adicionarAoCarrinho}
        selecionados={produtosSelecionadosIds}
      />
    </div>
  );
}
