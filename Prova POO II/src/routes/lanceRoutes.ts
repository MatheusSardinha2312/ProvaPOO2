import express from 'express';
import LanceController from '../controllers/LanceController';

const router = express.Router();

router.get('/lances', LanceController.listarLances);
router.get('/lances/:id', LanceController.obterLancePorId);

export default router;