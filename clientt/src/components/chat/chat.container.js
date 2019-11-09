import React, { useContext, useState, useEffect } from "react";

import Chat from "./chat.component";
import { AuthContext } from "../../context";
import {
  ADD_MESSAGE,
  onMessagedAdded,
  getMessages
} from "../../graphql/queries";
import client from "../../graphql/client";

const KEYBOARD_ENTER_NUM = 13;

const ChatContanier = () => {
  const { isLogged, currentUser } = useContext(AuthContext);
  const [currentMessages, setCurrentMessages] = useState([]);
  let subscription = null;

  useEffect(() => {
    async function fetchMessages() {
      const messages = await getMessages();

      setCurrentMessages(messages);

      // eslint-disable-next-line
      subscription = onMessagedAdded(message => {
        setCurrentMessages(oldMessages => oldMessages.concat(message));
      });
    }

    fetchMessages();

    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, []);

  const onKeyPressHanlder = e => {
    //   event is nullished in case of async operation
    // e.persist();
    const message = e.target.value.trim();

    if (e.which === KEYBOARD_ENTER_NUM && message && isLogged) {
      client.mutate({
        mutation: ADD_MESSAGE,
        variables: { user: currentUser.user, message }
      });

      e.target.value = "";
    }
  };

  return (
    <Chat
      isLoggedin={isLogged}
      messages={currentMessages}
      user={(currentUser && currentUser.user) || "Unkonwn"}
      onKeyPress={onKeyPressHanlder}
    />
  );
};

export default ChatContanier;
