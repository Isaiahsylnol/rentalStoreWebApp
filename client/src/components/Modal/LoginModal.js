import React from "react";
import { createBrowserHistory } from "history";

import Modal from "./Modal";
import ModalBody from "./ModalBody";
import ModalHeader from "./ModalHeader";
import ModalService from "./services/ModalService";
import RegisterUserModal from "./RegisterUserModal";

import { useForm } from "react-hook-form";
import { loginUser } from "../../queries/userApi";

export const LoginModal = (props) => {
  let history = createBrowserHistory();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  const onSubmit = async (data, e) => {
    loginUser(data.email, data.password).then((res) => {
      localStorage.setItem("User", JSON.stringify(res));
      if (window.location.pathname !== "/login") {
        window.location.reload();
      } else {
        history.push("/");
        window.location.reload();
      }
    });
  };
  const onError = (errors, e) => console.log(errors, e);

  const addModal = (modal) => {
    ModalService.open(modal);
  };

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
        <div className="justify-center flex w-full">
          <img
            src={require("../../assets/movie-logo.png")}
            className="mb-7 rounded-3xl h-32"
            alt="movie logo"
          />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="flex flex-col gap-7 mx-auto justify-center"
        >
          <div className="flex flex-col justify-center mx-auto">
            <label className="text-white block text-base mb-2">Email</label>
            <input
              className="w-60 md:w-80 p-3 rounded-xl mb-3"
              type="email"
              name="email"
              placeholder="Example: paul.harrison@gmail.com"
              {...register("email", {
                required: true,
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-base font-medium">
                Please fill out this field
              </span>
            )}
          </div>
          <div className="flex flex-col justify-center mx-auto">
            <label className="text-white block text-base mb-2">Password</label>
            <input
              className="w-60 md:w-80 p-3 rounded-xl mb-3"
              name="password"
              type="password"
              {...register("password", {
                required: true,
              })}
            />
            {errors.password && (
              <span className="text-red-500 text-base font-medium">
                Please fill out this field
              </span>
            )}
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => addModal(RegisterUserModal)}
              className="text-white"
            >
              Don't have an account? Sign up
            </button>
          </div>
          <div className="flex justify-center pb-8">
            <input
              type="submit"
              value="Log in"
              className="bg-blue-500 hover:bg-blue-600 w-40 h-10 text-base font-semibold text-white rounded-2xl"
            />
          </div>
        </form>
      </ModalBody>
    </Modal>
  );
};
