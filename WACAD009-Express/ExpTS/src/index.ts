import express, { Request, Response } from 'express';
import path from 'path';
import { engine } from 'express-handlebars';
import * as helpers from './views/helpers/helpers';



const app = express();

// Configuração do Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', engine({ helpers }));
app.set('view engine', 'handlebars');
app.engine('handlebars', engine({
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

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
  hb1,
  hb2,
  hb3,
};

/*import sass from 'node-sass-middleware';
import path from 'path';
import express, { Request, Response } from 'express';

const app = express();

app.use(
  sass({
    src: path.join(__dirname, '../public/scss'),
    dest: path.join(__dirname, '../public/css'),
    outputStyle: 'compressed',
    prefix: '/css',
  })
);

// Middleware para servir CSS gerado
app.use('/css', express.static(path.join(__dirname, '../public/css')));
*/
