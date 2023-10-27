import axios from "axios";

export async function fetchMovies() {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_API}/movies/list`
    );
    const { data } = response;

    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}
