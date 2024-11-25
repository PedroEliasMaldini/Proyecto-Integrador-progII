const db = require("../database/models");
const bcryptjs = require('bcryptjs');

const usersController = {
  getlogin: function (req, res) {
    return res.render("login");
  },

  postlogin: function (req, res) {
    let form = req.body;

    if (!form.contrasena || form.contrasena.trim() === "") {
      return res.send("La contraseña no puede estar vacía o contener solo espacios.");
    }
    else if (!form.email || form.email.trim() === "") {
      return res.send("El correo electronico no puede estar vacío o contener solo espacios.");
    }
  
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
    if (!form.contrasena || form.contrasena.trim() === "") {
      return res.send("La contraseña no puede estar vacía o contener solo espacios.");
    }
    else if (!form.email || form.email.trim() === "") {
      return res.send("El correo electronico no puede estar vacío o contener solo espacios.");
    }
    else if (!form.username || form.username.trim() === "") {
      return res.send("El nombre de usuario no puede estar vacío o contener solo espacios.");
    }
    let pass = bcryptjs.hashSync(form.contrasena, 10);

    form.contrasena = pass;


    db.Usuario.create(form)
      .then((result) => {
        return res.render('confirmacion-registro');
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).send("El mail esta registrado actualmente.");
      });
  },

  profile: function (req, res) {
    if (req.session.user) {
      console.log(req.session.user)
      return res.render('perfil', { user: req.session.user });
    } else {
      console.log("entro al else")
      return res.redirect('/users/login');
    }
  },

  viewProfile: function (req, res) {
    let id = req.params.id; // Captura el ID del usuario desde la URL

    db.Usuario.findByPk(id, {
        include: [{ 
            model: db.Producto, 
            as: "productos" // Alias definido en la asociación del modelo Usuario
        }]
    })
    .then(usuario => {
        if (!usuario) {
            return res.status(404).send("Usuario no encontrado");
        }

        // Renderiza la vista con el usuario y sus productos
        return res.render("view-profile", { 
            usuario, 
            productos: usuario.productos // Accede a los productos relacionados
        });
    })
    .catch(error => {
        console.error(error);
        return res.status(500).send("Error al cargar el perfil del usuario");
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
