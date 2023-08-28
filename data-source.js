const typeorm = require("typeorm");
const MovieEntity = require("./entity/movie.entity");

const dataSource = new typeorm.DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [MovieEntity],
});

module.exports = dataSource;