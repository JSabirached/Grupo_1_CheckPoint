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
inicioSecciones:(req,res)=>{
    res.render("inicioSecciones",{ 

    })
},



seccionBebidas:(req,res)=>{ db.Category.findOne({
    include : [{associate : 'Comidas'}],
    where :{
        name : 'bebidas'
    }
})
    .then(categorias =>{
        res.send(categorias)
        res.render("seccionBebidas",{result:categorias})
    })
},



seccionHamburguesas:(req,res)=>{ db.Category.findOne({
    include : [{associate : 'Comidas'}],
    where :{
        name : 'hamburguesas'
    }
})
    .then(categorias =>{
        res.send(categorias)
        res.render("seccionHamburguesas",{result:categorias})
    })

},



seccionPostres:(req,res)=>{ 
    db.Category.findAll({
         where :{
            name : 'postres'
        },
        include : [{associate : 'Comidas'}]
      
    })  
    
        .then(categorias =>{
            res.send(categorias)
            res.render("seccionPostres",{result:categorias})
        })
        .catch(error =>res.send(error))
       //  console.log(categorias)
    },


seccionPizzaEmpa: (req,res) => { db.Category.findOne({
    include : [{associate : 'Comidas'}],
    where :{
        name : 'PizzaEmpa'
    }
})
    .then(categorias =>{
        res.send(categorias)
        res.render("seccionPizzaEmpa",{result:categorias})
    })


}
}
