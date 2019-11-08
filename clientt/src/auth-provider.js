import React, { useState, useMemo } from "react";

import { AuthContext } from "./context";
import { getToken } from "./storage";

const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(Boolean(getToken()));
  const providerData = useMemo(() => [isLogged, setIsLogged], [isLogged]);

  return (
    <AuthContext.Provider value={providerData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
