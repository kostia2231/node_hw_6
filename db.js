import mysql from "mysql2";
import "dotenv/config";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "product_db",
});

connection.connect((err) => {
  if (err) {
    console.error("error occurred while connecting to db: ", err.stack);
    return;
  }
  console.log("connected to the db as id-" + connection.threadId);
});

export default connection;
