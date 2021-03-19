module.exports = (req , res , next ) => {
    if (typeof req.session.users.category != "Usuario"){
        next();
    } else {
        res.redirect('/')
  }
};


