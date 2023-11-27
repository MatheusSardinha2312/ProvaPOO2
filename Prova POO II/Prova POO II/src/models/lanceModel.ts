import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class LanceModel {
  async criarLance(nome: string, email: string) {
    return prisma.lance.create({
      data: {
        nome,
        email,
      },
    });
  }
}

export default new LanceModel();
