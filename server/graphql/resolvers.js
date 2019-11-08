const { messages } = require("../db");

const Query = {
  messages: () => messages.list()
};

module.exports = {
  Query
};
