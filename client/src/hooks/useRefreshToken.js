import axios from "../utils/axios";
import { useAuth } from "./useAuth";

export const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const { data } = await axios.get("auth/refresh", {
      withCredentials: true,
    });
    setAuth(data);
    return data.accessToken;
  };
  return refresh;
};
