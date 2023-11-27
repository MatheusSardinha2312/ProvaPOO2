import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class UsuarioModel {
  async criarUsuario(nome: string, email: string) {
    return prisma.usuario.create({
      data: {
        nome,
        email,
      },
    });
  }
}

export default new UsuarioModel();

