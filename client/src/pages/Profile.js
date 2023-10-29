import { useEffect, useState } from "react";
import { listRentals } from "../queries/rentalApi";

const Profile = () => {
  const [user, setUser] = useState();
  const [rentals, setRentals] = useState();

  useEffect(() => {
    // Read user from localStorage
    const userData = JSON.parse(localStorage.getItem("User"));
    setUser(userData);
  }, []);

  useEffect(() => {
    if (user) {
      async function fetchData() {
        try {
          const data = await listRentals(user.id);
          setRentals(data);
        } catch (error) {
          console.error("Error occured fetching rental data: ", error);
        }
      }
      fetchData();
    }
  }, [user]);

  const triggerBtn = () => {
    console.log("The button was pressed");
  };

  const renderButton = (text, description, onClick) => (
    <button
      onClick={onClick}
      className="text-left rounded-xl bg-[#9cacb5af] border-2 border-zinc-500 hover:bg-[#7b8790c1] p-4 m-2"
    >
      <h3 className="pt-3 mb-3 font-bold text-1xl">{text}</h3>
      {description.map((term, index) => (
        <p key={index}>{term}</p>
      ))}
    </button>
  );

  return (
    <div className="flex justify-center items-center p-6 mt-14 xl:-mt-10 min-h-screen">
      <div className="w-full bg-slate-200 flex justify-center rounded-2xl max-w-7xl">
        {/* Container */}
        <div className="rounded-3xl p-4 w-full justify-center mx-auto">
          <div className='bg-[url("https://ik.imagekit.io/bbwxfzjdl2zg/projectionist.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672677850653")] bg-cover bg-center h-56'>
            <h2 className="text-white blur-none text-left font-bold text-2xl sm:text-5xl pt-20 pl-10">
              Welcome {user?.first_name}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 p-4">
            {/* left column container */}
            <section className="flex flex-col rounded-xl w-full sm:w-5/6 md:w-11/12 lg:w-11/12 xl:w-4/5 text-lg">
              {renderButton("Payment History", ["Orders"], triggerBtn)}
              {renderButton(
                "Settings",
                ["Notifications", "Personal info", "Data & privacy"],
                triggerBtn
              )}
              {renderButton(
                "Manage Membership",
                [
                  "Purchases & subscriptions",
                  "Billing and payments",
                  "Vouchers & coupons",
                ],
                triggerBtn
              )}
            </section>
            {/* right column container */}
            <section className="flex flex-col p-3 gap-3">
              <h3 className="font-bold text-2xl">Movies watched</h3>
              <span className="text-base">372</span>
              <div className="pt-3 mb-5">
                <h3 className="font-bold text-2xl">Favorite genres</h3>
                <ul className="font-bold text-white flex gap-2 mt-4 cursor-default">
                  <li className="bg-black p-1 rounded-lg">Adventure</li>
                  <li className="bg-black p-1 rounded-lg">Sci-Fi</li>
                </ul>
              </div>
              <div className="text-lg">
                {rentals && rentals.length > 0 ? (
                  <>
                    <h2 className="font-bold text-2xl mb-4">
                      Current rentals:
                    </h2>
                    {rentals?.map((rental) => {
                      return (
                        <div key={rental?.film_id} className="grid grid-cols-2">
                          <span>{rental?.title}</span>
                          <span className="font-bold">
                            {rental?.duration} days remaining
                          </span>
                        </div>
                      );
                    })}
                  </>
                ) : null}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
