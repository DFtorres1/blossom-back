import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

const dbInstance = new Sequelize(
  process.env.DB_NAME || "blossom",
  process.env.DB_USENAME || "postgres",
  process.env.DB_PASSWORD || "1234",
  {
    host: process.env.DB_HOST || "localhost",
    port: +(process.env.DB_PORT || 5432),
    dialect: "postgres",
  }
);

export default dbInstance;
