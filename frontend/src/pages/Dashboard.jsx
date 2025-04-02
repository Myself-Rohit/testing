import React, { useState } from "react";
import { useAuthContext } from "../context/authContext";
import useProfileEdit from "../hooks/useProfileEdit.js";

const Dashboard = () => {
  const { authUser } = useAuthContext();
  const { loading, profileEdit } = useProfileEdit();
  const [image, setImage] = useState("");
  const [formData1, setFormData] = useState({
    userName: authUser?.userName,
    password: authUser?.password,
    photo: authUser?.photo,
  });
  console.log(authUser);

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };
  const handleChange = (e) => {
    setFormData({ ...formData1, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userName", formData1.userName);
    formData.append("password", formData1.password);
    if (image) {
      formData.append("photo", image);
    }
    setFormData((pre) => ({ ...pre, photo: formData }));
    profileEdit(formData);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-4 bg-blue-500 p-10"
      >
        <input type="file" accept="image/*" onChange={handleImage} />
        <input
          className="p-2"
          id="userName"
          type="text"
          placeholder="username"
          value={formData1?.userName}
          onChange={handleChange}
        />
        <input
          className="p-2"
          id="password"
          type="text"
          placeholder="password"
          value={formData1?.password || ""}
          onChange={handleChange}
        />
        <button type="submit" className="bg-cyan-500 px-7 py-2 rounded ">
          Submit
        </button>
      </form>
      <div className="bg-yellow-500 p-10 flex items-center gap-4 ">
        <img
          src={"data:image/png;base64," + authUser?.photo}
          alt="profile-photo"
          className="w-60 h-60"
        />
        <h1>{authUser?.userName}</h1>
      </div>
    </div>
  );
};

export default Dashboard;
