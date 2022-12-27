import Modal from "./Modal";
import ModalBody from "./ModalBody";
import ModalHeader from "./ModalHeader";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../../mutations/userMutations";
import { ErrorMessage } from "@hookform/error-message";

export default function SignUpModal(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [registerUser, { error }] = useMutation(REGISTER_USER, {
    variables: { username, firstName, lastName, email, password },
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  const onSubmit = (data, e) => {
    setFirstName(data.firstName);
    setEmail(data.email);
    setLastName(data.lastName);
    setPassword(data.password);
    setUsername(data.username);

    registerUser(firstName, lastName, email, username, password);
  };
  const onError = (errors, e) => console.log(errors, e);
  return (
    <Modal>
      {/* Close modal button */}
      <div className="float-right justify-center">
        <button
          aria-label="Close Modal"
          aria-labelledby="close-modal"
          onClick={props.close}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="m-3 h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {/* Close modal button - END */}
      <ModalHeader>
        <h1 className="text-center">Register</h1>
      </ModalHeader>
      <ModalBody>
        <div className="justify-center w-96 flex">"Logo Here"</div>
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="flex flex-col gap-7"
        >
          <input
            className="p-3 rounded-xl"
            placeholder="username"
            {...register("username", {
              required: true,
            })}
          />
          <ErrorMessage
            errors={errors}
            name="username"
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p
                  key={type}
                  className="text-red-500 text-base font-medium -mt-4"
                >
                  {message}
                </p>
              ))
            }
          />

          <input
            className="p-3 rounded-xl"
            placeholder="First Name"
            {...register("firstName", {
              required: "First name is required",
            })}
          />
          <ErrorMessage
            errors={errors}
            name="firstName"
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p
                  key={type}
                  className="text-red-500 text-base font-medium -mt-4"
                >
                  {message}
                </p>
              ))
            }
          />

          <input
            className="p-3 rounded-xl"
            placeholder="Last Name"
            {...register("lastName", {
              required: "This is required.",
              minLength: {
                value: 3,
                message: "Input must exceed 3 characters.",
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="lastName"
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p
                  key={type}
                  className="text-red-500 text-base font-medium -mt-4"
                >
                  {message}
                </p>
              ))
            }
          />

          <input
            className="p-3 rounded-xl"
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "This field is required",
            })}
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p
                  key={type}
                  className="text-red-500 text-base font-medium -mt-4"
                >
                  {message}
                </p>
              ))
            }
          />

          <input
            className="p-3 rounded-xl"
            type="password"
            {...register("password", {
              required: true,
            })}
          />
          {errors.password && (
            <span className="text-red-500 text-base font-medium -mt-4">
              Password field is required
            </span>
          )}

          {errors && (
            <span className="text-red-500 text-center text-xl font-bold -mt-4">
              {error?.message}
            </span>
          )}
          <div className="flex justify-center">
            <input
              type="submit"
              value="Sign up"
              className="bg-blue-500 w-40 h-12 text-base font-semibold text-white rounded-2xl"
            />
          </div>
        </form>
      </ModalBody>
    </Modal>
  );
}