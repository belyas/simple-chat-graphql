const { PubSub } = require("graphql-subscriptions");

const { messages } = require("../db");

const pubsub = new PubSub();
const MESSAGE_ADDED = "MESSAGE_ADDED";

const Query = {
  messages: () => messages.list()
};

const Mutation = {
  addMessage: (_, { user, message }) => {
    const createData = { user, message };
    const messageId = messages.create(createData);
    const newMessage = { id: messageId, ...createData };

    pubsub.publish(MESSAGE_ADDED, { messageAdded: newMessage });

    return newMessage;
  }
};

const Subscription = {
  messageAdded: {
    subscribe: () => pubsub.asyncIterator([MESSAGE_ADDED])
  }
};

module.exports = {
  Query,
  Mutation,
  Subscription
};
