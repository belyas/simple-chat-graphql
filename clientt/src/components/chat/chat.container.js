import React, { useContext, useState } from "react";

import Chat from "./chat.component";
import { AuthContext } from "../../context";

const KEYBOARD_ENTER_NUM = 13;

const ChatContanier = () => {
  const authContext = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [userId, setUserId] = useState(1);

  const onKeyPressHanlder = e => {
    const message = e.target.value;

    if (e.which === KEYBOARD_ENTER_NUM && message) {
      setMessages(
        messages.concat({
          id: userId,
          user: "yassinne",
          message
        })
      );
      setUserId(id => id + 1);
      e.target.value = "";
    }
  };

  return (
    <Chat
      isLoggedin={authContext[0]}
      messages={messages}
      user="yassine"
      onKeyPress={onKeyPressHanlder}
    />
  );
};

export default ChatContanier;
