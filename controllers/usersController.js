const db = require("../database/models");
const bcryptjs = require('bcryptjs');

const usersController = {
  login: function (req, res) {
    return res.render("login");
  },

  getRegister: function (req, res) {
    return res.render("register");
  },

  postRegister: function (req, res) {

    let form = req.body
    let pass = bcryptjs.hashSync(form.contrasena, 10);
    form.contrasena = pass;

    db.Usuario.create(form)
    .then((result) => {
      return res.redirect('/users/login')
    }).catch((err) => {
      return console.log(err);
      
    });
   
  },
};

module.exports = usersController;
