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
