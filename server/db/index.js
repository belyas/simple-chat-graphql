const { DataStore } = require("notarealdb");

const store = new DataStore("./data");
const users = store.collection("users");
const messages = store.collection("messages");

module.exports = {
  users,
  messages
};
