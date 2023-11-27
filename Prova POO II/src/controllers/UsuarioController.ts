import { Request, Response } from 'express';
import usuarioService from '../services/UsuarioService';

export default {
  async criarUsuario(req: Request, res: Response) {
    try {
      const { nome, email } = req.body;
      const usuario = await usuarioService.criarUsuario(nome, email);
      res.status(201).json(usuario);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  }
};
