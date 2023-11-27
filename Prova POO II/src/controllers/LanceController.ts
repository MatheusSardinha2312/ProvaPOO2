import { Request, Response } from 'express';
import lanceService from '../services/LanceService';

export default {
  async criarLance(req: Request, res: Response) {
    try {
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao criar lance' });
    }
  }
};
