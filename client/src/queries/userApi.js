import axios from "axios";

export async function loginUser(email, password) {
  const args = {
    email,
    password,
  };
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_API}/users/login`,
      args
    );
    const { data } = response;

    return data;
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

export async function registerUser(
  email,
  username,
  password,
  first_name,
  last_name
) {
  try {
    const data = {
      email,
      username,
      password,
      first_name,
      last_name,
    };

    console.log("BACKEND: ", data);

    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_API}/users/register`,
      data
    );

    console.log("USER API: ", response.data);

    return response.data;
  } catch (error) {
    console.error("Error occurred:", error);
    throw error; // Re-throw the error for further handling if necessary
  }
}
