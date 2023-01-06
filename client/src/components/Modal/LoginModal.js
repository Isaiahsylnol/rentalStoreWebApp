import React, { useState, useRef } from "react";

import Modal from "./Modal";
import ModalBody from "./ModalBody";
import ModalHeader from "./ModalHeader";
import ModalService from "./services/ModalService";
import RegisterUserModal from "./RegisterUserModal";

import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../mutations/userMutations";
import { ErrorMessage } from "@hookform/error-message";

export const LoginModal = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const closeModal = useRef();
  const [submitted, setSubmitted] = useState(false);

  const [loginUser, { error }] = useMutation(LOGIN_USER, {
    variables: { email, password },
    onCompleted(data) {
      console.log(data);
      // Create a user object to store client side
      let user = data.login;
      user["email"] = email;
      localStorage.setItem("User", JSON.stringify(user));
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
    setEmail(data.email);
    setPassword(data.password);
    loginUser(email, password).then(() => {
      window.location.reload();
    });
  };
  const onError = (errors, e) => console.log(errors, e);

  const addModal = (modal) => {
    ModalService.open(modal);
  };

  const closeModalSubmit = () => {
    closeModal.current.click();
  };

  return (
    <Modal>
      {/* Close modal button */}
      <div className="float-right justify-center p-4">
        <button
          ref={closeModal}
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
            className="mb-7 rounded-3xl h-36"
            alt="movie logo"
          />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="flex flex-col gap-7 mx-auto justify-center "
        >
          <div className="justify-center mx-auto">
            <label className="text-white block text-base">Email</label>
            <input
              className="w-60 md:w-80 p-3 rounded-xl"
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
          </div>

          <div className="justify-center mx-auto">
            <label className="text-white block text-base">Password</label>
            <input
              className="w-60 md:w-80 p-3 rounded-xl"
              type="password"
              {...register("password", {
                required: true,
              })}
            />
          </div>
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
            <button
              onClick={() => addModal(RegisterUserModal)}
              className="text-white"
            >
              Don't have an account? Sign up
            </button>
          </div>
          <div className="flex justify-center">
            <input
              type="submit"
              value="Log in"
              className="bg-blue-500 hover:bg-blue-600 w-40 h-12 text-base font-semibold text-white rounded-2xl"
            />
          </div>
        </form>
      </ModalBody>
    </Modal>
  );
};
