import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import Modal from "./Modal";
import ModalBody from "./ModalBody";
import ModalHeader from "./ModalHeader";
import ModalService from "./services/ModalService";
import { LoginModal } from "./LoginModal";
import { registerUser } from "../../queries/userApi";

import { createBrowserHistory } from "history";

export default function RegisterUserModal(props) {
  let history = createBrowserHistory();

  const addModal = (modal) => {
    ModalService.open(modal);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  const onSubmit = (data) => {
    registerUser(
      data.email,
      data.username,
      data.password,
      data.first_name,
      data.last_name
    ).then((res) => {
      if (res) {
        history.push("/login");
        window.location.reload();
      }
    });
  };

  const onError = (errors) => {
    console.log(errors);
  };

  return (
    <Modal>
      {/* Close modal button */}
      <div className="float-right justify-center w-full">
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
        <div className="justify-center w-full flex">
          <img
            src={require("../../assets/movie-logo.png")}
            className="rounded-3xl w-28"
            alt="movie logo"
          />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="flex flex-col gap-5 scale-75 -mt-10 sm:scale-100 sm:p-12 w-full"
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
            {...register("first_name", {
              required: "Please fill out this field",
            })}
          />
          <ErrorMessage
            errors={errors}
            name="first_name"
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
            {...register("last_name", {
              required: "Please fill out this field.",
              minLength: {
                value: 3,
                message: "Input must exceed 3 characters.",
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="last_name"
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
              {/* {error?.message} */}
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
