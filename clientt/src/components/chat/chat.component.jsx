import React from "react";

import ChatInput from "./chat-input/chat-input.component";
import ChatMessages from "./chat-messages/chat-messages.component";
import styles from "./chat.module.css";

const Chat = ({ isLoggedin, user, onKeyPress, messages }) => {
  if (!isLoggedin) return null;

  return (
    <section className={styles.Chat}>
      <div className={styles.ChatHeader}>
        Logged in as: <h3>{user}</h3>
      </div>
      <ChatMessages messages={messages} />
      <ChatInput onKeyPress={onKeyPress} />
    </section>
  );
};

export default Chat;
