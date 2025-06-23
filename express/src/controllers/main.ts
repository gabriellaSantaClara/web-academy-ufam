// src/controllers/main.ts
import { Request, Response } from 'express';

const lorem = (req: Request, res: Response) => {
  const qtd = parseInt(req.params.qtd || '1');
  const texto = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;
  const paragrafos = Array(qtd).fill(texto);

  res.render('main/lorem', { paragrafos });
};
const hb1 = (req: Request, res: Response) => {
  res.render('main/hb1', {
    mensagem: 'Olá, você está aprendendo Express + HBS!',
  });
};

const hb2 = (req: Request, res: Response) => {
  res.render('main/hb2', {
    poweredByNodejs: true,
    name: 'Express',
    type: 'Framework',
  });
};

const hb3 = (req: Request, res: Response) => {
  const profes = [
    { nome: 'David Fernandes', sala: 1238 },
    { nome: 'Horácio Fernandes', sala: 1233 },
    { nome: 'Edleno Moura', sala: 1236 },
    { nome: 'Elaine Harada', sala: 1231 },
  ];
  res.render('main/hb3', { profes });
};


export default {
  lorem, hb1, hb2, hb3
};
