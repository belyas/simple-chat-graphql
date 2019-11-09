const fs = require("fs");
const path = require("path");
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const expressJWT = require("express-jwt");
const jwt = require("jsonwebtoken");
const { ApolloServer } = require("apollo-server-express");

const db = require("./db");
const resolvers = require("./graphql/resolvers");
const typeDefs = fs.readFileSync(
  path.resolve(__dirname, "graphql", "schema.gql"),
  { encoding: "utf8" }
);

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

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
});
apolloServer.applyMiddleware({
  path: "/graphql",
  app
});

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

const httpServer = http.createServer(app);
apolloServer.installSubscriptionHandlers(httpServer);

httpServer.listen(PORT, () => console.log(`app running on port ${PORT}`));
