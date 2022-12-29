import Header from "../components/Header";
const Profile = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Header />
      <div className="h-2/3 w-11/12 bg-orange-500 flex justify-center items-center rounded-2xl">
        <h2 className="text-white">Profile page</h2>
      </div>
    </div>
  );
};

export default Profile;
