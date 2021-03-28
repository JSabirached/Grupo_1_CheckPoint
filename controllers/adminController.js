const {validationResult}=require('express-validator');
const db = require('../database/models');
const {Op} = require('sequelize');

module.exports = {
    index : (req,res) => {
        res.render('admin/index')
    },
    comidaList : (req,res) => {

        let Food = db.Food.findAll({include:[
            {association: 'category'},
        ]})
        let category = db.category.findAll();

        Promise.all([categorias, food])
        .then(([categorias, food]) => {
                res.render("admin/productoLista", {
                    title: "Lista de food",
                    Food: food,
                    imagen:food,
                    category:food,
                    category

                })
            })
            .catch(error => console.log(error))
    }
    ,
   
    comidaCreate : (req,res) => {
       res.render('admin/comidaCreate')

      
    
    },
    comidaStore : (req,res) =>{
        if(errors.isEmpty()){
            db.Comidas.create({
                name: req.name,
                price: Number(req.price),
                image: req.files[0].filename,
                category: req.category,
                description: req.description
            })
            .then(()=>{
                res.redirect('/admin')
           })
           .catch(error=> res.send(error))

        }
    }
/*
    comidaEdit : (req,res) => {
        
        let comida = comidas.find(comida => comida.id === +req.params.id);

        res.render('admin/comidaEdit',{
           id:req.params.id
        })
    },
    comidaUpdate : (req,res) => {
        
        const {name,price,category,description,image} = req.body;

        comidas.forEach(comida => {
            if(comida.id === +req.params.id){
                comida.id = Number(req.params.id);
                comida.name = name;
                comida.price = price;
                comida.category = category;
                comida.description = description;
                comida.image = image
            }
        });
        var errores=validationResult(req)
        if(!errores.isEmpty()){
            
            return res.render("admin/comidaEdit",{errores:errores.mapped(),old:req.body, id:req.params.id})
                
                    }
        fs.writeFileSync('./data/comida.json',JSON.stringify(comidas),'utf-8');
        res.redirect('/admin');
    },
    comidaDelete : (req,res) => {
        comidas.forEach(comida => {
            if(comida.id === +req.params.id){
                var aEliminar = comidas.indexOf(comida);
                comidas.splice(aEliminar,1)
            }
        });
        
        fs.writeFileSync('./data/comida.json',JSON.stringify(comidas),'utf-8');
        res.redirect('/admin');
    }
}
/*/}