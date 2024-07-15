import { Express } from 'express-serve-static-core';
import userRoutes from './userRoutes';

function Routes(app: Express) {
  app.use('/api', userRoutes);
}

export default Routes;