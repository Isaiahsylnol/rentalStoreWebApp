import { gql } from "@apollo/client";

const SEARCH_USER = gql`
  query searchUser($email: String!) {
    searchUser(email: $email) {
      _id
      email
    }
  }
`;

export { SEARCH_USER };
