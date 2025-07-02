import { Request, Response } from 'express';

type Product = {
  id: number;
  name: string;
  price: number;
};

let products: Product[] = [
  { id: 1, name: 'Notebook Acer', price: 1234 },
  { id: 2, name: 'Monitor Dell', price: 2000 },
  { id: 3, name: 'PC Gamer Dell', price: 4000 },
];

let currentId = products.length + 1;

export const index = (req: Request, res: Response) => {
  res.json(products);
};

export const create = (req: Request, res: Response) => {
  const { name, price } = req.body;
  const newProduct = { id: currentId++, name, price };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

export const read = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) return res.status(404).json({ msg: 'Product not found' });
  res.json(product);
};

export const update = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) return res.status(404).json({ msg: 'Product not found' });
  const { name, price } = req.body;
  product.name = name;
  product.price = price;
  res.json(product);
};

export const remove = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ msg: 'Product not found' });
  products.splice(index, 1);
  res.status(204).send();
};