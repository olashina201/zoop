import { useContext } from "react";
import AuthContext from "./context";
import authStorage from "../auth/storage";
import jwtDecode from "jwt-decode";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  }

  const login = (authToken: any) => {
    const user: any = jwtDecode(authToken);
    setUser(user);
    authStorage.storeToken(authToken);
  }

  return { user, logOut, login };
};

export default useAuth;
