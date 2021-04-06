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
    let bebibas = db.Food.findAll({
        where : {
            id_category : 1
        }
    })
    let postres = db.Food.findAll({
        where : {
            id_category : 2
        }
    })
    let hamburguesas = db.Food.findAll({
        where : {
            id_category : 3
        }
    })
    let pizzas = db.Food.findAll({
        where : {
            id_category : 4
        }
    })
    Promise.all([bebibas,hamburguesas,pizzas,postres])
   .then(([bebibas,hamburguesas,pizzas,postres])=>{
    res.render("carta",{
        bebibas,hamburguesas,pizzas,postres
    })
   })
   
}

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