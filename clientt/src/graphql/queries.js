import { gql } from "apollo-boost";

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
