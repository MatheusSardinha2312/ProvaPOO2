import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class LeilaoModel {
  async criarLeilao(nome: string, email: string) {
    return prisma.leilao.create({
      data: {
        nome,
        email,
      },
    });
  }
}

export default new LeilaoModel();
