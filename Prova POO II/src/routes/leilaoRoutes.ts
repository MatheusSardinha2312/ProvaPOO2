import express from 'express';
import leilaoController from '../controllers/LeilaoController';

const router = express.Router();

router.post('/criar', leilaoController.criarLeilao);

export default router;
