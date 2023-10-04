const typeorm = require("typeorm");
const MovieEntity = require("./entity/movie.entity");

const dataSource = new typeorm.DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  entities: [MovieEntity],
});

module.exports = dataSource;
