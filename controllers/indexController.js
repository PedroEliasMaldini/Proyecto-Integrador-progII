const { Association } = require("sequelize");
const db = require("../database/models");

const indexController = {
  index: function (req, res) {
    let filtro = {
      order: [['createdAt', 'DESC']],
      include: [{ association: "usuario" }]
    };
    db.Producto.findAll(filtro)
      .then((result) => {
        return res.render("index", { result: result });
        return res.send(result); // para ver si funciona
      })
      .catch((err) => {});
  },

  detalle: function (req, res) {
    let id = req.params.id;
    let filtro = {
      where: [{ id: id }],
    };
    

    db.Producto.findOne(filtro)
      .then((result) => {
        return res.render("product", { result: result });
      })
      .catch((err) => {});
  },
};

module.exports = indexController;