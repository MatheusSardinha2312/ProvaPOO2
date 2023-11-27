import { Request, Response } from 'express';
import leilaoService from '../services/LeilaoService';

export default {
  async criarLeilao(req: Request, res: Response) {
    try {
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao criar leilão' });
    }
  }
};
