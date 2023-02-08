import dotenv from "dotenv";
dotenv.config();

// const port = process.env.PORT;
// const db_local = process.env.DB_LOCAL;

const config = {
  port: process.env.PORT,
  db_local: process.env.DB_LOCAL,
};
export default config;
