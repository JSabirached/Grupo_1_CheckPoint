module.exports = (req,res,next) => {
    if(req.cookies.recordar){
        req.session.user = req.cookies.recordar
    }
    next()
}






