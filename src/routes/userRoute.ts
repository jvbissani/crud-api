import controller from '../controllers/userController';
import { Express } from 'express';

export default (app: Express) => {
  app.get('/users', controller.get);
  app.get('/users/:id', controller.get);
  app.post('/users/register', controller.post);
}