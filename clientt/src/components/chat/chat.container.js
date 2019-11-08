import React, { useContext } from "react";

import Chat from "./chat.component";
import { AuthContext } from "../../context";

const ChatContanier = () => {
  const authContext = useContext(AuthContext);

  return <Chat isLoggedin={authContext[0]} />;
};

export default ChatContanier;
