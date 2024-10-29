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

  detalle: (req, res) => {

    let id = req.params.id;

    db.Car.findByPk(id)
      .then((results) => {
        res.render("detalle", { results, title: results.name });
      })
      .catch((err) => console.log(err));

  },
  filtrado: (req, res) => {
  let marca = req.params.marca;
  let filtro = {where: [{brand:marca}]}

    db.Car.findAll(filtro)
      .then((results) => {
        res.render("home", { results, title: results.brand });
      })
      .catch((err) => console.log(err));

  },
};

module.exports = homeController;
