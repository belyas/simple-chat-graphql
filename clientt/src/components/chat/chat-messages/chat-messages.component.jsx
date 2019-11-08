import React from "react";

import ChatMessageList from "./single-item/single-item.component";
import styles from "../chat.module.css";

const ChatMessages = ({ messages }) => (
  <ul className={styles.ChatMessages}>
    {!!messages.length &&
      messages.map(message => (
        <ChatMessageList key={message.id} {...message} />
      ))}
  </ul>
);

export default ChatMessages;
