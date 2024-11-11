const db = require("../database/models");
const op = db.Sequelize.Op;

const productoController = {

  search: function (req, res) {

    let qs = req.query.search;
    let filtro = {
      where: {
        nombreProducto: {
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
addeado: function (req, res) {
  let form = req.body
  db.Producto.create(form)
    .then((result) => {
      return res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).send("Error al registrar el usuario");
    });
  
}}

module.exports = productoController;
