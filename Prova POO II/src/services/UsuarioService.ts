import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class UsuarioService {
  static async listarUsuarios() {
  }
  
  static async obterUsuarioPorId(id: number) {
  }
}

export default UsuarioService;