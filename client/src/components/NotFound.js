import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Holder = styled.div`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  height: 100%;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const NotFound = () => (
    <Holder>
      <h1>404 - Not Found!</h1>
      <Link data-cy="return_home" to="/home">
        Go Home
      </Link>
    </Holder>
  );
  
  export default NotFound;