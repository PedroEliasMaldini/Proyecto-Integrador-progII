const db = require("../database/models");
const userController = {
  register: function (req, res) {
    res.render("createUser");
  },
  login: function (req, res) {
    res.render("loginUser");
  },
};

module.exports = userController;
