  module.exports = (req,res,next) =>{
      if(req.session.user){//si esta levantado session
         res.locals.user =req.user //poneme en locals user lo que esta en req.session user
      }
      next()
  }


/* middleWare a nivel de aplicacion */






/*
modulo de ruta que va hacia user js
module.exports = (req,res,next) =>{
    if (req.session.user){
        next()

    }else{
        res.redirect('users/login')
    }
}*/