import React from "react";

interface IAuthContext {
    user: string;
    setUser: (arg: string) => void;
  }
const AuthContext = React.createContext<IAuthContext>({
    user: "",
    setUser: () => {},
});

export default AuthContext;
