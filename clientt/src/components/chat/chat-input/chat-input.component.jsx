import React from "react";

import styles from "../chat.module.css";

const ChatInput = ({ onKeyPress }) => (
  <div className={styles.ChatInputs}>
    <input
      type="text"
      name="message"
      onKeyPress={onKeyPress}
      placeholder="Your message here..."
    />
  </div>
);

export default ChatInput;
