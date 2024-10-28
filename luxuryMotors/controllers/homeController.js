const db = require("../database/models");
const op = db.Sequelize.Op;

let homeController = {
  index: (req, res) => {
    db.Car.findAll()
      .then((results) => {
        res.render("home", { results, title: "Cars" });
      })
      .catch((err) => console.log(err));
  },
};

module.exports = homeController;
