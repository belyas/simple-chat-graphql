import React, { useContext, useState } from "react";
import { useQuery } from "react-apollo";

import Chat from "./chat.component";
import { AuthContext } from "../../context";
import { MESSAGES_LIST } from "../../graphql/queries";

const KEYBOARD_ENTER_NUM = 13;

const ChatContanier = () => {
  const { data } = useQuery(MESSAGES_LIST);
  const { isLogged } = useContext(AuthContext);
  const [currentMessages, setCurrentMessages] = useState([]);

  const onKeyPressHanlder = e => {
    const message = e.target.value.trim();

    if (e.which === KEYBOARD_ENTER_NUM && message) {
      setCurrentMessages(
        currentMessages.concat({
          id: 1,
          user: "yassinne",
          message
        })
      );

      e.target.value = "";
    }
  };

  return (
    <Chat
      isLoggedin={isLogged}
      messages={
        (!!currentMessages.length && currentMessages) ||
        (data && data.messages) ||
        []
      }
      user="yassine"
      onKeyPress={onKeyPressHanlder}
    />
  );
};

export default ChatContanier;
