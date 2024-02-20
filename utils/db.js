const mysql = require("mysql2");
export const pool = mysql.createPool({
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: "3306",
  database: process.env.DB_NAME,
});
