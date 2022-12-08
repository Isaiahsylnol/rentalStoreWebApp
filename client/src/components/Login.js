import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import AuthService from "../services/auth.service";

import { withRouter } from '../common/with-router';
const Wrapper = styled.form`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  height: 100%;
  background-color: #FFFAF1;
`;

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

function Login(props) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  //const onSubmit = data => console.log(data);

  async function onSubmit(data){await console.log(data)}

  const [isSubmitted, setIsSubmitted] = useState(false);

    const renderForm = (
      <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <h2>Login Page</h2>
      
      <input placeholder="username" {...register("username", { required: true, minLength: 4 })} />
      {errors.username && <span>Username is required</span>}

      <input type="password" {...register("password", { required: true, minLength: 4 })} />
      {errors.password && <span>Password field is required</span>}

      <input type="submit" value="submit" />
      </Wrapper>
    );

  return (
      <>
      {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </>
  );
}

export default Login;
