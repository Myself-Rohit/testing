import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const login = async (formData) => {
    try {
      setLoading(true);
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/signin`,
        formData,
        {
          withCredentials: true,
        }
      );
      if (res.data) {
      }
      navigate("/");
    } catch (error) {
      toast.error(
        error?.response?.data || error?.message || "Failed to signin!"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};
export default useLogin;
