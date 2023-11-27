import leilaoModel from '../models/leilaoModel';

class LeilaoService {
  async criarLeilao(produto: string, preco: number, dataLimite: Date, donoId: number) {
    return leilaoModel.criarLeilao(produto, preco, dataLimite, donoId);
  }
}

export default new LeilaoService();
