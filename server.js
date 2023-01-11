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
const port = 5000;

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

// Choose the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server up running on port ${PORT}`);
});
