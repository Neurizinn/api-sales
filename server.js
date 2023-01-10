const express = require("express");
const app = express();
const data = require("./db.json");

app.use(express.json());

app.listen(3000, function () {
  console.log("listening on port 3000");
});

app.get("/sales/:id", function (req, res) {
  const { id } = req.params;
  const client = data.client.find((cid) => cid == id);

  res.json(client);
});
