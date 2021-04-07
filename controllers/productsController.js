const fs = require('fs');
const db = require('../database/models')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const path = require('path');
const {Op} = require('sequelize');



module.exports={
/*iniciosecciones*/




agregarproducto:(req,res)=>{
    res.render("agregarproducto",{

    })
},
secciones:(req,res)=>{
    db.Category.findOne({
        where : {
            id:req.params.id
        },
    include : [{association : 'Comidas'}],
    
})
.then(categoria =>{
  //  return res.send(categoria),
    res.render("secciones",{categoria})
})


    
},



seccionBebidas:(req,res)=>{ db.Category.findOne({
    include : [{association : 'Comidas'}],
    where :{
        name : 'bebidas'
    }
})
    .then(categorias =>{
        res.send(categorias)
        res.render("secciones",{result:categorias})
    })
},



seccionHamburguesas:(req,res)=>{ db.Category.findOne({
    include : [{association : 'Comidas'}],
    where :{
        name : 'hamburguesas'
    }
})
    .then(categorias =>{
        res.send(categorias)
        res.render("secciones",{result:categorias})
    })

},



seccionPostres:(req,res)=>{ 
    db.Category.findAll({
         where :{
            name : 'postres'
        },
        include : [{association : 'Comidas'}]
      
    })  
    
        .then(categorias =>{
            res.send(categorias)
            res.render("secciones",{result:categorias})
        })
        .catch(error =>res.send(error))
       //  console.log(categorias)
    },


seccionPizzaEmpa: (req,res) => { db.Category.findOne({
    include : [{association : 'Comidas'}],
    where :{
        name : 'PizzaEmpa'
    }
})
    .then(categorias =>{
        res.send(categorias)
        res.render("secciones",{result:categorias})
    })


}
}
