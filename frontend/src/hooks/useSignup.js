import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setAuthUser } = useAuthContext();
  const signup = async (formData) => {
    try {
      setLoading(true);
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/signup`,
        formData,
        {
          withCredentials: true,
        }
      );
      if (res.data) {
        localStorage.setItem("loggedInUser", JSON.stringify(res.data));
        setAuthUser(res.data);
        navigate("/");
      }
    } catch (error) {
      toast.error(
        error?.response?.data || error?.message || "Failed to signin!"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};
export default useSignup;
