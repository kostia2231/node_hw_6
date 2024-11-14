import express from "express";
import "dotenv/config";
import connection from "./db.js";

const app = express();
const port = process.env.PORT || 4444;

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("hello world");
});

app.get("/products", (_req, res) => {
  const query = "SELECT * FROM products";

  connection.query(query, (err, results) => {
    if (err) {
      console.error("error fetching", err.stack);
      res.status(500).send("error fetching");
      return;
    }
    res.json(results);
  });
});

app.post("/", (req, res) => {
  const data = req.body;
  if (!data) {
    res.status(400).json({ error: "no data" });
  } else {
    res.json({ message: "data received", data });
  }
});

app.use((_req, res) => {
  res.status(404).send("not found");
});

app.listen(port, () => {
  console.log(`app is running on port: ${port}`);
});
