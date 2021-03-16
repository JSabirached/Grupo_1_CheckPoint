module.exports = (req,res,next) => {
    if (req.session.user.category!="Usuario"){
        next()
    }else{
        res.redirect('/')
    }
}



