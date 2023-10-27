import axios from "axios";

export async function createRental(
  user_id,
  film_id,
  title,
  duration,
  return_date,
  start_date
) {
  const args = {
    user_id,
    film_id,
    title,
    duration,
    return_date,
    start_date,
  };
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_API}/rentals/create-rental`,
      args
    );
    const { data } = response;

    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}

export async function listRentals(user_id) {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_API}/rentals/list-rental/${user_id}`
    );
    const { data } = response;
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}
