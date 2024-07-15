import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  'template_crud',
  'POSTGRES',
  'POSTGRES',
  {
    host: 'localhost',
    dialect: 'postgres',
  }
);

export default sequelize;