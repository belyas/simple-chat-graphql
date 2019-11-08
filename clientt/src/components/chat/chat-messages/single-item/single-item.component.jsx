import React from "react";

import styles from "../../chat.module.css";

const ChatMessageList = ({ user, message }) => (
  <li className={styles.ChatMessageItem}>
    <span className={styles.User}>{user}</span>: {message}
  </li>
);

export default ChatMessageList;
