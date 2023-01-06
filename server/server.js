const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const Schemas = require("./schema/schema");
const resolvers = require("./resolver/resolver");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.ATLAS_URI)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log("Error", err));

app.use(
  "/graphql",
  graphqlHTTP({
    schema: Schemas,
    rootValue: resolvers,
    graphiql: true,
  })
);

const port = process.env.PORT || 3000;
const host = "0.0.0.0";
app.listen(port, host, () => connsole.log(`server is running on port ${port}`));
