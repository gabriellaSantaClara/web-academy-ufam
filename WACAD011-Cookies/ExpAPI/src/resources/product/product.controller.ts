import { Request, Response } from 'express';
import { Product } from './product.types';

let products: Product[] = [];
let currentId = 1;

const index = (req: Request, res: Response) => {
  res.json(products);
};

const create = (req: Request, res: Response) => {
  const product: Product = { id: currentId++, ...req.body };
  products.push(product);
  res.status(201).json(product);
};

const read = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  //if (!product) return res.status(404).json({ msg: 'Produto não encontrado' });
  res.json(product);
};

const update = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  //if (index === -1) return res.status(404).json({ msg: 'Produto não encontrado' });
  products[index] = { ...products[index], ...req.body };
  res.json(products[index]);
};

const remove = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  products = products.filter(p => p.id !== id);
  res.status(204).send();
};

export default { index, create, read, update, remove };
