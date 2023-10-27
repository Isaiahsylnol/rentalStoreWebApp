import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ModalService from "./Modal/services/ModalService";
import { LoginModal } from "./Modal/LoginModal";
import ClickOutsideHandler from "../utils/clickOutside";

function Dropdown({ toggle }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  let navigate = useNavigate();
  let userData;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Sign user out
  const signOut = () => {
    localStorage.removeItem("User");
    setCurrentUser();
    navigateAndClose("/");
  };

  const navigateAndClose = (arg) => {
    navigate(arg);
    toggleDropdown();
  };

  useEffect(() => {
    userData = localStorage.getItem("User");
    if (userData !== null) {
      const user = JSON.parse(userData);
      setCurrentUser(user);
    } else {
      console.warn("No data found in local storage for 'User'");
    }
  }, [toggle]);

  return (
    <div className="text-white sm:mr-10 text-center h-full dropdown">
      {currentUser ? (
        <button
          className="text-gray-200 font-normal no-underline hover:text-white text-base"
          onClick={() => toggleDropdown()}
        >
          <AccountCircleIcon />
        </button>
      ) : (
        <button
          onClick={() => ModalService.open(LoginModal)}
          className="text-white bg-blue-500 hover:bg-blue-600 rounded-sm -mt-4 mr-8 h-8 w-20"
        >
          Sign in
        </button>
      )}
      {isOpen && (
        // dropdown-content
        <div className="bg-gray-700 sm:w-28 sm:-ml-20 mt-3 sm:absolute rounded text-base">
          <ClickOutsideHandler
            containerClass=".dropdown"
            action={toggleDropdown}
          />
          <ul className="space-y-1 w-full">
            <li className="hover:bg-gray-800 hover:rounded w-full h-12 flex justify-center items-center">
              {" "}
              <button onClick={() => navigateAndClose("/profile")}>
                View profile
              </button>
            </li>
            <li className="hover:bg-gray-800 hover:rounded w-full h-12 flex justify-center items-center cursor-pointer">
              Settings
            </li>
            <li className="hover:bg-gray-800 hover:rounded w-full h-12 flex justify-center items-center cursor-pointer">
              FAQS
            </li>
            <li className="hover:bg-gray-800 hover:rounded w-full h-12 flex justify-center items-center cursor-pointer">
              {" "}
              <button onClick={signOut}>Sign out</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
