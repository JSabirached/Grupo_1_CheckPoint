//si nuevo usuario es igual 0 no pasa nada pero si es 1 entonces ese sera admin y dirigira a /admin



module.exports = (req,res,next) => {
    if (req.session.users.category==="Admin"){
        next()
    }else{
        res.redirect('/')
    }
}



