//si nuevo usuario es igual 0 no pasa nada pero si es 1 entonces ese sera admin y dirigira a /admin
const db = require('../database/models');

module.exports = (req, res, next) => {
  db.Usuario.findByPk(req.session.user.id)
      .then(user => {
        let admin = false
          if(user.category == 1){
              admin = true
          }
          if(admin){
              next();
          }else{
              res.redirect('/')
          }
      })
      .catch(errors => {
          res.redirect('/')
      })
}
