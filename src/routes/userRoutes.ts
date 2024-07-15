import { Router } from "express";

const router = Router();

// Exemplo de rota GET
router.get('/users', (req, res) => {
  res.send('Users route');
});

// Adicione outras rotas conforme necessário

export default router;