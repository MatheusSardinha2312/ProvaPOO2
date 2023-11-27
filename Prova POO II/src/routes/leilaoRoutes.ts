import express from 'express';
import LeilaoController from '../controllers/LeilaoController';

const router = express.Router();

router.get('/leiloes', LeilaoController.listarLeiloes);
router.get('/leiloes/:id', LeilaoController.obterLeilaoPorId);

export default router;