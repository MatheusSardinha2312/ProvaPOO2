import lanceModel from '../models/lanceModel';

class LanceService {
  async criarLance(compradorId: number, leilaoId: number, valor: number) {
    return lanceModel.criarLance(compradorId, leilaoId, valor);
  }
}

export default new LanceService();
