// modulo de ruta que va hacia user js
module.exports = (req,res,next) =>{
    if (req.session.user){
        next()

    }else{
        res.redirect('users/login')
    }
}