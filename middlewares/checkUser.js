module.exports=(req, res, next)=>{
  if (req.session.user){
  next()
}else{
  res.redirect("/users/login")
}
}

/* middleWare a nivel de aplicacion */






