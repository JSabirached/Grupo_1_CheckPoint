const {check,validationResult,body}=require('express-validator');
const db = require('../database/models');

module.exports = {
    index : (req,res) => {
        res.render('admin/index')
    },
    comidaList : (req,res) => {

        db.Comidas.findAll()
        .then(comidas => {
            res.send(comidas)
            return res.render('admin/comidaList',{
                comidas
            })
        })

       
    },
    comidaCreate : (req,res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()){
            db.Comidas.create({
                name: req.name,
                price: Number(req.price),
                image: req.files[0].filename,
                category: req.category,
                description: req.description
            })
            .then(()=>{
                res.redirect('/')
            })
        }
    
    },
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