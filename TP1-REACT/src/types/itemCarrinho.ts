export interface ItemCarrinho {
  id: string;
  produto: {
    id: string;
    nome: string;
    preco: number;
    foto: string;
  };
  quantidade: number;
}
