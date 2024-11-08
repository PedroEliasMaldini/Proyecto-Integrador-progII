const db = require("../database/models");

const productoController = {
  search: function (req, res) {
    return res.render("search-results");
  },
  add: function (req, res) {
    return res.render("product-add");
  },
  
};

module.exports = productoController;
