module.exports={
    
 index :  (req,res)=>{
            res.render('index')
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
}
}