import express from 'express';
import lanceController from '../controllers/LanceController';

const router = express.Router();

router.post('/criar', lanceController.criarLance);

export default router;
