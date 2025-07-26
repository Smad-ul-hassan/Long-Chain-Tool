const express = require("express");
const app = express();
const port = 3333;

// Home route
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
