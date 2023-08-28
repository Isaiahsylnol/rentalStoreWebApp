const dataSource = require("../data-source");
const movie = require("../entity/movie.entity");

const findMovies = async () => {
  try {
    const movies = await dataSource.getRepository(movie).find();
    return movies;
  } catch (error) {
    return "An error occurred";
  }
};

const findMoviesByName = async (title) => {
  try {
    const movies = await dataSource
      .getRepository(movie)
      .createQueryBuilder("movie")
      .where("title LIKE :title", { title: `%${title}%` })
      .getMany();

    return movies;
  } catch (error) {
    return "An error occurred";
  }
};

const findMovieById = async (id) => {
  try {
    const result = await dataSource
      .getRepository(movie)
      .createQueryBuilder("movie")
      .where(`id = :id`, { id })
      .getOne();

    return result;
  } catch (error) {
    console.error(error);
    return "An error occurred";
  }
};

module.exports = {
  findMovies,
  findMoviesByName,
  findMovieById,
};
