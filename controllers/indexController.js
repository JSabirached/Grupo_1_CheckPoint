module.exports={
    
    index :  (req,res)=>{
        res.render('index')
    },
    novedades :  (req,res)=>{
        res.render('novedades')
    },
detalledecompra:(req,res)=>{
res.render("detallesdecompra",{

    
})
},
detallesdelproducto:(req,res)=>{
    res.render("detallesdeproducto",{
    
        
    
})
},
login:(req,res)=>{
    res.render("login",{

    })
},
registro:(req,res)=>{
    res.render("registro",{

    })
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
},
novedades:(req,res)=>{
    res.render("novedades",{

    })
}
}