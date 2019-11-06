import React from "react";

import LoginComponent from "./login.component";

const EMAIL = "email";
const PASSWORD = "password";

const LoginContainer = () => {
  const [error, setError] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  const onSubmitHandler = event => {
    event.preventDefault();

    console.log("event", event, email, password);

    if (!email || !password) {
      setError("Please fill in all field!");
      return;
    } else {
      setError(null);

      fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({ email, password })
      })
        .then(response => response.json())
        .then(data => console.log("[data]", data))
        .catch(console.log);
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
