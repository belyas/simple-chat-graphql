const { messages } = require("../db");

const Query = {
  messages: () => messages.list()
};

const Mutation = {
  addMessage: (_, { user, message }) => {
    const createData = { user, message };
    const messageId = messages.create(createData);

    return { id: messageId, ...createData };
  }
};

module.exports = {
  Query,
  Mutation
};
