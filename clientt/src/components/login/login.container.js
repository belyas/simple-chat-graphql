import React, { useState, useContext } from "react";

import LoginComponent from "./login.component";
import { login } from "../../auth";
import { AuthContext } from "../../context";

const EMAIL = "email";
const PASSWORD = "password";

const LoginContainer = () => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLogged, setIsLogged] = useContext(AuthContext);

  const onSubmitHandler = async event => {
    event.preventDefault();

    if (!email || !password) {
      setError("Please fill in all field!");
      return;
    } else {
      const { error } = await login(email, password);

      if (error) {
        setError(error);
        setIsLogged(false);
      } else {
        setError(null);
        setIsLogged(true);
      }
    }
  };

  const onChangeHandler = ({ target: { name, value } }) => {
    if (name === EMAIL) {
      setEmail(value.trim());
    } else if (name === PASSWORD) {
      setPassword(value);
    }
  };

  return (
    <LoginComponent
      onSubmit={onSubmitHandler}
      error={error}
      onChange={onChangeHandler}
      isLogged={isLogged}
    />
  );
};

export default LoginContainer;
