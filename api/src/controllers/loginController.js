const { User } = require("../db.js");

const getUsers = async () => {
  const showUsers = await User.findAll();

  if (!showUsers.length) return "SEXO";

  return showUsers;
};

module.exports = getUsers;
