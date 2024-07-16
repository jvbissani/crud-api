import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.POSTGRES_DB || 'template_crud',
  process.env.POSTGRES_USER || 'bacani',
  process.env.POSTGRES_PASS,
  {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT ? parseInt(process.env.POSTGRES_PORT, 10) : undefined,
    dialect: 'postgres',
  }
);

export default sequelize;