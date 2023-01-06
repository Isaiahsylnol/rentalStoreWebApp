import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Profile = () => {
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("User"));
    console.log(user);
  }, []);
  let user = {
    name: "John Doe",
    address: "77 Field Crest",
    email: "doe@test.com",
  };
  function triggerBtn() {
    console.log("The button was pressed");
  }
  return (
    <div className="h-screen">
      <Header />
      {/* Container */}
      <div className="flex justify-center items-center p-6 sm:p-16 mt-14 xl:-mt-10 min-h-screen">
        <div className="w-full bg-slate-200 flex justify-center rounded-2xl">
          {/* Container */}
          <div className="rounded-3xl p-4 w-full justify-center mx-auto">
            <div className='bg-[url("https://ik.imagekit.io/bbwxfzjdl2zg/projectionist.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672677850653")] bg-cover bg-center h-56'>
              <h2 className="text-white blur-none text-left font-bold text-2xl sm:text-5xl pt-20 pl-10">
                Welcome {user.name}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 p-4">
              {/* left column container */}
              <div className="flex flex-col float-left col-span-2 sm:col-span-1 bg-slate-400 rounded-xl w-full sm:w-5/6 md:w-11/12 lg:w-11/12 xl:w-4/5 p-2">
                <button
                  onClick={triggerBtn}
                  className="text-left border-b-2 border-zinc-600 p-4 hover:bg-[#adb6c9]"
                >
                  <h3 className="pt-3 mb-3 font-bold text-1xl">
                    Payment History
                  </h3>
                  <span>Orders</span>
                </button>
                <button
                  onClick={triggerBtn}
                  className="text-left border-b-2 border-zinc-600 p-4 hover:bg-[#adb6c9]"
                >
                  <h3 className="pt-3 mb-3 font-bold text-1xl">
                    Payment Settings
                  </h3>
                  <p>Payment cards</p>
                  <p>Paypal</p>
                  <p>Vouchers & Coupons</p>
                </button>
                <button className="text-left p-4 hover:bg-[#adb6c9]">
                  <h3
                    onClick={triggerBtn}
                    className="pt-3 mb-3 font-bold text-1xl"
                  >
                    Manage Membership
                  </h3>
                  <p>Payment cards</p>
                  <p>Paypal</p>
                  <p>Vouchers & Coupons</p>
                </button>
              </div>
              {/* right column container */}
              <div className="col-span-1 h-full w-full">
                <div className="flex flex-col">
                  <span className="text-left p-4 w-full sm:w-5/12">
                    <h3 className="pt-3 mb-3 font-bold text-2xl">
                      Movies watched
                    </h3>
                    <span className="font-bold text-base">372</span>
                  </span>
                  <span className="text-left p-4 w-full sm:w-5/12">
                    <h3 className="pt-3 mb-3 font-bold text-2xl">
                      Favorite genres
                    </h3>
                    <ul className="font-bold text-base text-white inline-flex gap-x-2 cursor-default">
                      <li className="bg-black p-1 rounded-lg">Adventure</li>
                      <li className="bg-black p-1 rounded-lg">Sc-FI</li>
                    </ul>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Profile;
