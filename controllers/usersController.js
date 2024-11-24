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
        email: form.email,
      },
    };
  
    db.Usuario.findOne(filtro)
      .then((result) => {
        if (result) {
          let validarClave = bcryptjs.compareSync(form.contrasena, result.contrasena);
  
          if (validarClave) {
            
            req.session.user = {
              id: result.id,
              nombre: result.username,
              email: result.email,
            };

            console.log(req.session.user)
  
            return res.redirect('/'); // Redirigir al home o donde corresponda
          } else {
            return res.send('Clave incorrecta');
          }
        } else {
          return res.send('Usuario no encontrado');
        }
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).send('Error al iniciar sesión');
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
  },
  
  logout: function (req, res) {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
        return res.status(500).send('Error al cerrar sesión');
      }
      res.redirect('/');
    });
  }
};

module.exports = usersController;
