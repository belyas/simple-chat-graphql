import { gql } from "apollo-boost";

import client from "./client";

export const MESSAGES_LIST = gql`
  query MessagesQuery {
    messages {
      id
      user
      message
    }
  }
`;

export const ADD_MESSAGE = gql`
  mutation addMessageMutation($user: String!, $message: String!) {
    addMessage(user: $user, message: $message) {
      id
      user
      message
    }
  }
`;

const MESSAGE_ADDED = gql`
  subscription onMessagedAdded {
    messageAdded {
      id
      user
      message
    }
  }
`;

export const getMessages = async () => {
  const { data } = await client.query({ query: MESSAGES_LIST });

  return data.messages;
};

export const onMessagedAdded = messageCallback => {
  const observable = client.subscribe({ query: MESSAGE_ADDED });

  return observable.subscribe(({ data }) => {
    messageCallback(data.messageAdded);
  });
};
