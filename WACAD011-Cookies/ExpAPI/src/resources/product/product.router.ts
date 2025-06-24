import { Router, Request, Response } from 'express';
import controller from './product.controller';

const router = Router();

router.get('/', controller.index);
router.post('/', controller.create);
router.get('/:id', controller.read);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

export default router;

