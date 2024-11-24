module.exports = {
  ensureLoggedIn: (req, res, next) => {
    if (req.session && req.session.user) {
      return next(); // El usuario está logueado, continuar
    }
    return res.redirect('/users/login'); // Redirigir al login
  },

  ensureLoggedOut: (req, res, next) => {
    if (!req.session || !req.session.user) {
      return next(); // El usuario no está logueado, continuar
    }
    return res.redirect('/'); // Redirigir al home si está logueado
  }
};
