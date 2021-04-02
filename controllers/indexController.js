//var {getproductos,setproductos}=require("../database/models");
const fs = require('fs');
var db = require("../database/models");


module.exports={
  
    index :  (req,res)=>{
        res.render('index')
    },
    novedades :  (req,res)=>{
        res.render('novedades')
    },
detalledecompra:(req,res)=>{
res.render("detalledecompra",{

    
})
},
detallesdelproducto:(req,res)=>{
    res.render("detallesdeproducto",{
    
        
    
})
},

/*agregar plato */
agregarproducto:(req,res)=>{
    res.render("agregarproducto",{plato

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
},
nosotros:(req,res)=>{
    res.render("nosotros",{

    })
},
recetas:(req,res)=>{
    res.render("recetas",{

    })
},

}