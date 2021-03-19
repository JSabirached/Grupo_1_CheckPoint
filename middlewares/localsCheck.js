//si levantaste seccion mandalo a locals

module.exports = (req,res,next) => {
    if (req.session.users){
        req.locals.user = req.session.users;
    }
    next()
}

