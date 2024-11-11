const db = require("../database/models");
const op = db.Sequelize.Op;

const productoController = {

  search: function (req, res) {

    let qs = req.query.search;
    let filtro = {
      where: {
        nombre_producto: {
          [op.like]: `%${qs}%` 
        }
      }
    };

    db.Producto.findAll(filtro)
      .then((result) => {
        return res.render("search-results", { result: result, qs:qs });
      })
      .catch((err) => {
        console.error(err);
      });
  },

  add: function (req, res) {
    return res.render("product-add");
},
};

module.exports = productoController;
