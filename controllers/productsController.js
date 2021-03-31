const fs = require('fs');
const db = require('../database/models')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const path = require('path');



module.exports={
/*iniciosecciones*/

NewFood:(req,res)=>{
  var {name,id, description,price,description,count,image,category,}=req.body
        
  
  var food={
            
           id:food.id,
           name:food.name,
           price: food.price,
           image:req.files[0].filename,
           category:"bebidas",
           description:descriptionFood,
           count,
          
           
        }
       if(count==1){
 food.bebidas.push(food)
}else
if(count==2){
    food.hamburguesas.push(food)
   }else
   if(count==3){
    food.postres.push(food)
   }else
   if(count==4){
    food.pizzas.push(food)
   }
    setproductos(food)

res.redirect("agregarproducto",)
},
agregarproducto:(req,res)=>{
    res.render("agregarproducto",{

    })
},
inicioSecciones:(req,res)=>{
    res.render("inicioSecciones",{ 

    })
},
seccionBebidas:(req,res)=>{
    
    let result  =food.filter(food => food.category=="bebidas");
    res.render("seccionBebidas",{result
    })
},
seccionHamburguesas:(req,res)=>{
    let result  =food.filter(food => food.category=="hamburguesas");
    res.render("seccionHamburguesas",{result

    })
},

seccionfoodPrincipales:(req,res)=>{
    res.render("seccionfoodPrincipales",{

    })
},


seccionPostres:(req,res)=>{
    let result  =food.filter(food => food.category=="postres");
    res.render("seccionPostres",{result

    })
},
/*seccion:(req,res)=>{
    let result  =food.filter(food => food.category=="pizzaEmpa");
    res.render("seccionPizzaEmpa",{result

})
},*/
seccionPizzaEmpa: (req,res) => {let foods = db.food.findAll({
    order : [
        ['id', 'ASC']
    ]
})
let cantidad = db.food.count();



Promise.all([foods,cantidad])
.then(([foods,cantidad]) => {
    return res.render('seccionPizzaEmpa', {
        foods,
        cantidad,
        
    })
})
.catch(error => console.log(error))


}
}
/*res.send(this.seccionPizzaEmpa)
    let Food = db.Food.findAll({include:[
        {association: 'category' ==pizzaEmpa},
    ]})
    
    let category = db.category.findAll();

    Promise.all([categorias, food])
    .then(([categorias, food]) => {
            res.render("seccion", {
                title: "Lista de pizza",
                Food: food,
                imagen:food,
                category:food,
                category

            })
        })
        
        .catch(error => console.log(error))
}*/