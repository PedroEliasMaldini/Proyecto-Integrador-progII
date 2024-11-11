const db = require("../database/models");
const bcryptjs = require('bcryptjs');

const usersController = {
  getlogin: function (req, res) {
    return res.render("login");
  },

  postlogin: function (req, res) {
    let form = req.body;
  
    let filtro = {
      where: {
        email: form.email
      }
    };
  
    db.Usuario.findOne(filtro)
      .then((result) => {
        
        if (result != undefined) {
          let validarClave = bcryptjs.compareSync(form.contrasena, result.contrasena);
  
          if (validarClave) {
            return res.render("login-realizado", {result:result})
          } else {
            return res.send("Clave incorrecta");
          }
        } else {
          return res.render("login-realizado", {result:result})
        }
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).send("Error al iniciar sesión");
      });
  },

  getRegister: function (req, res) {
    return res.render("register");
  },

  postRegister: function (req, res) {
    let form = req.body;
    let pass = bcryptjs.hashSync(form.contrasena, 10);
    form.contrasena = pass;

    db.Usuario.create(form)
      .then((result) => {
        return res.render('confirmacion-registro');
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).send("Error al registrar el usuario");
      });
  }
};

module.exports = usersController;
