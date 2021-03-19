module.exports = (req,res,next) => {
    if(req.cookies.userCom4){
        req.session.users = req.cookies.userCom4
    }
    next()
}






