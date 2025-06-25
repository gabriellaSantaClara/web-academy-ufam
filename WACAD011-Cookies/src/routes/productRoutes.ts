import { Router } from 'express';
import * as controller from '../controllers/productController';

const router = Router();

router.get('/products', controller.index);
router.get('/products/:id', controller.show);
router.post('/products', controller.create);
router.put('/products/:id', controller.update);
router.delete('/products/:id', controller.remove);

export default router;
