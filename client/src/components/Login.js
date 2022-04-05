import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.form`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  height: 100%;
  background-color: #FFFAF1;
`;

function Login(props) {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];
  
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div data-cy="error-msg" className="error">{errorMessages.message}</div>
    );
    
    const handleSubmit = (event) => {
      event.preventDefault();
      var { uname, pass } = document.forms[0];
    
      // Find user login info
      const userData = database.find((user) => user.username === uname.value);
    
      // Compare user info
      if (userData) {
        if (userData.password !== pass.value) {
          // Invalid password
          setErrorMessages({ name: "pass", message: errors.pass });
        } else {
          setIsSubmitted(true);
        }
      } else {
        // Username not found
        setErrorMessages({ name: "uname", message: errors.uname });
      }
    };

    const renderForm = (
      <Wrapper onSubmit={handleSubmit}>
      <h2>Login Page</h2>
      <div>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="uname" required />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
            {renderErrorMessage("pass")}
          </div>
          <div className="button-container">
            <input data-cy="submit-bn" type="submit" />
          </div>
      </div>
      </Wrapper>
    );

  return (
      <>
      {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </>
  );
}

export default Login;
