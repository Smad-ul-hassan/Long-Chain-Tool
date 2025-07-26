import express from "express";
import { Main } from "../app/modules/main/main.js";
const app = express();
const port = 3333;
// Home route
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  Main();
});
