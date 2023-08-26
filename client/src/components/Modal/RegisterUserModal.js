import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import Modal from "./Modal";
import ModalBody from "./ModalBody";
import ModalHeader from "./ModalHeader";
import ModalService from "./services/ModalService";
import { LoginModal } from "./LoginModal";

import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../../mutations/userMutations";

export default function RegisterUserModal(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const addModal = (modal) => {
    ModalService.open(modal);
  };

  const [registerUser, { error }] = useMutation(REGISTER_USER, {
    variables: { username, firstName, lastName, email, password },
    onCompleted() {
      console.log("USER SUCCEFUSSLY REGISTERED");
    },
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
      <div className="float-right justify-center p-4">
        <button
          className="hover:bg-slate-700 rounded-3xl"
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
      <ModalHeader />
      <ModalBody>
      <div className="justify-center w-96 flex">
          <img
            src={require("../../assets/movie-logo.png")}
            className="mb-7 rounded-3xl h-32"
            alt="movie logo"
          />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="flex p-8 flex-col gap-7"
        >
          <label className="text-white text-base -mb-4">Username</label>
          <input
            className="p-3 rounded-xl"
            placeholder="Example: jollyFilmWatcher4"
            {...register("username", {
              required: "Please fill out this field",
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
          <label className="text-white text-base -mb-4">First name</label>
          <input
            className="p-3 rounded-xl"
            placeholder="Example: Paul"
            {...register("firstName", {
              required: "Please fill out this field",
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
          <label className="text-white text-base -mb-4">Last name</label>
          <input
            className="p-3 rounded-xl"
            placeholder="Example: Harrison"
            {...register("lastName", {
              required: "Please fill out this field.",
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

          <label className="text-white text-base -mb-4">Email</label>
          <input
            className="p-3 rounded-xl"
            type="email"
            placeholder="Example: paul.harrison@gmail.com"
            {...register("email", {
              required: "Please fill out this field.",
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
          <label className="text-white text-base -mb-4">Password</label>
          <input
            className="p-3 rounded-xl"
            type="password"
            {...register("password", {
              required: true,
            })}
          />
          {errors.password && (
            <span className="text-red-500 text-base font-medium -mt-4">
              Please fill out this field
            </span>
          )}

          {errors && (
            <span className="text-red-500 text-center text-xl font-bold -mt-4">
              {error?.message}
            </span>
          )}
          <div className="flex justify-center">
            <button onClick={() => addModal(LoginModal)} className="text-white">
              Already have an account? Login
            </button>
          </div>
          <div className="flex justify-center">
            <input
              type="submit"
              value="Sign up"
              className="bg-blue-500 hover:bg-blue-600 w-40 h-12 text-base font-semibold text-white rounded-2xl"
            />
          </div>
        </form>
      </ModalBody>
    </Modal>
  );
}
