const dataSource = require("../data-source");
const movie = require("../entity/movie.entity");

const findMovies = async (req, res) => {
  try {
    const movies = await dataSource.getRepository("Movie").find();
    return movies;
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

const findMoviesByName = async (req, res) => {
  try {
    const title = req.body.title;
    const movies = await dataSource
      .getRepository(movie)
      .createQueryBuilder("movie")
      .where("title LIKE :title", { title: `%${title}%` })
      .getMany();

    return movies;
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = {
  findMovies,
  findMoviesByName,
};
