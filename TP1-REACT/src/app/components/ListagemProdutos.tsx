import { Produto } from '../../types/produto';
import CardProduto from './CardProduto';

interface Props {
  produtos: Produto[];
  onAdd: (produto: Produto) => void;
  selecionados: string[];
}

export default function ListagemProdutos({ produtos, onAdd, selecionados }: Props) {
  return (
    <div className="d-flex flex-wrap gap-3">
      {produtos.map((p) => (
        <CardProduto
          key={p.id}
          produto={p}
          onAdd={onAdd}
          jaSelecionado={selecionados.includes(p.id)}
        />
      ))}
    </div>
  );
}
