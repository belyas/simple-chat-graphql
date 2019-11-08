import React from "react";

const Chat = ({ isLoggedin }) => {
  if (!isLoggedin) return null;

  return <div>Chat room</div>;
};

export default Chat;
