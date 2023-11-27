import express from 'express';
import usuarioRoutes from './routes/usuarioRoutes';
import lanceRoutes from './routes/lanceRoutes';
import leilaoRoutes from './routes/leilaoRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/usuarios', usuarioRoutes);
app.use('/leiloes', leilaoRoutes);
app.use('/lances', lanceRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
