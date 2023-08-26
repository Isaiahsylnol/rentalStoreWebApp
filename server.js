const path = require("path");
const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
require("dotenv").config();

const dataSource = require("./data-source");
const movieRouter = require("./routes/movieRoute");
const Schemas = require("./schema/schema");
const resolvers = require("./resolver/resolver");

const initializeDataSource = async () => {
  try {
    await dataSource.initialize();
    console.log("Data Source has been initialized!");
  } catch (err) {
    console.error("Error during Data Source initialization", err);
  }
};

const startServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(
    "/graphql",
    graphqlHTTP({
      schema: Schemas,
      rootValue: resolvers,
      graphiql: true,
    })
  );
  app.use(express.static(path.join(__dirname, "client/build")));
  app.use("/api", movieRouter);

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server up running on port ${PORT}`);
  });
};

const startApp = async () => {
  await initializeDataSource();
  startServer();
};

startApp();
