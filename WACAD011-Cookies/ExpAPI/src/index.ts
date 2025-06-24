import express from 'express';
import router from './router/v1Router';

const app = express();
app.use(express.json());
app.use('/v1', router);

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
