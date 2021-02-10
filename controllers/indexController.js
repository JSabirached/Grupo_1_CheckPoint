module.exports={
    
    index :  (req,res)=>{
        res.render('index')
    },
   



agregarproducto:(req,res)=>{
    res.render("agregarproducto",{

    })
},
/*index*/
cartadelivery:(req,res)=>{
    res.render("carta",{

    })
},
locales:(req,res)=>{
    res.render("locales",{

    })
},

reservas:(req,res)=>{
    res.render("reservas",{

    })
},


promociones:(req,res)=>{
    res.render("promociones",{

    })
}
}
