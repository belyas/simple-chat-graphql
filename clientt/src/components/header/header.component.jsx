import React from "react";

import styles from "./header.module.css";

const Header = () => {
  return (
    <nav>
      <ul className={styles.navUl}>
        <li>Logout</li>
      </ul>
    </nav>
  );
};

export default Header;
