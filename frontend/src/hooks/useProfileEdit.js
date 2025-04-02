import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const useProfileEdit = () => {
  const [loading, setLoading] = useState(false);
  const profileEdit = async (formData) => {
    try {
      setLoading(true);
      const res = await axios.patch(
        `${import.meta.env.VITE_API_URL}/api/user/update`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (res.data) {
        localStorage.setItem("loggedInUser", JSON.stringify(res.data.data));
        console.log(res.data);
        setAuthuser(res.data.data);
      }
    } catch (error) {
      toast.error(
        error?.response?.data || error?.message || "Failed to signin!"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, profileEdit };
};
export default useProfileEdit;
