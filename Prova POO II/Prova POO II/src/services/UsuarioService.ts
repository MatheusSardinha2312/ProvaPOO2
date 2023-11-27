import usuarioModel from '../models/usuarioModel';

class UsuarioService {
  async criarUsuario(nome: string, email: string) {
    return usuarioModel.criarUsuario(nome, email);
  }
}

export default new UsuarioService();
