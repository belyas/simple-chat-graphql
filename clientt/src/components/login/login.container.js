import React from "react";

import LoginComponent from "./login.component";
import { login } from "../../auth";

const EMAIL = "email";
const PASSWORD = "password";

const LoginContainer = () => {
  const [error, setError] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  const onSubmitHandler = async event => {
    event.preventDefault();

    if (!email || !password) {
      setError("Please fill in all field!");
      return;
    } else {
      setError(null);

      await login(email, password);
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
    />
  );
};

export default LoginContainer;
