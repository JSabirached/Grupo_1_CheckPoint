  module.exports = (req,res,next) =>{
      if(req.session.users){
         next()
     }else{
         res.redirect('/users/login')
     }
  }


/* middleWare a nivel de aplicacion */






