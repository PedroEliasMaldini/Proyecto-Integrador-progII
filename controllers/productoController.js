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
      },
      include: [
        {
          model: db.Usuario,
          as: 'usuario',
          attributes: ['id', 'username'],
        },
      ],
    };

    db.Producto.findAll(filtro)
      .then((result) => {
        return res.render('search-results', { result: result, qs: qs });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send('Error en la búsqueda');
      });
  },

  add: function (req, res) {
    return res.render("product-add");
},
addeado: function (req, res) {
  let form = req.body
  
  if (!form.imagen || form.imagen.trim() === "") {
    return res.send("La imagen no puede estar vacía o contener solo espacios.");
  }
  else if (!form.nombreProducto || form.nombreProducto.trim() === "") {
    return res.send("El nombre de producto no puede estar vacío o contener solo espacios.");
  }
  else if (!form.descripcion || form.descripcion.trim() === "") {
    return res.send("La descripcion no puede estar vacía o contener solo espacios.");
  }
  else if (!form.precio || form.precio.trim() === "") {
    return res.send("El precio no puede estar vacío o contener solo espacios.");
  }

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
