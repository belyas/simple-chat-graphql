const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors(), bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello there");
});

app.listen(PORT, () => console.log(`app running on port ${PORT}`));
