import express from 'express';
import usuarioController from '../controllers/UsuarioController';

const router = express.Router();

router.post('/criar', usuarioController.criarUsuario);

export default router;
