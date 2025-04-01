import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useAuthContext } from "../context/authContext";

const Dashboard = () => {
  const { authUser } = useAuthContext();
  const [formData, setFormData] = useState({
    userName: authUser?.userName,
    password: authUser?.password,
    photo: authUser?.photo,
  });
  const handleImage = (e) => {
    console.log(e.target.value);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-4 bg-blue-500 p-10"
      >
        <input type="file" onChange={handleImage} />
        <input
          className="p-2"
          id="userName"
          type="text"
          placeholder="username"
          value={formData.userName}
          onChange={handleChange}
        />
        <input
          className="p-2"
          id="password"
          type="text"
          placeholder="password"
          value={formData.password || ""}
          onChange={handleChange}
        />
        <button type="submit" className="bg-cyan-500 px-7 py-2 rounded ">
          Submit
        </button>
      </form>
      <div className="bg-yellow-500 p-10 flex items-center gap-4 ">
        <img src={authUser?.photo} alt="profile-photo" className="w-20 h-20" />
        <h1>{authUser?.userName}</h1>
      </div>
    </div>
  );
};

export default Dashboard;
