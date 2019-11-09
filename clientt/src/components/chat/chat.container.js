import React, { useContext, useState } from "react";
import { useQuery } from "react-apollo";

import Chat from "./chat.component";
import { AuthContext } from "../../context";
import { MESSAGES_LIST, ADD_MESSAGE } from "../../graphql/queries";
import client from "../../graphql/client";

const KEYBOARD_ENTER_NUM = 13;

const ChatContanier = () => {
  const { data } = useQuery(MESSAGES_LIST);
  const { isLogged, currentUser } = useContext(AuthContext);
  const [currentMessages, setCurrentMessages] = useState([]);

  const onKeyPressHanlder = async e => {
    //   event is nullished in case of async operation
    e.persist();
    const message = e.target.value.trim();

    if (e.which === KEYBOARD_ENTER_NUM && message && isLogged) {
      const { data } = await client.mutate({
        mutation: ADD_MESSAGE,
        variables: { user: currentUser.user, message }
      });

      if (data && data.addMessage) {
        setCurrentMessages(currentMessages.concat(data.addMessage));
      }

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
      user={(currentUser && currentUser.user) || "Unkonwn"}
      onKeyPress={onKeyPressHanlder}
    />
  );
};

export default ChatContanier;
