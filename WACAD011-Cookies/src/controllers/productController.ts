import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const index = async (req: Request, res: Response) => {
  const products = await prisma.product.findMany();
  res.json(products);
};

export const show = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
};

export const create = async (req: Request, res: Response) => {
  const { name, description, price } = req.body;
  const product = await prisma.product.create({
    data: { name, description, price: Number(price) },
  });
  res.status(201).json(product);
};

export const update = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { name, description, price } = req.body;
  try {
    const product = await prisma.product.update({
      where: { id },
      data: { name, description, price: Number(price) },
    });
    res.json(product);
  } catch {
    res.status(404).json({ message: 'Product not found' });
  }
};

export const remove = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    await prisma.product.delete({ where: { id } });
    res.status(204).send();
  } catch {
    res.status(404).json({ message: 'Product not found' });
  }
};
