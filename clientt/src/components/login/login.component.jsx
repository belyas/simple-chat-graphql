import React from "react";

import styles from "./login.module.css";

const Login = ({ error, onSubmit, onChange }) => {
  return (
    <div className={styles.login}>
      <h3 className={styles.h3}>Login</h3>
      <form onSubmit={onSubmit}>
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.inputGroup}>
          <input
            type="text"
            name="email"
            onChange={onChange}
            className={styles.input}
            placeholder="Email"
          />
        </div>

        <div className={styles.inputGroup}>
          <input
            type="password"
            name="password"
            onChange={onChange}
            className={styles.input}
            placeholder="Password"
          />
        </div>

        <button className={[styles.btn, styles.btnSubmit].join(" ")}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
