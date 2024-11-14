import connection from "./db.js";

const createUsersTables = `
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10 , 2 ) NOT NULL
)
`;

connection.query(createUsersTables, (err, results) => {
  if (err) {
    console.error("error creating table: ", err.stack);
    return;
  }
  console.log("table created successfully");
  connection.end();
});
