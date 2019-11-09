import React, { useState, useMemo } from "react";

import { AuthContext } from "./context";
import { getToken, getUserFromToken } from "./storage";

const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(Boolean(getToken()));
  const [currentUser, setCurrentUser] = useState(null);
  const providerData = useMemo(
    () => ({
      isLogged,
      setIsLogged,
      currentUser,
      setCurrentUser
    }),
    [isLogged, currentUser]
  );

  React.useEffect(() => {
    const token = getUserFromToken();

    if (token) {
      setCurrentUser(token);
    }
  }, []);

  return (
    <AuthContext.Provider value={providerData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
