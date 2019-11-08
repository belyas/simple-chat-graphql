const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const expressJWT = require("express-jwt");
const jwt = require("jsonwebtoken");

const db = require("./db");

const app = express();
const PORT = 5000;
const jwtSecret = Buffer.from("somelongsecrettokenhere", "base64");

app.use(
  cors(),
  bodyParser.json(),
  expressJWT({
    secret: jwtSecret,
    credentialsRequired: false
  })
);

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = db.users.get(email);

  if (!(user && user.password === password)) {
    res.status(401).send({ error: "Unauthorized" });
    return;
  }

  const token = jwt.sign({ id: user.id, user: user.name }, jwtSecret);

  res.send({ token });
});

app.listen(PORT, () => console.log(`app running on port ${PORT}`));
