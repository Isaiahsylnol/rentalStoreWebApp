// Concerning retrieving protected data from server
export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("User"));

  if (user && user.accessToken) {
    // for Node.js Express back-end
    return { "x-access-token": user.accessToken };
  } else {
    return {};
  }
}
